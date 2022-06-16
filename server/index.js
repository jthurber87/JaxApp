const express = require("express");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const bcrypt = require('bcryptjs');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('dotenv').config()

const { MongoClient } = require('mongodb')
const uri = process.env.DB_URI
const client = new MongoClient(uri);
const twilioClient = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

app.post('/api/messages', (req, res) => {
    res.header('Content-Type', 'application/json');
    console.log(req.body)
    twilioClient.messages
        .create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to: req.body.to,
            body: req.body.body
        })
        .then(() => {
            res.send(JSON.stringify({ success: true }));
        })
        .catch(err => {
            console.log(err);
            res.send(JSON.stringify({ success: false }));
        });
})

const requests = [
    {
        name: 'Bathroom',
        urgency: '',
        icon: "/toilet.svg",
    },
    {
        name: 'Pain Meds',
        urgency: '',
        icon: "/pill.svg",
    },
    {
        name: 'Hang Out',
        urgency: '',
        icon: "/couch.svg",
    },
    {
        name: 'Water',
        urgency: '',
        icon: "/water.svg",
    },
    {
        name: 'Food',
        urgency: '',
        icon: "/food.svg",
    },
]

client.connect()

app.get("/requests", async (req, res) => {
    await client.db("JaxApp").collection("requests").find({}).toArray()
        .then(result => {
            res.send(result);
        })
});

app.get('/requests/seed', async (req, res) => {
    await client.db("JaxApp").collection("requests").deleteMany({});
    const result = await client.db("JaxApp").collection("requests").insertMany(requests);
    console.log(`Listings created: ${result.insertedCount}`);
    res.redirect('/requests')
})

app.post('/requests/new', async (req, res) => {
    await client.db("JaxApp").collection("requests").insertOne(req.body);
})

app.post('/users/register', async (req, res) => {
    await client.db("JaxApp").collection("users").findOne({ email: req.body.email })
        .then(result => {
            console.log(result)
            if (result === null) {
                let hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
                req.body.password = hash;
                console.log(req.body)
                client.db("JaxApp").collection("users").insertOne(req.body);
                res.send(JSON.stringify({ success: true }));
            } else {
                res.status(500).send(JSON.stringify({ success: false }));
            }
        })
})

app.post('/users/login', async (req, res) => {
    await client.db("JaxApp").collection("users").findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                let hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
                if (bcrypt.compareSync(req.body.password, hash)) {
                    res.send(JSON.stringify({ success: true, user: user }));
                } else {
                    res.send(JSON.stringify({ success: false }));
                }
            } else {
                res.send(JSON.stringify({ success: false }));
            }
        }
        )
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});