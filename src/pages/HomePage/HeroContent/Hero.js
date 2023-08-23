import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import './hero.css';

import ParticleBackground from '../../platform/ParticleBackground';
import { Container, Row, Col } from 'react-bootstrap';


const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='d-flex'>
            <Col>
                <div class="hero1-background">
                    <ParticleBackground />
                </div>

            </Col>

            <Col xl={6} className="hero1-decontain-pull">

                <div class="hero1-main-contain">
                    <div className="ticker1 text-center">
                        <p className="ticker1-prefix m-5">Find your next</p>
                        <div className="ticker1-main bg-white" data-main>
                            <div className="ticker1-track" data-track>
                                <ul data-list>
                                    <li className={activeIndex === 0 ? '-active' : ''}>lender</li>
                                    <li className={activeIndex === 1 ? '-active' : ''}>buyer</li>
                                    <li className={activeIndex === 2 ? '-active' : ''}>advisor</li>
                                    <li className={activeIndex === 3 ? '-active' : ''}>deal</li>
                                    <li className={activeIndex === 4 ? '-active' : ''}>investor</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <p className='hero-content text-center'>
                        Join 1,000+ small business buyers, investors, franchisors, and online business owner-operators who trust BizVision’s 
                        platform for deal sourcing, deal marketing, and relationship-driven business development, and business acquisitions.
                        </p>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Button variant='primary' className='me-3'>Join Now</Button>
                        <Button variant='outline-primary'> learn more</Button>
                    </div>

                </div>
            </Col>

            <Col className='bg-white'>

            </Col>




        </div >
    );

};

export default Hero;