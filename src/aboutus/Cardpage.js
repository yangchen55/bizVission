import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img2 from "../assets/img2.jpg";
import { Col, Row } from 'react-bootstrap';

import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import { Link } from 'react-router-dom';



export const Cardpage = () => {
  return (
    <Row>
      <Col className='py-3'>   <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title className='teamname text-center'>Peter Lehrman</Card.Title>
          <Card.Text className='teamnamebody text-center'>FUNDER AND CEO </Card.Text>
          <Card.Text> 
        <div className='text-center'>
    
    <Link to="https://www.linkedin.com/in/abishkar-rai/"> <i className="fa-brands fa-linkedin" style={{color:'#2458b2', width:"5vh", height:"5vh"}}></i></Link>
    <i className="fa-brands fa-twitter" style={{color: '#c7c7c7'}}></i>
    <i class="fa-solid fa-envelope-circle-check" style={{color:'#2458b2', width:"5vh", height:"5vh"}}></i>

    </div></Card.Text>
          
          
          

        </Card.Body>
      </Card></Col>


      <Col className='py-3'>   <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title className='teamname text-center'>Nike Coetzee</Card.Title>
          <Card.Text className='teamnamebody text-center'>CHIEF OF STAFF </Card.Text>
        </Card.Body>
      </Card></Col>

      <Col className='py-3'>   <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={img4} />
        <Card.Body>
          <Card.Title className='teamname text-center'>Jamie Stock</Card.Title>
          <Card.Text className='teamnamebody text-center'>CUSTOMER SUCCESS</Card.Text>
        </Card.Body>
      </Card></Col>

      <Col className='py-3'>   <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={img5} />
        <Card.Body>
          <Card.Title className='teamname text-center'>Alfredo Garcia</Card.Title>
          <Card.Text className='teamnamebody text-center'>SALES & BUSINESS DEVELOPERMENT</Card.Text>
        </Card.Body>
      </Card></Col>

    </Row>

  )
}
