import { useState, useEffect } from 'react'

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
                body: `Request: ${request.name} \n Urgency: ${urgency}.`
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setState({
                        error: false,
                        submitting: false,
                        message: {
                            to: '',
                            body: ''
                        }
                    });
                } else {
                    setState({
                        error: true,
                        submitting: false
                    });
                }
            });
    }
    return (
        <>
            < div className="low-urgency card" onClick={(e) => handleClick(e, "Soon")} >
                {state.submitting ? <img src="/circular-arrow-svgrepo-com.svg" /> :
                    <>
                        <img src={request.icon} alt={request.name} />
                        <p>{request.name}<br /><u>Soon</u></p>
                    </>
                }
            </div >
            < div className="high-urgency card" onClick={(e) => handleClick(e, "Now")}>
                <img src={request.icon} alt={request.name} />
                <p>{request.name}<br /><u>Now</u></p>
            </div >
        </>
    )
}