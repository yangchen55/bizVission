import React, { Children } from 'react'
import GlobalLayout from '../../globalLayout/GlobalLayout'
import { Button, Col, Row } from 'react-bootstrap'
import img12 from '../../../assets/img12.png'
import img13 from '../../../assets/img13.png'
import img14 from '../../../assets/img14.png'
import '../hireadvisor/HireAdvisor.css'
import './exitbusiness.css'
import { Link } from 'react-router-dom'
import { BussinessCase } from './BussinessCase'

export const ExitBusiness = () => {
    const bringToTop = ()=>{
        window.scrollTo(0,0);
      }
  return (
    <div>
        <GlobalLayout>

        <div className='hero'>

   <div className=' p-5 body container'>
<div className="container p-5">
<p className='bodytop'>EXIT YOUR BUSINESS</p>
<h1 className='bodyhead'>Find the Right Buyer or Investor. </h1>
<p className='bodyparagrap'>
Axial provides curated recommendations of capital partners for your business, or M&A advisors to <br/>
represent you in a transaction. Research by deal criteria, transaction experience, and reputation,<br/>
 then confidentially reach out with complete control and discretion when the timing is right.
</p>
<Link to="/request-information"> <Button>Request Information <i class="fa-solid fa-check"></i></Button></Link>


</div>
 </div>


      <div className='hirebody'>
<div className=' container'>
<p className='container p-5 lifetitle '> 3 Reasons to join BizVision</p>

    <Row>
   <Col className='p-5'> 

    <p className='col-font'><p className='hire-first-col-title'>Unrivaled Coverage of the Lower Middle Market Buyers & Capital Providers</p>

      Over 2,000 financial investors and corporate acquirers target lower middle market investments on Axial every year.
    <br/><br/>
    <li> 250+ Family Offices</li> <br/>
    <li> 500+ Private Equity Firms</li> <br/>
    <li>850+ Acquisitive Portfolio Companies</li> <br/>
    <li>400+ Independent Sponsors & HNWIs</li> <br/>
    <li>100+ Lenders and Private Credit Investors</li>
   

  </p>


  </Col>


   <Col className='p-5'>
  <img  style={{ width: "68vh", height: "50vh" }} src= {img12} />
   </Col>
   </Row>

    <Row>

    <Col>
    <img style={{ width: "80vh", height: "50vh" }} src= {img13} />
    </Col>
   
    <Col  className='p-3'>

     <p className='col-font'>
        <p className='hire-first-col-title p-2'>
      Sophisticated Deal Marketing & Tracking Tools</p>
     <ul>With Axial, you get: </ul>
   
     <ul> A powerful deal marketing system built around privacy, customization, 
        control, and seller confidentiality.</ul>

     <ul> Deal management tools that expedite NDA execution and other core deal process workflows.</ul>


       <ul> Unique data sets to help you understand the deal criteria, transaction experience, responsiveness, 
        and reputation of any counter party you might engage on the Axial platform.</ul> 

        <p> Axial’s platform reflects how lower middle market transactions get done — privately and confidentially. Unlike public deal listing sites, Axial members looking to sell or raise capital retain total control and confidentiality over whom, how, and when they approach buy-side targets.</p>

     </p>
     

    </Col>


    </Row>


    <Row>
        
   <Col className='p-5'> 

    <p className='col-font'><p className='hire-first-col-title'>Confidentially Connect With Vetted M&A Advisors</p>

    Choosing the right M&A Advisor should not be left up to chance. Axial’s Advisor Finder program was created to arm business owners and e
    xecutives with the information needed to make confident advisor hiring decisions..
    <br/><br/>

    <ul> The process begins with a brief survey and consultation with a member
         of the Axial team to better understand your transaction priorities and goals.</ul>

     <ul> We use that information to create a short list of advisor candidates who best fit the needs of your business,
         from a pool of thousands of qualified candidates..</ul>


       <ul>Your identity and information will remain 100% private and confidential at all times..</ul> 
      <Link to="/howitworks/hiringanadvisor/concealed">
      <Button variant='primary'> Explore Advisor Finder </Button>
      </Link>
      
       


  </p>


  </Col>


   <Col className='p-5'>
  <img  style={{ width:"80vh", height: "60vh" }} src= {img14} />
   </Col>

   </Row>

    <div onClick={bringToTop} className='text-center bringtotop p-4'> ↕  BRING TO TOP 
    </div>








</div>
      </div>


      <div className='container p-3'>
        <p className='exitbusiness div3-title'> Cultivate New Relationships</p>
        <p className='exitbusiness div3-bodytitle'> As an Extension of Your Existing Network</p>
    
        <Row>
        <Col>

        <p className='exitbusiness div3-paragraph'>
        "Day to day, I am focused on growing the business, finding new customers, and making sure our customers are as happy<br/> as possible. I have to deal with many things in a given day, which is fairly challenging."<br/><br/>

        "One of the reasons I use Axial is to plan for the future. 2-3 years down the line, I'll be at the point where I'll be able to know that I <br/>need an advisor, and if I want to be acquired or make an acquisition. 
        I'll be able to have a very clear idea of what I want to do. It is not something I take lightly, so I want to make sure I plan accordingly."

        </p>
      
        
        </Col>
        <Col> Video</Col>

        </Row>
        
      </div>


      <div className='main div4 exitbusiness'>
        <p>Get Started Today</p> <br/>
        <Link to="/request-information"> 
        <Button className='fw-700'>Request Membership <i class="fa-solid fa-check"></i></Button>
        </Link>

      </div>

      <BussinessCase/>




     </div>

        </GlobalLayout>

        
    </div>
  )
}
