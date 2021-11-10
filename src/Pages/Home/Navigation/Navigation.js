import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
const Navigation = () => {
    return (
        <Navbar className="nav-menu" collapseOnSelect expand="lg" variant="dark">
      <Container>
      <Navbar.Brand href="#home"><img src="https://cdn11.bigcommerce.com/s-6d1tnboxyx/images/stencil/original/logo4_1550778558__25495.original.png" alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} className="text-dark fw-bold" to="/home">Home</Nav.Link>
          <Nav.Link as={Link} className="text-dark fw-bold" to="/destination">Explore</Nav.Link>
          <Nav.Link as={Link} className="text-dark fw-bold" to="/manageAllOrders">Manage All Bookings</Nav.Link>
          <Nav.Link as={Link} className="text-dark fw-bold" to="/addservice">Add Package</Nav.Link>
          
          {/* {user?.email ? (
                   <>
                  <Nav.Link as={Link} className="text-dark fw-bold" to="/myservices">My Bookings</Nav.Link>
                  
                    <Button  className="text-danger fw-bold" onClick={logOut} variant="light">
                      Logout
                    </Button>
                   
                   </>
    
                  ) : (
                    <Nav.Link className="text-danger fw-bold border" as={Link} to="/login">
                      Login
                    </Nav.Link>
                  )} */}
          
        </Nav>
       
      </Navbar.Collapse>
      </Container>
    </Navbar>
      );
    };

export default Navigation;