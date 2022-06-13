const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const { MongoClient } = require('mongodb')

const requests = [
    {
        name: 'bathroom',
        urgency: '',
        icon: "/628-toilet.svg.png",
    },
    {
        name: 'pain meds',
        urgency: '',
        icon: "/628-toilet.svg.png",
    },
    {
        name: 'hang out',
        urgency: 'soon',
        icon: "/628-toilet.svg.png",
    },
    {
        name: 'water',
        urgency: 'soon',
        icon: "/628-toilet.svg.png",
    },
    {
        name: 'food',
        urgency: 'soon',
        icon: "/628-toilet.svg.png",
    },
]

const uri = "mongodb+srv://jthurber87:Cheetoh71@cluster0.4c7nhhi.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri);
async function main() {

    try {
        await client.connect();

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

client.connect()

// async function createRequests(client, requests) {
//     const result = await client.db("JaxApp").collection("requests").insertMany(requests);
//     console.log(`New listing created with the following id: ${result.insertedId}`);
// }



app.get("/requests", async (req, res) => {
    await client.db("JaxApp").collection("requests").find({}).toArray()
        .then(result => {
            res.send(result);
        })
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});