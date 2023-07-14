import React from 'react'
import { Footer } from '../footer/Footer'
import './Careerspage.css'
import { Button, Col, Row } from 'react-bootstrap'
import img6 from '../assest/img6.jpg'

export const CareersPage = () => {
  return (
    <div className='hero'>

        <div className='body'>
            <div className="container p-5">
               <p className='bodytop'> CARRERS AT BIZVISION</p> 
               <h1 className='bodyhead'>Pursue the extraordinary. </h1>
               <p className='bodyparagrap'>We are building the indispendable platform for success in
                 the private capital markets.</p>

                 <Button>Join Our Team <i class="fa-solid fa-check"></i></Button>
                </div>
        </div>




        <div className='careerbody'>
        <p className='container p-2 lifetitle'>Life at Bizvision</p>

            <Row>
                <Col className='p-5'>

                <p className=' col1'> 
                <p className='lifetitle'>Core values</p>
                At Axial, our values are the principles that guide our descision-making
                    with <br/> our members, our prospects, ours partners, and our colleagues. 
                    <br/> 
                    <br/>

                    These values meaningfull inform who we hire, promote, recoginze, and
                    <br/> reward.

                    <br/>
                    <br/>
                    This is how we make decisions.
                    
                    <br/>
                    <br/>
                    <li>Expect and Deliver Excellence.</li><br/>
                    <li> Obsess over Member Trust. </li><br/>
                    <li>Communication Matters.</li><br/>
                    <li>Invent and Simplify</li><br/>
                    <li>Be an Owner.</li><br/>
                    

                </p>
                
                
                </Col>


                <Col>
                    <img className='p-2' style={{ width:"65vh", height:"60vh"}}src={img6}/>
                 </Col>


               


                 
                
            </Row>


        </div>

<Footer />

    </div>
  )
}
