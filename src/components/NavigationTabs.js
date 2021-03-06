import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function NavigationTabs() {
    return (
        <>
            <Navbar className="m-2 custom-nav" bg="dark" variant="dark" expand="sm">
                <Navbar.Brand href="#home"> J F </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="mr-0 mr-sm-4" as={Link} to={"/about"}>About</Nav.Link>
                        <Nav.Link className="mx-0 mx-sm-4" as={Link} to={"/portfolio"}>Portfolio</Nav.Link>
                        <Nav.Link className="ml-0 ml-sm-4" as={Link} to={"/contact"}>Contact</Nav.Link>          
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
