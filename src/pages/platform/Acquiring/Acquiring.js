import React from 'react'
import { Container, Button } from 'react-bootstrap'
import GlobalLayout from '../../globalLayout/GlobalLayout'
import ReasonsToJoin from '../ReasonsToJoin/ReasonsToJoin'
import "./Acquiring.css"

const Acquiring = () => {
    return (
        <GlobalLayout>
            <Container className='m-5 d-flex justify-content-center'>
                <div style={{ width: "70%" }} className="mt-4">
                    <pc className="sellside">ACQUIRING AND INVESTING</pc>
                    <h1 className='pinpoint'>Grow Your Deal Pipeline with Axial</h1>
                    <p className="details">Axial puts the lower middle market’s capital partners at your fingertips. Research the buy-side by
                        current deal criteria, transaction experience, and reputation,
                        then confidentially reach out with complete control and discretion when it’s time to go to market.</p>
                    <Button variant='primary' className='m-2 bold-text'>Request Membership <i class="fa-solid fa-arrow-right"></i></Button>
                </div>

            </Container>
            <ReasonsToJoin />
        </GlobalLayout>





    )
}

export default Acquiring