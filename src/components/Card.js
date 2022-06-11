import ReactCardFlip from 'react-card-flip';
import { useState } from 'react'

export default function Card() {
    const [isFlipped, setIsFlipped] = useState(false)

    function handleClick(e) {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
            {/* <YOUR_FRONT_CCOMPONENT> */}
            <div className="card">
                This is the front of the card.
                <button onClick={handleClick}>Click to flip</button>
            </div>
            {/* </YOUR_FRONT_CCOMPONENT> */}

            {/* <YOUR_BACK_COMPONENT> */}
            <div className="card">
                This is the back of the card.
                <button onClick={handleClick}>Click to flip</button>
            </div>
            {/* </YOUR_BACK_COMPONENT> */}
        </ReactCardFlip>
    )
}