import React from 'react'
import { Button, Container } from 'react-bootstrap'
import GlobalLayout from '../../globalLayout/GlobalLayout'
import ParticleBackground from '../ParticleBackground'
import ReasonsToJoin from '../ReasonsToJoin/ReasonsToJoin'
import './selling.css'

const Selling = () => {
    return (
        <>
            <GlobalLayout>
                <Container className='m-5 d-flex justify-content-center'>
                    <div style={{ width: "70%" }} className="mt-4">
                        <pc className="sellside">SELL-SIDE M&A AND RAISING CAPITAL</pc>
                        <h1 className='pinpoint'>Pinpoint the Right Capital Partner for Every Deal</h1>
                        <p className="details">Axial puts the lower middle market’s capital partners at your fingertips. Research the buy-side by
                            current deal criteria, transaction experience, and reputation,
                            then confidentially reach out with complete control and discretion when it’s time to go to market.</p>
                        <Button variant='primary' className='m-2 bold-text'>Request Membership <i class="fa-solid fa-arrow-right"></i></Button>
                    </div>

                </Container>

                <ReasonsToJoin />

            </GlobalLayout>
        </>

    )
}

export default Selling