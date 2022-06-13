import { useState, useEffect } from 'react'
import Card from './Card';

export default function CardsContainer() {

    const [requests, setRequests] = useState(null);

    useEffect(() => {
        fetch('/requests')
            .then(res => res.json())
            .then(data => setRequests(data))
    }, [])

    return (
        <div className="cards-container">
            {requests ? requests.map((request, idx) => <Card key={idx} request={request} />) : "Loading..."}
        </div>
    )
}