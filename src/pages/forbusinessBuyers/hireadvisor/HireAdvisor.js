import React from 'react'
import GlobalLayout from '../../globalLayout/GlobalLayout'
import { Button, Col, Row } from 'react-bootstrap'
import './HireAdvisor.css'
import img11 from '../../../assets/img11.png'
import img10 from '../../../assets/img10.png'
import { HireCaseStudies } from './HireCaseStudies'


export const HireAdvisor = () => {

    const bringToTop = ()=>{
        window.scrollTo(0,0);
      }
  return (
    
        <GlobalLayout>
          
            <div className=' hero'>

            <div className=' p-5 body container'>
          <div className="container p-5">
            <p className='bodytop'>HIRE AN M&A ADVISOR</p>
            <h1 className='bodyhead'>Find An M&A Advisor You Can Trust. </h1>
            <p className='bodyparagrap'>Axial's Advisor Finder program guides business owners through the M&A Advisor identification, 
            <br/>interview, and hiring process. Leveraging 10 years of behavioral data and relationships on the Axial<br/> platform, we help you choose the right advisor for your business.</p>

            <Button>Request Information <i class="fa-solid fa-check"></i></Button>
          </div>
        </div>

        <div className="hirebody">
        <div  className='container'>
          <p className='p-5 lifetitle  '>How does it work?</p>

          <Row>
            <Col className='p-5'>

              <p className='col1 p-3'>
            <p className='hire-first-col-title'>Confidentially Connect With Vetted M&A Advisors</p>

                Choosing the right M&A Advisor should not be left up to chance. Axial’s Advisor Finder program was 
                created to arm business owners and executives with the information needed to make confident advisor hiring decisions.
            
                <br/>  <br/>
                <ul> The process begins with a brief survey and consultation with a member
                 of the Axial team to better understand your transaction priorities and goals.</ul>
            
                <ul> We use that information to create a short list of advisor candidates who best fit the needs 
                    of your business, from a pool of thousands of qualified candidates.</ul>

                <ul>Your identity and information will remain 100% private and confidential at all times.</ul>
               

              </p>


            </Col>


            <Col className='p-5'>
              <img  style={{ width: "70vh", height: "60vh" }} src= {img11} />
            </Col>
            </Row>

            <Row>
                <Col  className='p-1' >
                <img style={{ width: "70vh", height: "50vh" }} src= {img10} />
                </Col>
               
                <Col  className='p-5'>

                 <p className='col1'>
                 <p className='hire-first-col-title p-4'>
                 Maintain Control Throughout the Entire Process</p>
               
                 <ul> Your Axial consultant will guide you through the M&A Advisor selection process. Privately review detailed profiles of M&A Advisors who
                     have proven experience working with businesses like yours. You choose who to contact and when.</ul>

                 <ul> Our comprehensive process ensures that your identity remains confidential while you compare advisor candidates, their experience, fee structures, and general suitability for the project. 
                    The ball is in your court, and we stay right there by your side throughout the entire process.</ul>

                   <ul> <Button className='buy-row2-col2-button'>Join BizVision Now</Button></ul> 

                 </p>
                 

                </Col>


            </Row>

            <div onClick={bringToTop} className='text-center bringtotop p-4'> ↕  BRING TO TOP 
         </div>








            </div>

        </div>

       

            </div>

           <div className='main consultation'>
           <p > Schedule a Free Consultation</p>
           <Button>Schedule a Free Consultation {" "}<i class="fa-solid fa-check"></i> </Button>
           </div>

           <HireCaseStudies/>

          
        

        </GlobalLayout>
    
  )
}
