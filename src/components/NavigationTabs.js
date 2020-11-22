import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function NavigationTabs() {
    return (
        <>
            <Navbar className="m-2" bg="dark" variant="dark" expand="sm">
                <Navbar.Brand href="#home"> J F </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="mr-4" as={Link} to={"/about"}>About</Nav.Link>
                        <Nav.Link className="mx-4" as={Link} to={"/portfolio"}>Portfolio</Nav.Link>
                        <Nav.Link className="ml-4" as={Link} to={"/contact"}>Contact</Nav.Link>          
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
