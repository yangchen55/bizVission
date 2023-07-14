import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img2 from "../assest/img2.jpg";
import { Col, Row } from 'react-bootstrap';

import img3 from "../assest/img3.jpg";
import img4 from "../assest/img4.jpg";
import img5 from "../assest/img5.jpg";

export const Cardpage = () => {
  return (
    <Row>
        <Col className='py-3'>   <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={img2}/>
      <Card.Body>
        <Card.Title className='teamname text-center'>Peter Lehrman</Card.Title>
        <Card.Text className='teamnamebody text-center'>FUNDER AND CEO </Card.Text>
      </Card.Body>
    </Card></Col>


    <Col className='py-3'>   <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={img3}/>
      <Card.Body>
        <Card.Title className='teamname text-center'>Nike Coetzee</Card.Title>
        <Card.Text className='teamnamebody text-center'>CHIEF OF STAFF </Card.Text>
      </Card.Body>
    </Card></Col>

    <Col className='py-3'>   <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={img4}/>
      <Card.Body>
        <Card.Title className='teamname text-center'>Jamie Stock</Card.Title>
        <Card.Text className='teamnamebody text-center'>CUSTOMER SUCCESS</Card.Text>
      </Card.Body>
    </Card></Col>

    <Col className='py-3'>   <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={img5}/>
      <Card.Body>
        <Card.Title className='teamname text-center'>Alfredo Garcia</Card.Title>
        <Card.Text className='teamnamebody text-center'>SALES & BUSINESS DEVELOPERMENT</Card.Text>
      </Card.Body>
    </Card></Col>

    </Row>
 
  )
}
