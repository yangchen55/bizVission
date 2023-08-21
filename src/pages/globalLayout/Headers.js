import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import './header.css'
import logo from '../../assets/logo2.png';
import { Link } from 'react-router-dom';

const Headers = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (

        <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }} >
            <Navbar expand="md" className={isScrolled ? 'scrolled' : 'navbar mb-3'}>
                <Container fluid>
                    <Col>
                        <Navbar.Brand href="/">
                            <img src={logo} alt="Logo" width="150" height="60" />
                        </Navbar.Brand>
                    </Col>

                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-md"
                        aria-labelledby="offcanvasNavbarLabel-expand-md"
                        placement="end"
                        style={{
                            backgroundColor: "black"
                        }}

                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                                <Navbar.Brand href="/">
                                    <img src={logo} alt="Logo" width="150" height="60" />
                                </Navbar.Brand>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav className="me-auto">
                                    <NavDropdown title="The Platform" id="basic-nav-dropdown">
                                        <div className='d-flex flex-row'>
                                            <Col xs={6}>
                                                <NavDropdown.Item >
                                                    <Link to="/selling-raising" className='nav-link'>
                                                        <h5> Selling and Raising</h5>
                                                        <p>sell side MA and capital raising</p>
                                                    </Link>



                                                </NavDropdown.Item>
                                            </Col>
                                            <Col xs={6}>


                                                <NavDropdown.Item >
                                                    <Link to="/buying-investing" className='nav-link'>
                                                        <h5> Acquiring and Investing</h5>
                                                        <p>sell side MA and capital raising</p>
                                                    </Link>
                                                </NavDropdown.Item>
                                            </Col>
                                        </div>
                                        <NavDropdown.Divider />
                                        <div className='d-flex flex-row '>
                                            <Col xs={6}>
                                                <NavDropdown.Item >
                                                    <Link to="/forum" className='nav-link'>
                                                        <h5> Middle Market Review</h5>
                                                        <p>sell side MA and capital raising</p>
                                                    </Link>
                                                </NavDropdown.Item>
                                            </Col>
                                            <Col xs={6}>
                                                <NavDropdown.Item >
                                                    <Link to="/forum/resources" className='nav-link'>
                                                        <h5>Tool and Resources</h5>

                                                    </Link>
                                                </NavDropdown.Item>
                                            </Col>
                                        </div>

                                    </NavDropdown>
                                    <NavDropdown title="For Business Buyers" id="basic-nav-dropdown">
                                        <div className='d-flex flex-row'>
                                            <NavDropdown.Item>
                                                <Link to="/howitworks/hiringanadvisor/concealed" className='nav-link'>
                                                    <h5>Hire an M&A Advisor</h5>
                                                    </Link>
                                                

                                            </NavDropdown.Item>
                                            <NavDropdown.Item  >
                                            <Link to="/howitworks/sellingandbuyingforowners" className='nav-link'> <h5>Exit Your Business</h5> </Link>
                                               

                                            </NavDropdown.Item>

                                        </div>
                                        <NavDropdown.Divider />
                                        <div className='d-flex flex-row'>
                                            <NavDropdown.Item href="#action/3.3">
                                                <h5>
                                                    Corporate Development
                                                </h5>


                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.4">
                                                <h5>
                                                    Resources
                                                </h5>

                                            </NavDropdown.Item>
                                        </div>
                                    </NavDropdown>
                                    <Nav.Link href="#home" id="nav-text">Closed Deals</Nav.Link>

                                    <NavDropdown title="About Us" id="basic-nav-dropdown">
                                        <NavDropdown.Item className="align-center text-center" href="#action/3.1">
                                            <h5>What is Axial</h5> </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <div className='d-flex flex-row'>
                                            <NavDropdown.Item >
                                                <Link to="/whoweare" className='nav-link'>
                                                    <h5> Meet the Team </h5>
                                                </Link>

                                            </NavDropdown.Item>
                                            <NavDropdown.Item >
                                                <Link to="/whoweare/careetAtBizvision" className='nav-link'>
                                                    <h5> Careers at BizVision</h5>
                                                </Link>


                                            </NavDropdown.Item>
                                        </div>
                                    </NavDropdown>

                                </Nav>
                                <Nav>
                                    <Nav.Link href="#link" id="nav-text">
                                        <a href="tel:1.800.860.4519"><i class="fa-solid fa-phone-flip"></i> </a> <span> 02 8005 7003</span>
                                    </Nav.Link>
                                    <Link to="/sign-in">  <Button variant='light' className='signInButton m-1'>Sign in </Button></Link>
                                  
                                    <Link to="/request-information"> <Button variant="outline-light" className='signInButton m-1'> Get Started</Button></Link>
                                    
                                </Nav>

                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>


    )
}

export default Headers