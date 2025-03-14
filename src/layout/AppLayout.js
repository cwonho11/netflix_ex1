import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div data-bs-theme="dark">        
        <Navbar expand="lg" className="bg-black text-white">
        <Container fluid>
            <Navbar.Brand href="/">
                <img
                src="https://cdn.dribbble.com/users/9378043/screenshots/16832559/netflix__1_.png"
                width="100"
                height="80"
                className="d-inline-block align-top"
                alt="netflix logo"
                />                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/movies">Movies</Nav.Link>                
            </Nav>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-danger">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <Outlet />
    </div>
    
  )
}

export default AppLayout