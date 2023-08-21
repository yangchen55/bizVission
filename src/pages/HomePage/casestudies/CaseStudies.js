import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import{Col, Row} from 'react-bootstrap'
import '../casestudies/CaseStudies.css'




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
                <h1 className='case-sec-header p-2'>
                Seamless Pharmacy Acquisition: Leveraging Expertise in Australia's Business Landscape</h1> 
               <Col>
              
               <p> 
               {/* <p className='case-sec-header py-3'>Levine Leichtman Portfolio Company Trinity Consultants Expands Into Adjacent Sectors</p> */}
               <p> <span className='case-first-paragraph'> TRANSACTION TYPE</span><br/>Acquisition </p>
               <p> <span className='case-first-paragraph'>INDUSTRY</span> <br/> IT Services</p>
               <p><span className='case-first-paragraph'>LOCATION</span> <br/> QLD </p>
               
               </p>
               </Col>
               <Col>
               <p className='case-second-paragraph'>
               After relocating to Australia on a Business Innovation and Investment visa, our client, 
               an experienced retail pharmacist, sought to navigate the complex landscape of investment opportunities 
               in a foreign market. Their expertise, although extensive, was initially directed towards a diverse range of sectors including pubs and beauty salons. 
               However, their core competency remained deeply rooted in the pharmaceutical domain. <br/><br/>

               Upon successfully obtaining the necessary accreditations to operate a pharmacy in Australia, 
               a critical step that underscored their dedication, our team at BizVision undertook a comprehensive market analysis.
                Our objective was to identify a venture that not only aligned with their professional background but also offered 
                strategic advantages. <br/><br/>
   
                After an exhaustive search, we identified an investment opportunity in a well-established pharmacy business located 
                just two blocks from our client's residence. This proximity offered operational efficiencies and simplified logistics
                 for the client, which is often a crucial factor in the success of a new venture. <br/><br/>

                 The transition was facilitated with meticulous attention to detail, ensuring a seamless handover from the retiring vendor. This acquisition represented a significant milestone: for the vendor, it marked a
                  satisfactory culmination of their professional journey; for our client, it presented a robust platform for growth in their chosen domain; and for BizVision, it underscored our commitment to providing tailored 
                  solutions that cater to the unique requirements of each client. The entire process epitomized the essence of strategic alignment and professional execution.
               </p>
               </Col>
               </Row> 
              )
            }
            

            {showTwo && (
              <Row className='mt-3'>
              <h1 className='case-sec-header '>Mastering Complex Transactions: BizVision's Strategic Approach to Youth Entrepreneurship in the Drone Repair Sector</h1>
             <Col>
             <p> 
             <p> <span className='case-first-paragraph'> TRANSACTION TYPE</span><br/>Share Purchase agreement </p>
             <p> <span className='case-first-paragraph'>INDUSTRY</span> <br/> Robotics start-up</p>
             <p><span className='case-first-paragraph'>LOCATION</span> <br/> NSW</p>
             
             </p>
             </Col>
             <Col>
             <p className='case-second-paragraph'>
             Amid the technological landscape, BizVision was presented with a distinctive situation: 
             two young entrepreneurs, still below the legal age, had established a specialized drone repair business. 
             Their innovation was evident, but their age posed certain procedural complexities. <br/><br/>

             Given the legal prerequisites associated with engaging minors in business transactions,
              BizVision meticulously navigated through the process, collaborating closely with the entrepreneurs'
               legal guardians. Every decision was grounded in rigorous due diligence and adherence to legal frameworks. 
               BizVision's expert team delved into a comprehensive valuation of the venture, drawing from financial metrics,
               market dynamics, and the emerging potential of the drone repair sector. 
             This objective evaluation revealed the business's inherent potential.<br/><br/>
 
             Subsequently, an investor, acquainted with BizVision's expertise, showed interest in capitalizing on this venture's 
             prospects. With BizVision's guidance, a vision was mapped out to strategically position the business for broader 
             market reach. Through this engagement, BizVision once again demonstrated its adeptness in managing intricate transactions,
              ensuring accurate business evaluations, and identifying promising business opportunities. The transaction underscored
               BizVision's steadfast commitment to professionalism and excellence.
             </p>
             </Col>
             </Row> 
 

            )}
           

           {showThree && (
             <Row className='mt-3'>
             <h1 className='case-sec-header '>
             Strategic Expansion: BizVision's Guidance in Acquiring a Pivotal Bottling Facility in Australia</h1>
            <Col>
            {/* <p> 
            <p> <span className='case-first-paragraph'> TRANSACTION TYPE</span><br/>Debt Financing</p>
            <p> <span className='case-first-paragraph'>INDUSTRY</span> <br/> Digital Media</p>
            <p><span className='case-first-paragraph'>LOCATION</span> <br/> New York, NY</p>
            
            </p> */}
            </Col>
            <Col>
            <p className='case-second-paragraph'>
            Navigating the complexities of acquiring and expanding a bottling facility in Australia, 
            our client sought to leverage their existing relationships with prominent corporate entities 
            that boasted household brands. Recognizing the complexities of such an endeavor, 
            they turned to BizVision for specialized guidance in this acquisition journey.<br/><br/>
           
            Commencing the engagement, BizVision's team initiated its Business Valuations services.
            It was imperative to ascertain the true value of prospective acquisitions in the bottling industry,
            ensuring a judicious investment decision. Harnessing our extensive expertise in finding off-market listings,
            we embarked on a rigorous selection process to identify facilities that perfectly
            aligned with our client's specifications and overarching business strategy. <br/><br/>

            A particular facility emerged as a potential match, given its strategic location, optimal capacity, 
            and robust infrastructure. However, certain challenges pertaining to its existing lease terms required
            meticulous attention. With acumen and foresight, BizVision's team engaged in rigorous lease negotiations, 
            aiming to achieve terms that would not only be financially viable but would also serve our client's 
            long-term operational objectives. Concurrently, we facilitated the renegotiation of employee contracts,
            ensuring seamless transition and retention, while aligning with the strategic direction set by the new management.<br/><br/>

            This endeavor underscores BizVision's commitment to offering a comprehensive suite of services. From accurate business valuations, 
            adept business searches, to strategic lease negotiations, our objective remains consistent: to position our clients for unparalleled success in their respective markets.

            </p>
            </Col>
            </Row> 
           )}
           



            

        
          

        </div>

 

    </div>
  )
}

