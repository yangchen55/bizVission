import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import './hero.css';

import StarComponent from '../starcomponent/StarComponent';


const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero">
            <div className='hero-background'>
                <StarComponent />
            </div>


            <div className="ticker1">
                <p className="ticker1-prefix">Find your next</p>
                <div className="ticker1-main" data-main>
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

            <div className='d-flex justify-content-center mt-5'>
                <p className='hero-content text-center'>
                    Join 20,000+ lower middle market investors, M&A advisors,
                    and owner-operators who trust Axial's platform for deal
                    sourcing, deal marketing, and relationship-driven business
                    development.
                </p>
            </div>
            <div className='d-flex justify-content-center'>
                <Button variant='primary' className='me-3'>Join Now</Button>
                <Button variant='outline-primary'> learn more</Button>
            </div>

        </div>
    );
};

export default Hero;
