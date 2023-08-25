import { button } from 'bootstrap'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo2 from '../../../assets/logo2.png';


export const Footer = ({ children }) => {
  return (
    <div className='footer mt-3 p-3'>
      <Container fluid>
        <Row>
          <Col xs="6" className='p-2'>
          <img src={logo2} alt='logo' width="130" height="50"/></Col>

          <Col className='p-2'> <div> <i class="fa-solid fa-phone-flip" style={{color:' #3f85fd'}}></i>02 8005 7003</div></Col>

          <Col  className='p-2'> <Link to="/sign-in"> <div className='gap-3'> <Button className='text-center' variant='outline-primary' type='submit'> Sign in </Button></div></Link></Col>

          <Col  className='p-2'> <Link to="/request-information">
                    <Button className='fa-14px' type='submit'> Get Started <i class="fa-solid fa-check"></i> </Button>
                    </Link></Col>
        </Row>

        <Row>
         
          <Col className='nav-link mt-3 p-3' md="3">
            <div className='col2'>BizVision</div>
            <div className='footertext' >Careers</div>{" "}
            <div className='footertext'>Disclaimer</div> {" "}
            <div className='footertext'>Terms of Condition</div>{" "}
            <div className='footertext'> Privacy Policy</div> {" "}

          </Col>
          <Col className='col2 mt-3 p-3' md="2"> 
          
          <div className='col2'>Contact</div>
            <div className='footertext'>L2, 608 Harris Street, Ultimo NSW 2007</div>
            <div className='mt-5'>
            <div className='facebook'><i  class="fa-brands fa-facebook-f" style={{ color:'#2e64c2' }}></i></div>
            <div className='email'><i class="fa-solid fa-envelope"></i></div>
            <div className='linkedin'><i class="fa-brands fa-linkedin"></i></div>
            <div className='instrgram'><i class="fa-brands fa-instagram"></i></div>
           
            </div>


          </Col>
          
          


        </Row>
        
        <hr />

        <div className='footertext mt-4 p-5'>© 2010-2023 BizVision. All Rights Reserved </div>





      </Container>
      </div>

  )
}
