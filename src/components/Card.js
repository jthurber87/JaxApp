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
                body: request.name + " " + urgency
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
            < div className="low-urgency card" onClick={(e) => handleClick(e, "soon")} >
                <img src={request.icon} alt={request.name} />
                <p>{request.name.replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                })} < br /> <u>Soon</u></p>
            </div >
            < div className="high-urgency card" onClick={(e) => handleClick(e, "now")}>
                <img src={request.icon} alt={request.name} />
                <p>{request.name.replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                })} < br /> <u>Now</u></p>
            </div >
        </>
    )
}