import ReactCardFlip from 'react-card-flip';
import { useState } from 'react'

export default function Card() {
    const [isFlipped, setIsFlipped] = useState(false)

    function handleClick(e) {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }

    return (
        <ReactCardFlip className="front" isFlipped={isFlipped} flipDirection="horizontal" >
            {/* <YOUR_FRONT_CCOMPONENT> */}
            <div className="card front" >
                This is the front of the card.
                <img src="/circular-arrow-svgrepo-com.svg" style={{ width: '15px', marginTop: 'auto', marginLeft: 'auto', position: 'relative' }} onClick={handleClick} />
            </div>
            {/* </YOUR_FRONT_CCOMPONENT> */}

            {/* <YOUR_BACK_COMPONENT> */}
            <div className="card back">
                This is the back of the card.
                <img src="/circular-arrow-svgrepo-com.svg" style={{ width: '15px', marginTop: 'auto', marginLeft: 'auto', position: 'relative' }} onClick={handleClick} />

            </div>
            {/* </YOUR_BACK_COMPONENT> */}
        </ReactCardFlip>
    )
}