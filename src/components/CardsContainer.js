import { useState, useEffect } from 'react'
import Card from './Card';

export default function CardsContainer() {

    const [requests, setRequests] = useState(null);
    const [CGPhone, setCGPhone] = useState(null)


    useEffect(() => {
        fetch('/requests')
            .then(res => res.json())
            .then(data => setRequests(data))
    }, [])

    useEffect(() => {
        setCGPhone(prompt("Please enter your caregivers cell phone number to receive text messages from the Jax App"))
    }, [])

    return (
        <div className="cards-container">
            {requests ? requests.map((request, idx) => <Card key={idx} request={request} CGPhone={CGPhone} />) : "Loading..."}
        </div>
    )
}