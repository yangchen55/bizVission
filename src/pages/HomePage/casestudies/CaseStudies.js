import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import{Col, Row} from 'react-bootstrap'
import './CaseStudies.css'




export const CaseStudies = () => {

  const [showOne, setShowOne] = useState(true)
  const[ showTwo, setShowTwo ]= useState(false)
  const [showThree, setShowThree ]= useState(false)


   
   

  return (

    <div className='case-studies-hero'>
        
        <div className='p-5'>
            <p className=' case-header container'>Case Studies</p>
            
            <div className='p-3'>
            <div className='case-studies-one'
            onClick= {()=> {
              setShowOne((prev) => true)
              setShowTwo((prev) => false)
              setShowThree((prev) => false)
            
            }}> 1</div>
            <div className='case-studies-two'
             onClick= {()=> {
              setShowOne((prev) => false)
              setShowTwo((prev) => true)
              setShowThree((prev) => false)
            
            }}> 2</div>
            <div className='case-studies-three'
             onClick= {()=> {
              setShowOne((prev) => false)
              setShowTwo((prev) => false)
              setShowThree((prev) => true)
            
            }}> 3</div>

            </div>
            
            {
              showOne && (
                <Row className='mt-3'>
                <p className='case-sec-header py-3'>Levine Leichtman Portfolio Company Trinity Consultants Expands Into Adjacent Sectors</p> 
               <Col>
              
               <p> 
               {/* <p className='case-sec-header py-3'>Levine Leichtman Portfolio Company Trinity Consultants Expands Into Adjacent Sectors</p> */}
               <p> <span className='case-first-paragraph'> TRANSACTION TYPE</span><br/>Acquisition </p>
               <p> <span className='case-first-paragraph'>INDUSTRY</span> <br/> Business Services</p>
               <p><span className='case-first-paragraph'>LOCATION</span> <br/> San Ramon, CA</p>
               
               </p>
               </Col>
               <Col>
               <p className='case-second-paragraph'>
               Trinity Consultants, an air quality consulting firm based in Dallas, has made more than 20 acquisitions in the past 12 years. The majority of these deals were in the air quality space, a sector Trinity has been deeply involved in since its founding in 1974. <br/><br/>
              In 2012,
               Trinity entered the toxicology space when it acquired SafeBridge Consultants, a consulting firm that serves clients in the life sciences sector. “We aren’t known as buyers in the life sciences space. We haven’t had decades to canvass the landscape of logical extensions in the sector.” <br/><br/>
   
              Trinity turned to Axial to tap into deals in new industries and from sources they wouldn’t otherwise have known about. “Axial brings deals to us and helps us think about the realm of possibilities that could make sense.” One of these deals was ADVENT Engineering, a life sciences engineering consultancy with resources across the U.S., Canada, and Singapore. ADVENT was represented by CEO Ally, a Pittsburgh, PA-based advisory firm. “Without Axial, there’s no reason the company or their banker would have heard of us, and no reason we would have heard of them.”
               </p>
               </Col>
               </Row> 
              )
            }
            

            {showTwo && (
              <Row className='mt-3'>
              <p className='case-sec-header '>Family Office of Ex-XEROX CEO Makes Inaugural Investment in a Colorado Brewery</p>
             <Col>
             <p> 
             <p> <span className='case-first-paragraph'> TRANSACTION TYPE</span><br/>Minority Equity Investment </p>
             <p> <span className='case-first-paragraph'>INDUSTRY</span> <br/> Food & Beverage</p>
             <p><span className='case-first-paragraph'>LOCATION</span> <br/> Denver, CO</p>
             
             </p>
             </Col>
             <Col>
             <p className='case-second-paragraph'>When Ann Mulcahy exited her post as the CEO of Xerox, she created a family office and joined Axial looking to partner with lower middle market entrepreneurs. <br/><br/>
             “For us, being a new family office, it was about at-bats — how many deals could we see to get a sense of what the marketplace is doing. Joining Axial made sense because we knew the network would help us figure out what kind of opportunities might be available in the lower middle market. Our team comes from more enterprise backgrounds across the board and Axial became our guide to finding partners we could work with. We initially narrowed our search on Axial to technology with a focus on business services and light manufacturing with a focus on consumer goods and food and beverage.” <br/><br/>
 
             Reg McGaugh, a banker from Auctus Group, sent me a deal for a queso fresco factory in the Midwest. I didn’t think we were the best fit, but we got on the phone anyway and he said he was working with a client in Denver, a craft brewing company in the super early stages, that he thought might be a good fit for us. That ended up being Renegade, a deal we closed on several months later. How fortunate that we took the time because it provided Silver Fox with not only our first investment, but an opportunity that I don’t think we would have seen otherwise.”
             </p>
             </Col>
             </Row> 
 

            )}
           

           {showThree && (
             <Row className='mt-3'>
             <p className='case-sec-header '>Investment Bank Progress Partners Finds a Lender and New Client</p>
            <Col>
            <p> 
            <p> <span className='case-first-paragraph'> TRANSACTION TYPE</span><br/>Debt Financing</p>
            <p> <span className='case-first-paragraph'>INDUSTRY</span> <br/> Digital Media</p>
            <p><span className='case-first-paragraph'>LOCATION</span> <br/> New York, NY</p>
            
            </p>
            </Col>
            <Col>
            <p className='case-second-paragraph'>
            Technology & Media focused investment bank Progress Partners has been an Axial member since 2011. Founder Nick MacShane says that Axial has “supercharged” the firm’s buyer network and also helped bring in CEO clients. In 2016, Progress Partners connected with fellow Axial member Gibraltar Business Capital to help secure a $6 million ABL line of financing for its client, media technology company CPXi. <br/><br/>
           
            “We’ve essentially supercharged our buyer network through Axial. We’ve been able to engage a broader universe of buyers and financial partners for particular deals, namely private equity funds and strategic companies that may not have been in our network previously. <br/><br/>

            Axial events have also helped bring in clients to the firm. For example, one of our associates attended last year’s Axial Concord in New York City, and met an entrepreneur there who owns a marketing technology company in St. Louis and was looking to sell. He hired us, and now we’re on third base trying to get him a closed transaction.
            </p>
            </Col>
            </Row> 
           )}
           



            

        
          

        </div>

 

    </div>
  )
}

