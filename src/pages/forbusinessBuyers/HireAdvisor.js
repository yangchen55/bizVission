import React from 'react'
import GlobalLayout from '../globalLayout/GlobalLayout'
import { Button, Col, Row } from 'react-bootstrap'
import './HireAdvisor.css'
import img11 from '../../assets/img11.png'
// import img10 from '../assets/img10.png'

export const HireAdvisor = () => {
  return (
    
        <GlobalLayout>
            <div className=' hero'>

            <div className=' p-5 body container'>
          <div className="container p-5">
            <p className='bodytop'>HIRE AN M&A ADVISOR</p>
            <h1 className='bodyhead'>Find An M&A Advisor You Can Trust </h1>
            <p className='bodyparagrap'>Axial's Advisor Finder program guides business owners through the M&A Advisor identification, 
            <br/>interview, and hiring process. Leveraging 10 years of behavioral data and relationships on the Axial<br/> platform, we help you choose the right advisor for your business.</p>

            <Button>Request Information <i class="fa-solid fa-check"></i></Button>
          </div>
        </div>


        <div className='hirebody'>
          <p className='p-4 container lifetitle '>How does it work?</p>

          <Row>
            <Col className='p-5'>

              <p className='col1 container'>
                <p className='hire-first-col-title'>Confidentially Connect With Vetted M&A Advisors</p>

                Choosing the right M&A Advisor should not be left up to chance. Axial’s Advisor Finder program was 
                created to arm business owners and executives with the information needed to make confident advisor hiring decisions.
                <br />
                <br />
                <ul> The process begins with a brief survey and consultation with a member
                 of the Axial team to better understand your transaction priorities and goals.</ul>
            
                <ul> We use that information to create a short list of advisor candidates who best fit the needs 
                    of your business, from a pool of thousands of qualified candidates.</ul>

                <ul>Your identity and information will remain 100% private and confidential at all times.</ul>
               

              </p>


            </Col>


            <Col >
              <img className='p-2' style={{ width: "77vh", height: "70vh" }} src= {img11} />
            </Col>
            </Row>
            </div>



            


            </div>
        

        </GlobalLayout>
    
  )
}
