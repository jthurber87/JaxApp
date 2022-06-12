import Card from './Card';
import requests from '../requests.js'

export default function CardsContainer() {
    return (
        <div className="cards-container">
            {requests.map((request, i) => (
                <Card key={i} request={request} />
            ))}

        </div>
    )
}