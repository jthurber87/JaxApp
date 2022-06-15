import { Navbar, Nav } from 'react-bootstrap'

export default function Navigation({ setCGPhone }) {

    return (
        <>
            <Navbar fixed="top" bg="light" expand="xl">
                <Navbar.Brand href="/home">
                    <img
                        src="/logo.png"
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        alt="JaxApp logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="/home">JaxApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="ms-auto" href="/add-request">[  <u>Add Request</u>  ]</Nav.Link>
                        <Nav.Link className="ms-auto" onClick={() => setCGPhone(parseInt(prompt("Please enter your caregiver's cell phone number to receive text messages from JaxApp")))}>[ <u>Set Caregiver Phone Number</u> ]</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}