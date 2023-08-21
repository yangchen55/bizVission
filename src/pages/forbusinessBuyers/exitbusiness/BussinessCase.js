import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import '../hireadvisor/HireAdvisor.css'
import './exitbusiness.css'


export const BussinessCase = () => {
    const [showOne, setShowOne] = useState(true)
  return (
    <div className='case-studies-hero'>
        
    <div className='p-5'>
        <p className=' case-header container'>Case Studies</p>
        
        <div className='p-3'>
        <div className='exit-case-studies-two'
        onClick= {()=> {
          setShowOne((prev) => true)
        }}> 1</div>
    
        

        </div>
        
        {
          showOne && (
            <Row className='mt-3'>
            <p className='case-sec-header py-3'>Dane Manufacturing Secures Financing to Hit Their Goal of 3X Revenue in 3 years.
             </p> 
           <Col>
          
           <p> 
           {/* <p className='case-sec-header py-3'>Levine Leichtman Portfolio Company Trinity Consultants Expands Into Adjacent Sectors</p> */}
           <p> <span className='case-first-paragraph'> TRANSACTION TYPE</span><br/>Acquisition Financing </p>
           <p> <span className='case-first-paragraph'>INDUSTRY</span> <br/> Heating & Cooling</p>
           <p><span className='case-first-paragraph'>LOCATION</span> <br/> Troy, MI</p>
           
           </p>
           </Col>
           <Col>
           <p className='case-second-paragraph'>
           In 2015, Dane Manufacturing CEO and president Troy Berg and COO Mike Lisle set the audacious goal of growing the company 3x in 3 years — from $10 to $30 million. By 2016, it was clear that Dane would need some serious inorganic growth to reach their goal. <br/><br/>

           Dane decided to join Axial in August 2016. In March 2017, Mike was contacted by an advisor representing Dantherm Cooling, a division of Dantherm A/S, a publicly traded Danish company originally formed in Spartanburg, SC in 1998. They fell in love with the opportunity, and soon realized that if they could close Dantherm, they’d get to ring the bell at 3X. <br/><br/>

           “It was more challenging to find the right deal financing than it had been the right target.” In May 2018, Mike, ran a search on Axial and found Crestmark Bank, an asset-based lender with a strong presence in Chicago, just a few hours away from Dane’s headquarters. Within two weeks, Dane had closed with Crestmark. “It was lightning speed for a $3 million line of credit facility. You had a motivated team in Dane Manufacturing and a motivated bank in Crestmark, and Axial brought us together.”


           </p>
           </Col>
           </Row> 
          )
        }
    </div>




        
    </div>
  )
}
