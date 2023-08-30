import React, { useState } from 'react';
import './middlePagination.css'

import ReasonsToJoin from '../../platform/ReasonsToJoin/ReasonsToJoin';
import Acquiring from '../../platform/Acquiring/Acquiring';

import { Tabs, TabList, Tab, TabPanel} from 'react-tabs'
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MiddlePagination = () => {
    const bringToTop = ()=>{
        window.scrollTo(0,0);
      }


    return (

        <Tabs className="tab-main ">
            <TabList className="tab-list-container">
                <Tab className="tab-button">About BizVision</Tab>
                <Tab className="tab-button">For business buyers & investing </Tab>
                <Tab className="tab-button">For selling and raising </Tab>
                {/* <Tab className="tab-button">For Hiring an M&A Advisor</Tab> */}
            </TabList>
            <TabPanel>
            <h2 className='p-3'>What is BizVision</h2>
                {/* Content for About Axial tab */}
               
                <Row > 
                    <Col>
                    <p className='p-3 col1'>BizVision is a business buyer agency serving investors 
                    (including Business Innovation and Investment visa holders subclass 188, and subclass 888) 
                    assisting in sourcing businesses, business valuation and due diligence, lease agreement and 
                    franchise agreement negotiations. BizVision’s  deal-sourcing and deal structuring tools are used
                     to facilitate the discovery and execution of transactions that meet the following criteria:

                
                    </p></Col>


                    <Col md className='col1'>
                    <p>
                    	<p><span className='bold'> • Geography: </span> Australian based businesses</p>
                     	<p> <span className='bold'> •Revenue:</span> $500K – $8M</p>
                     	<p> <span className='bold'>• EBITDA: </span>$50K to $2.5M</p>
                     	<p> <span className='bold'> •Transaction Types:</span> SME Business Sales, Franchises, Master franchises & Co-Investments, Vendor Financed</p>
                     	<p> <span className='bold'> •Industry Verticals:</span>  Tech, Industrials, Consumer, Business Services, Food & Beverage, Transportation & Logistics, Commercial Real Estate, Education</p>


                    </p>
                    
                    </Col>
                    
                   
                </Row>

                <Row>
                    
                    <Col></Col>

                <Col md className='col1'>
                        <p>
                        <h2>How Buying Acquisition Process Works</h2>
                            BizVision’s platform reflects how small business sales transactions get done — privately and confidentially.
                         Unlike traditional business brokerage firms with public deal listing, 
                        BizVision’s buy-side members gain access to insights about businesses on the market utilizing our proprietary AI-powered analytics lab to predict and forecast business sales figures 
                        and overall circumstances of the business environment in our specialized industry verticals

                        <ol className='custome p-3'>

                        <li> The buyer granularly describes their criteria and interests to create their initial roadmap and buyer profile.</li>	
                        <li> 	The seller inputs details of their business or transaction they’re bringing to market
                         [through a confidential, private research tool].</li>
                        <li> 	BizVision’s algorithms analyze each buyer member’s deal criteria, and privately recommends 
                        matching parties for the seller to approach, ordered by relevance.</li>
                        <li> BizVision associates initiate due diligence, liaise between sellers, 
                        solicitors, franchisors, and landlords to achieve best possible outcome for buyers.</li>



                        </ol>
                        
                        
                        
                        
                        
                        </p>

                    </Col>
                </Row>

                <Row>
                    <h2 className='p-3'> Virtual and In-Person Events and Workshops</h2>
                    <Col>
                    <p className='col1'> 
                    BizVisions events are rated as some of the most productive networking events in the industry. Through national, 
                    regional, industry-specific, and virtual events, we focus on having a calculated ratio of buyers, sellers, 
                    intermediaries, and companies, while curating meetings between attendees beforehand.
                    <br/> <br/>The statistics speak for themselves. Here are some numbers from our one-day Sydney'
                     held events and workshops:

                     <p>
                        <ol> •	104+ meetings held</ol>
                        <ol> •	35+ workshops facilitated</ol>
                        <ol> •	65% buyer attendees, 35% seller attendees</ol>
                     </p>



                    </p>
                    </Col>
                    <Col md></Col>
                </Row>

                <Row>
                    
                    <Col></Col>
                    
                    <Col md>
                        <p className='p-3'>
                    <h2>Reputation Data and AI-Powered insights</h2>
                         BizVision shines a light on the small business market like never before.
                          Our analytics tools gather commercial sales, demographics, social media, 
                          ATO, ABS, Google, IBISWORLD, Statista, Geospatial data to help our clients 
                          make an informed and data-driven decision on their business acquisition with
                           the appropriate levels of trust and confidence unmatched in the industry.
                          <br/><br/>
                           <Link to="/request-information"><Button>Join BizVision</Button></Link>
                           </p>
                           </Col>

                           
                </Row>
                <div onClick={bringToTop} className='text-center bringtotop p-4'> ↕  BRING TO TOP </div>


            </TabPanel>
            <TabPanel>
                <ReasonsToJoin />
            </TabPanel>

            <TabPanel>
                <h2>For business buyers & investing</h2>
                {/* Content for For Selling and Raising tab */}
                <Acquiring />
            </TabPanel>
            <TabPanel>
                <h2>For selling and raising</h2>
                {/* Content for For Hiring an M&A Advisor tab */}
            </TabPanel>
        </Tabs>
        

    );
}


export default MiddlePagination