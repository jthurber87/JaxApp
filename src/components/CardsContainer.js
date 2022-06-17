import { useState, useEffect } from 'react'
import Card from './Card';
import axios from 'axios'

export default function CardsContainer({ CGPhone }) {

    const [requests, setRequests] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('/requests')
                .then(data => setRequests(data.data))
        }
        setTimeout(() => fetchData(), 1000)
    }, [])

    // useEffect(() => {
    //     setCGPhone(prompt("Please enter your caregivers cell phone number to receive text messages from the Jax App"))
    // }, [])

    return (
        <div className="cards-container animate__fadeIn">
            {requests ? requests.map((request, idx) => <Card key={idx} request={request} CGPhone={CGPhone} />) : <img src="/Spinner-1s-200px.svg" style={{ width: "30vw" }} />}
        </div>
    )
}