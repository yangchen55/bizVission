import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo2 from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const RegisterHeader = () => {
  return (
    <div>
    <Navbar bg='sucess' expand="md">
<Container>
  <Navbar.Brand href="/"><img style={{width:"14vh"}} src={logo2}/>

  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
   <Link to="/sign-in"><Button>Sign In</Button></Link>
    
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
    </div>
  )
}
