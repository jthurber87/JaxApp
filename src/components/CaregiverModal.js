import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function CaregiverModal({ show, setShow, CGPhone, setCGPhone }) {
    const [input, setInput] = useState("");

    const handleClose = () => { setShow(false); setCGPhone(input); }
    const handleChange = (e) => setInput(e.target.value)

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Caregiver's Phone Number:</Modal.Title>
                </Modal.Header>
                <Modal.Body><input onChange={handleChange} value={CGPhone}></input></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}