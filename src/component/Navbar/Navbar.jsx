import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MyNavbar = () => {
  return (
    <div className='navbar-section'>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='brand-icon' href="#home"><img className='img-fluid' src={process.env.PUBLIC_URL + '/assets/images/self-logo.png'} alt='logo'/></Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link className='navbar-link' as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link className='navbar-link' as={Link} to={'/about'} >About</Nav.Link>
            <Nav.Link className='navbar-link' as={Link} to={'/contact'}>Contact Us</Nav.Link>
          </Nav>
          <Button className='header-button'>Login</Button>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavbar;