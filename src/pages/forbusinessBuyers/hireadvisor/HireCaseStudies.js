import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import './HireCaseStudies.css'


export const HireCaseStudies = () => {
    const [showOne, setShowOne] = useState(true)
    const[ showTwo, setShowTwo ]= useState(false)
   
  return (
    <div className='case-studies-hero'>
        
    <div className='p-5'>
        <p className=' case-header container'>Case Studies</p>
        
        <div className='p-3'>
        <div className='case-studies-one'
        onClick= {()=> {
          setShowOne((prev) => true)
          setShowTwo((prev) => false)
         
        
        }}> 1</div>
        <div className='case-studies-two'
         onClick= {()=> {
          setShowOne((prev) => false)
          setShowTwo((prev) => true)
          
        
        }}> 2</div>
        

        </div>
        
        {
          showOne && (
            <Row className='mt-3'>
            <p className='case-sec-header py-3'>Consumer Eyewear Company Tortoise Blonde Hires Young America to Raise Capital
             </p> 
           <Col>
          
           <p> 
           {/* <p className='case-sec-header py-3'>Levine Leichtman Portfolio Company Trinity Consultants Expands Into Adjacent Sectors</p> */}
           <p> <span className='case-first-paragraph'> TRANSACTION TYPE</span><br/>Debt Financing </p>
           <p> <span className='case-first-paragraph'>INDUSTRY</span> <br/> Consumer Products</p>
           <p><span className='case-first-paragraph'>LOCATION</span> <br/> New York, NY</p>
           
           </p>
           </Col>
           <Col>
           <p className='case-second-paragraph'>
           ortoise & Blonde is a leading luxury consumer eyeglasses company. As the company was entering their next stage of growth, the founders were looking to raise capital without having to give away equity early on in their lifecycle. Given the thousands of credit provider
           s in the lower middle market, the team joined Axial looking to hire an advisor to help them find the right debt partner. <br/><br/>

           Through Axial, the Tortoise Blonde executive team identified 3 investment banks to potentially hire, in additional to several of their own relationships. They ultimately hired Axial member Young America Capital, an investment bank that focuses predominantly on lower 
           middle market capital raises, and has substantial experience in the consumer space. <br/><br/>

           As part of their process, Young America leveraged Axial to support their lender identification efforts. Through the platform, they discovered Able Lending, an online provider of small business loans ranging from $25K to $1M. In December, weeks before the surge in holiday shopping, Tortoise and Blonde was able to secure a loan from Able to finance operations for the next several years.


           </p>
           </Col>
           </Row> 
          )
        }
        

        {showTwo && (
          <Row className='mt-3'>
          <p className='case-sec-header '>Panorama Environmental Hires 7 Stage Advisors for Organic and Inorganic Growth</p>
         <Col>
         <p> 
         <p> <span className='case-first-paragraph'> TRANSACTION TYPE</span><br/>M&A Advisory Engagement</p>
         <p> <span className='case-first-paragraph'>INDUSTRY</span> <br/> Engineering & Construction Services</p>
         <p><span className='case-first-paragraph'>LOCATION</span> <br/> San Francisco, C</p>
         
         </p>
         </Col>
         <Col>
         <p className='case-second-paragraph'>
         Originally founded in 1983, Panorama Environmental provides environmental planning, analysis, and regulatory permitting services to public and private-sector clients. <br/><br/>

         In 2011, the company narrowed its focus to the engineering and construction of renewable energy projects and divested its environmental consulting practice.
          By 2014, three years after the pivot, Panorama was looking to double down their investment in both organic and inorganic growth, 
          and turned to Axial to achieve this objective. <br/><br/>

          In a matter of months, the two principals had met several growth consultants and M&A advisory firms, both through Axial's private online platform and through several Axial events. Four months after joining, they hired long-time Axial member Carl Gould of Seven Stage Advisors to help build out their growth strategy and identify strategic partners.
         </p>
         </Col>
         </Row> 


        )}
       

      



        

    
      

    </div>




        
    </div>
  )
}
