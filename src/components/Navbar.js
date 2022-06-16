import { Navbar, Nav } from 'react-bootstrap'
import { useState } from 'react'
import CaregiverModal from './CaregiverModal'

export default function Navigation({ CGPhone, setCGPhone, user }) {
    const [show, setShow] = useState(false)
    if (user.name) {
        console.log(user)
    } else {
        console.log("no user")
    }
    return (
        <>
            <Navbar fixed="top" bg="light" expand="xl">
                <Navbar.Brand href="/">
                    <img
                        src="/logo.png"
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        alt="JaxApp logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="/">JaxApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        {user.name ?
                            <>
                                <Nav.Link className="ms-auto" href="/add-request">[  <u>Add Request</u>  ]</Nav.Link>
                                <Nav.Link className="ms-auto" onClick={() => setShow(true)}>[ <u>Set Caregiver Phone Number</u> ]</Nav.Link>
                                <Nav.Link className="ms-auto">{user.name}</Nav.Link>
                            </>
                            :
                            <Nav.Link className="ms-auto" href="/login"> <u>[ Login ]</u> </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <CaregiverModal show={show} setShow={setShow} CGPhone={CGPhone} setCGPhone={setCGPhone} />
        </>
    )
}