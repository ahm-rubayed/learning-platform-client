import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home" className='fw-bold'>Courseella</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='text-decoration-none text-muted my-1 my-sm-0 mx-3 ' to="/home">Home</Link>
            <Link className='text-decoration-none text-muted my-1 my-sm-0 mx-3 ' to="/courses">Courses</Link>
            <Link className='text-decoration-none text-muted my-1 my-sm-0 mx-3 ' to="/faq">FAQ</Link>
            <Link className='text-decoration-none text-muted my-1 my-sm-0 mx-3 ' to="/blog">Blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;