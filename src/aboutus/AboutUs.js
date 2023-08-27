import React, { Children, useEffect } from 'react'
import './Aboutus.css'
import img1 from '../assets/img1.png';
import { Col, Container, Row } from 'react-bootstrap'
import { Cardpage } from './Cardpage'
import GlobalLayout from '../pages/globalLayout/GlobalLayout';

export const AboutUs = () => {
  useEffect(()=>{

  },[])
  return (
    <GlobalLayout>
      <div className='hero '>
       
        <div className='aboutusbody'>
          <div className='text-center aboutusbodyfont'>About Us</div>
          <p className='text-center aboutusbodyfontbody'> 10+ Years of Experience in Lower Middle Market Deal marking. <br />
            Est 2016 | Made in SYD 💙
          </p>

        </div>
      

        <Row className='p-3'>
          <Col >  
          <img className='img-ceo' src={img1} /></Col>
          <Col className='visionpargraph'>


            <p className='p-5 visionbody'><p className='visionheader py-3'> OUR VISION</p>
              This Middle market is ht backbone of the American economy,
              but it's still hamstrung by capital inefficiencies.
              We need a new way for great companies and great buyers and
              inverstors to discover each other and be discovered in return.
              In truth, the roldex and the golf course was never good enough.
              We need a 21st century solution.
              that's why I founded Axial.

              <h6>Peter Lehrman</h6>
              Axial Founder & CEO
            </p>


          </Col>

        </Row>


        <div>
          <p className='text-center teamheader'> BizVision's Leadership Team</p>

          <Cardpage />


        </div>




      

      <div className='main'></div>
      </div>
    </GlobalLayout>



  )
}
