import React from 'react'
import { Container } from 'react-bootstrap'
import GlobalLayout from '../globalLayout/GlobalLayout'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import log from '../../assets/middle2.png';

import "./ClosedDeals.css"

const ClosedDeals = () => {
    return (

        <GlobalLayout>
            <Row className='closedWrapper'>
                <h1 className='closedHeader'>Select Closed Deals </h1>
                <p className='closedPara'> Featured Mergers, Acquisitions, and Capital Raise Transactions Closed via Axial</p>
            </Row>
            <Container className='d-flex justify-content-center'>
                <Row>
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



            </Container>

        </GlobalLayout>




    )
}

export default ClosedDeals
