import React, { useEffect } from 'react'
import './Careerspage.css'
import { Button, Col, Row } from 'react-bootstrap'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import GlobalLayout from '../pages/globalLayout/GlobalLayout'

export const CareersPage = () => {
  const bringToTop = ()=>{
    window.scrollTo(0,0);
  }
  useEffect(()=>{

  })
  return (
    <GlobalLayout>
      <div className='hero'>

        <div className='title-body'>
          <div className="container p-3">
            <h1 className='bodytop'> CARRERS AT BIZVISION</h1>
            <p className='carrerhead'>Pursue the extraordinary.</p>
            <p className='carrer-paragrap'>We are building the indispendable platform for success in
              the private capital markets.</p>

            <Button>Join Our Team <i class="fa-solid fa-check"></i></Button>
          </div>
        </div>

        <div className='careerbody'>
        <p className='container lifetitle p-3'>Life at Bizvision</p>

          <Row>
            <Col className='p-5'>
              <p className='col1'>
                <p className='lifetitle'>Core values</p>
                At Axial, our values are the principles that guide our descision-making
                with <br /> our members, our prospects, ours partners, and our colleagues.
                <br />
                <br />

                These values meaningfull inform who we hire, promote, recoginze, and
                <br /> reward.

                <br />
                <br />
                This is how we make decisions.

                <br />
                <br />
                <li>Expect and Deliver Excellence.</li><br />
                <li> Obsess over Member Trust. </li><br />
                <li>Communication Matters.</li><br />
                <li>Invent and Simplify</li><br />
                <li>Be an Owner.</li><br />


              </p>


            </Col>


            <Col xs >
              <img className='corevalues-img' src={img6} alt='core value images' />
            </Col>
            </Row>


            <Row className='p-3'>
            <Col>
            <img  className='corevalues-img' alt='bizvision culture' src={img7}/>
            </Col>

            <Col >
            <p className=' col1'>
                <p className='lifetitle'>BizVision Culture</p>
                Culture is the collection of our personality types, behaviors as an<br />  <br />
                organization, and the environment in which our <span className='value'> values</span>  manifest.
              

                <br />
                <br />
                These are our cultural traits.

                <br />
                <br />
                <li>Positive</li><br />
                <li>Gritty</li><br />
                <li>Humble</li><br />
                <li>Discerning</li><br />
                <li>Accountable for Results</li><br />


              </p>
            
            </Col>

            </Row>

            <Row className='p-3'>
              <Col><p className=' col1'>
                <p className='lifetitle'>COMPANY EVENTS</p>
                Quarantine and lockdowns taught us the importance of connecting virtually<br /> as our team was scattered across North America. Even with the majority of <br />
                Axialites back in NYC, we continue to embrace events and gatherings that   <br />
                can include our entire hybrid workforce.

               
                

                <br />
                <br />
                <li>Painting Party🎉 </li><br />
                <li>Trivia</li><br />
                <li>Bingo</li><br />
                <li>Pictionary</li><br />
                <li>Wine Wednesday</li><br />


              </p>
            
              </Col>

              <Col> 
               <img className='corevalues-img' alt='company event' src={img8}/>
              </Col>
            </Row>


            <Row className='p-3'>
              <Col>
              <img  className='corevalues-img' src={img9} alt='event at HQ'/>
              </Col>


              <Col >
              
              <p className=' col1'> <p className='boldfont'>Events @ HQ</p>
              Whether we’re celebrating a company milestone by bringing in a mechanical bull or hosting post-work happy hour events like Taco Tuesday or Murder Mystery, nothing beats when we can gather in-person. Piñatas, arcade games, magicians, nothing is off-limits.
             
              <br/>
               <br/>
              


            
               <p className='boldfont'>BizVision Day</p>
               Axialite Day: Since year one Axial has taken one day each fall to gather together as a company. This sacred day always has a different agenda. Team building has taken the form of scavenger hunts, escape rooms, and go-karting to name a few.

              </p>

              


              
              
              
              

             

        


              </Col>
            </Row>


         <div onClick={bringToTop} className='text-center bringtotop p-4'> ↕  BRING TO TOP 
         </div>



        </div>


        <div className='advantage p-5'>
       
          <Row>
          
            <Col md="5" className='p-4'> 
            <p><p className='advheader'>The BizVision Advantage</p>

            <p className='advbody'> Benefits supporting BizVision both in and outside of the office.</p>
            
            <div className='advsection'>
            💰 competitive compensation <br/>
            🏩 free medical, dental & vision coverage<br/>
            🏖 unlimited paid vacation<br/>
            🥗 weekly lunches<br/>
            🧘‍♀️ health & wellness stipend<br/>
            🍼 paid parental leave<br/>
            📚 professional development<br/>
            </div>
          
            </p>
            
          
            </Col>
            
            <Col md="7" className='py-5'>
              

            <div className='vertical-line'>
              <p className='advantage-paragraph p-3'>"Hybrid is the new remote".</p>

              
            </div>
            
            </Col>
          </Row>
        </div>

        <main className='main'>
         

         </main>

      </div>

      

    </GlobalLayout>

  )
}
