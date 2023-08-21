import React from 'react'
import './Reason.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import sample from "../../../assets/img1.png";
import Image from 'react-bootstrap/Image';



const ReasonsToJoin = () => {
    return (
        <>
            <a id="top"></a>
            <Accordion defaultActiveKey={['0']} alwaysOpen className='mt-5 '>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='AccordionHeader'>
                        <h3 className='bold-text m-4'> 3 Reasons To Join Biz Vision</h3>

                    </Accordion.Header>
                    <Accordion.Body className='accordion'>
                        <Container>
                            <Row className='m-5'>
                                <Col>
                                    <div class="block1-main -fs:16 -lh:16" w="12/12/6">
                                        <h4 className='bold-text my-4'>Unrivaled Coverage of the Lower Middle Market </h4>
                                        <p style={{ fontWeight: "lighter", fontSize: "20px" }}>Over 2,000 financial investors and corporate acquirers target lower middle market investments on Axial every year.</p>
                                        <ol class="ol1">
                                            <li class="li1"><b>250+ Family Offices</b></li>
                                            <li class="li1"><b>500+ Private Equity Firms</b></li>
                                            <li class="li1"><b>850+ Acquisitive Portfolio Companies</b></li>
                                            <li class="li1"><b>400+ Independent Sponsors &amp; HNWIs</b></li>
                                            <li class="li1"><b>100+ Lenders and Private Credit Investors</b></li>
                                        </ol>
                                        <p>The buy-side member base ranges from brand name private equity firms and corporations that are difficult to penetrate, to family offices and boutique investors that can&#8217;t be found in directories or databases.</p>
                                    </div>

                                </Col>
                                <Col className='m-3'>
                                    <img src={sample} height="300px" width="400px" />
                                </Col>
                            </Row>
                            <Row className='m-5'>
                                <Col>
                                    <div>
                                        <h4 className='bold-text my-4'>
                                            Sophisticated Deal Marketing & Tracking
                                            Tools
                                        </h4>
                                        <ol>
                                            <li style={{ fontWeight: "400" }}>
                                                <span >
                                                    A powerful deal marketing system
                                                    built around privacy, customization,
                                                    control, and seller
                                                    confidentiality.
                                                </span>
                                            </li>
                                            <li style={{ fontWeight: "400" }}>
                                                <span>
                                                    Deal management tools that expedite
                                                    NDA execution and other core deal
                                                    process workflows.
                                                </span>

                                            </li>
                                            <li style={{ fontWeight: "400" }}>
                                                Unique data sets to help you understand
                                                the deal criteria, transaction
                                                experience, responsiveness, and
                                                reputation of any counter party you
                                                might engage on the Axial platform.
                                            </li>
                                        </ol>
                                        <p style={{ fontWeight: "400" }}>
                                            Axial’s platform reflects how lower
                                            middle market transactions get done
                                            &#8212; privately and confidentially.
                                            Unlike public deal listing sites, Axial
                                            members looking to sell or raise capital
                                            retain total control and confidentiality
                                            over whom, how, and when they approach
                                            buy-side targets.


                                        </p>
                                    </div>
                                </Col>
                                <Col className='m-3' xs={{ order: 'first' }}>
                                    <img src={sample} height="300px" width="400px" />
                                </Col>
                            </Row>
                            <Row className='m-5'>
                                <Col>
                                    <div >
                                        <h4 className='bold-text my-4'>Get Found by Key Target Audiences </h4>
                                        <p> Generating over 1 million page views of targeted traffic each year, Axial’s lower middle market directory is a critical digital destination. Our free member profile tools make it easy for you to maximize your visibility with exit-minded business owners, potential job candidates, and private equity firms looking for investment banks to represent their portfolio companies.</p>
                                        <Button variant='primary' className='m-2 bold-text'>Join Axial Now</Button>
                                    </div>
                                </Col>
                                <Col className='m-3'>
                                    <img src={sample} alt="image" height="300px" width="400px" />
                                </Col>

                            </Row>
                            <div className="text-center mb-5" >
                                <a href="#top" className="bold-text BringToTop">
                                    ^Jump to top of page
                                </a>
                            </div>

                        </Container>

                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
            <Container className='mt-5'>
                <Row >
                    <Col>
                        <div>
                            <h3 className="bold-text color-blue">Cultivate New Relationships</h3>
                            <div className="mt-4" >

                                <h4 className="mt-3 bold-text">
                                    As an Extension of Your Existing Network
                                </h4>
                                <p className='font-weight-light'>
                                    "Day to day, I am focused on growing the business,
                                    finding new customers, and making sure our customers are
                                    as happy as possible. I have to deal with many things in
                                    a given day, which is fairly challenging."
                                    <br /><br />
                                    "One of the reasons I use Axial is to plan for the
                                    future. 2-3 years down the line, I'll be at the point
                                    where I'll be able to know that I need an advisor, and
                                    if I want to be acquired or make an acquisition. I'll be
                                    able to have a very clear idea of what I want to do. It
                                    is not something I take lightly, so I want to make sure
                                    I plan accordingly."
                                </p>


                            </div>
                        </div>




                    </Col>
                    <Col>
                        <div w="12/6">
                            <div className="embed1">
                                <iframe
                                    src="https://player.vimeo.com/video/191632675?title=0&amp;byline=0&amp;portrait=0"
                                    width="540"
                                    height="360"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='m-5'>
                    <Col>
                        <div>
                            <h2 className='my-3 '> Additional Employee</h2>
                            <h3>At No Additional Cost</h3>
                            <p className='my-3'>
                                Axial helps you find lesser-known targets such as family offices, strategic acquirers, and newly emerged financial sponsors to complement existing buy-side targets you have in mind.
                            </p>

                        </div>

                    </Col>
                    <Col>
                        <div className='bold-text quote p-4'>
                            <blockquote className="-t0 -fw7">
                                <q>Axial is like having an additional employee at no additional cost. The platform gives us a continuously updated and relevant list of recommended buyers and investors who are looking for deals like ours right now, with no research on our end. It’s opened up a whole new universe of potential buyers and investors in an organized and efficient way.</q>
                                <cite className="d-flex justify-content-left mt-3">

                                    <Image src={sample} alt="Author" roundedCircle style={{ width: '80px', height: '80px' }} />
                                    {/* <LazyLoad height={100} offset={100}>
                                        </LazyLoad> */}

                                    <span className="mx-2">
                                        <strong >KEITH YONKERS, 41 North </strong> <br />
                                        <p> INVESTMENT BANK MANAGING DIRECTOR</p>
                                    </span>
                                </cite>
                            </blockquote>
                        </div>


                    </Col>
                </Row>

            </Container>

            <div className='main p-5'>
                <p className='requestButton'> Get Started Today </p>
                <Button variant='primary' className='m-2 bold-text '>Request Membership <i class="fa-solid fa-arrow-right"></i></Button>
            </div>

            {/* call case studies component hre */}

        </>
    )
}

export default ReasonsToJoin