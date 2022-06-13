import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

export default function Navigation() {
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
                        <Nav.Link className="ms-auto" href="/add-request">Add Request</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}