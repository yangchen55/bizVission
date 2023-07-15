import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import "./closedDeal.css"
import log from '../../../assets/middle2.png';

const ClosedDeal = () => {
    return (
        <div>
            <h4 className='text-center bold-heading'>Closed Deals</h4>
            <p className='text-center closedDeals'>View some of the recent transactions that have closed on our platform</p>
            <Row className='d-flex justify-content-center'>
                <Card style={{ width: '18rem' }} className="hover-card m-2">
                    <Card.Img variant="top" src={log} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="hover-card m-2">
                    <Card.Img variant="top" src={log} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="hover-card m-2">
                    <Card.Img variant="top" src={log} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="hover-card m-2">
                    <Card.Img variant="top" src={log} />
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <div className='d-flex justify-content-center m-3'>
                <Button variant='primary' className='bold-text' href='closeddeal.html'>View all</Button>

            </div>
            <div className='emptyDiv'>

            </div>

        </div>
    )
}

export default ClosedDeal