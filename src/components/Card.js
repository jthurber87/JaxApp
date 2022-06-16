import { useState } from 'react'

export default function Card({ request, CGPhone }) {

    const [state, setState] = useState(
        {
            submitting: false,
            error: false
        }
    )

    function handleClick(e, urgency) {
        e.preventDefault();
        setState({ submitting: true });
        fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: CGPhone,
                body: `\n${request.name}, ${urgency} please!`
            })
        })
    }
    return (
        <>
            < div className="low-urgency card" onClick={(e) => handleClick(e, "soon")} >
                <img src={request.icon} alt={request.name} className="icon" />
                <p>{request.name}
                    <br /><u>Soon</u></p>
            </div >
            < div className="high-urgency card" onClick={(e) => handleClick(e, "now")}>
                <img src={request.icon} alt={request.name} className="icon" />
                <p>{request.name}
                    <br /><u>Now</u></p>
            </div >
        </>
    )
}