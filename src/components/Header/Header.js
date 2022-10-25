import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <Navbar className="navbar w-100" fixed="top" expand="lg">
      <Container>
          <Link to="/" className="fw-bold text-decoration-none fs-3 text-white">Courseella</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              className="text-decoration-none text-white my-1 my-sm-0 mx-3 "
              to="/home"
            >
              Home
            </Link>
            <Link
              className="text-decoration-none text-white my-1 my-sm-0 mx-3 "
              to="/courses"
            >
              Courses
            </Link>
            <Link
              className="text-decoration-none text-white my-1 my-sm-0 mx-3 "
              to="/faq"
            >
              FAQ
            </Link>
            <Link
              className="text-decoration-none text-white my-1 my-sm-0 mx-3 "
              to="/blog"
            >
              Blog
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
