import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Navigation.css";
const Navigation = () => {
  const { user, logOut } = useAuth();

  return (
    <Navbar className="nav-menu" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand to="/home">
          <img
            src="https://woodpeckerbd.com/wp-content/uploads/2021/09/Woodpecker-logo-wc-1.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle className="border-dark bg-secondary" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} className="text-dark fw-bold" to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} className="text-dark fw-bold" to="/allproducts">
              Explore
            </Nav.Link>

            {user?.email ? (
              <>
                <Nav.Link
                  as={Link}
                  className="text-dark fw-bold"
                  to="/dashboard"
                >
                  Dashboard
                </Nav.Link>
               

                <Button
                  onClick={logOut}
                  className="text-danger fw-bold me-2"
                  variant="light"
                >
                  Logout
                </Button>
                <Nav.Link className="text-primary border-bottom">
                  User: {user.displayName}
                </Nav.Link>
              </>
            ) : (
              <Nav.Link
                className="text-danger fw-bold border"
                as={Link}
                to="/login"
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
