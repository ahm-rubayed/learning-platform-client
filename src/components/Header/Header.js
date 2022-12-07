import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);

  const logout = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  return (
    <Navbar className="navbar w-100" fixed="top" expand="lg">
      <Container className="">
        <Link to="/" className="fw-bold text-decoration-none fs-3 text-white">
          Courseella
        </Link>
        <Navbar.Toggle
          className="text-white"
          aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Link
              className="text-decoration-none text-white my-1 my-sm-0 mx-3 py-2"
              to="/home">
              Home
            </Link>
            <Link
              className="text-decoration-none text-white my-1 my-sm-0 mx-3 py-2"
              to="/courses">
              Courses
            </Link>
            <Link
              className="text-decoration-none text-white my-1 my-sm-0 mx-3 py-2"
              to="/faq">
              FAQ
            </Link>
            <Link
              className="text-decoration-none text-white my-1 my-sm-0 mx-3 py-2"
              to="/blog">
              Blog
            </Link>

            {user?.uid ? (
              <Link
                onClick={logout}
                className="text-decoration-none text-white my-2
                my-sm-0 mx-3 mt-0 py-2">
                Logout
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-decoration-none text-white my-2 my-sm-0 mx-3
                 mt-0 py-2 text-center px-4">
                Login
              </Link>
            )}

            {user?.photoURL ? (
              <div>
                <img
                  src={user.photoURL}
                  className="rounded-circle avatar mt-2 mt-xl-0"
                  alt=""
                  title={user.displayName}/>
              </div>)
              :
              (
              <p></p>
            )}
            <div>
              <div className="switch-checkbox">
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={() => setDarkMode(!darkMode)}/>
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
