import ReactCardFlip from 'react-card-flip';
import { useState } from 'react'

export default function Card({ request }) {
    const [isFlipped, setIsFlipped] = useState(false)

    function handleClick(e) {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }




    return (
        <>
            < div className="low-urgency card" >
                <img src={request.icon} alt={request.name} />
                <p>{request.name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}<br /><u>Soon</u></p>
            </div >
            < div className="high-urgency card" >
                <img src={request.icon} alt={request.name} />
                <p>{request.name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}<br /><u>Now</u></p>
            </div >
        </>
    )
}