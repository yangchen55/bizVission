import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import './FontBlog.css'
import { useDispatch, useSelector } from "react-redux";
import { getBlogAction } from './FontBlogAction';
import GlobalLayout from '../globalLayout/GlobalLayout';
import img3 from "../../assets/img1.png";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useParams } from 'react-router-dom';

// const tags = []
const FontBlog = () => {
    const { tag } = useParams()
    console.log(tag, "sdkdjkfdfjk")
    const dispatch = useDispatch();
    const { blogList, selectedBlog } = useSelector((state) => state.blog)
    const a = blogList.filter(item => item.blogTag.includes(tag))

    const tags = blogList.map((item) => {
        return [...item?.blogTag];
    });

    const allTags = tags.flat();
    const uniqueArray = [...new Set(allTags)]

    const category = blogList.map((item) => {
        return [item?.blogCategory]
    })
    const allCategory = category.flat()
    const uniqueCategory = [...new Set(allCategory)]

    console.log(blogList)
    // console.log(uniqueCategory, "lkdsjfh");












    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    }

    useEffect(() => {
        dispatch(getBlogAction())
        console.log(blogList)

    }, [dispatch])

    return (


        <GlobalLayout>
            <Container fluid>
                <Row>
                    {/* Aside Navigation */}
                    <Col md={3} className="bg-light">
                        <div className="p-3">
                            <h5> FEATURED TAGS </h5>
                            {uniqueArray.map((item, index) => (
                                <div key={item} className='d-flex flex-column'>
                                    <div key={index}>
                                        <Link to={`/forum/${item}`} className='nav-link'>
                                            <a href className='signInButton m-1 nav-link'>{item}</a>
                                        </Link>
                                    </div>

                                </div>
                            ))}
                        </div>
                        <div className="p-3">
                            <h5> Browse</h5>
                            {uniqueCategory.map((item, index) => (
                                <div key={index} className='d-flex flex-column'>
                                    <a href className='signInButton m-1'>{item}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </Col>

                    {/* Main Content */}
                    <Col md={9}>


                        <Row>
                            {a.length > 0 ? (
                                <>
                                    {a.map((item, index) => (
                                        <Col key={index} md={4} sm={6} xs={12}>
                                            <Card className="bg-dark text-white m-3">
                                                <div className="img-container" >
                                                    <Card.Img src={process.env.REACT_APP_DOMAIN + item?.contentImage} style={{ width: '40vh', height: '40vh' }} alt="business real estate" />
                                                </div>
                                                <Card.ImgOverlay>
                                                    <Card.Body>
                                                        <Card.Title>
                                                            <h6>{item?.title}</h6>
                                                        </Card.Title>



                                                        <Button variant="primary" className="btn-primary">
                                                            <Link className='nav-link' to={`/forum_blog/${item?.title.replace(/\s+/g, '-')}`}>
                                                                Read Articles
                                                            </Link>
                                                        </Button>



                                                    </Card.Body>
                                                    <Card.Footer className='blog-footer'>
                                                        <Card.Text>
                                                            <h4>{item?.author}</h4>
                                                            <h6>{formatDate(item?.createdAt)}</h6>
                                                        </Card.Text>
                                                    </Card.Footer>
                                                </Card.ImgOverlay>
                                            </Card>
                                        </Col>
                                    ))}

                                </>
                            ) : (
                                <>
                                    {blogList.map((item, index) => (
                                        <Col key={index} md={4} sm={6} xs={12}>
                                            <Card className="bg-dark text-white m-3">
                                                <div className="img-container" >
                                                    <Card.Img src={process.env.REACT_APP_DOMAIN + item?.contentImage} style={{ width: '40vh', height: '40vh' }} alt="business real estate" />
                                                </div>
                                                <Card.ImgOverlay>
                                                    <Card.Body>
                                                        <Card.Title>
                                                            <h6>{item?.title}</h6>
                                                        </Card.Title>



                                                        <Button variant="primary" className="btn-primary">
                                                            <Link className='nav-link' to={`/forum_blog/${item?.title.replace(/\s+/g, '-')}`}>
                                                                Read Articles
                                                            </Link>
                                                        </Button>



                                                    </Card.Body>
                                                    <Card.Footer className='blog-footer'>
                                                        <Card.Text>
                                                            <h4>{item?.author}</h4>
                                                            <h6>{formatDate(item?.createdAt)}</h6>
                                                        </Card.Text>
                                                    </Card.Footer>
                                                </Card.ImgOverlay>
                                            </Card>
                                        </Col>
                                    ))}
                                </>
                            )}


                        </Row>

                    </Col>
                </Row>

            </Container>














        </GlobalLayout >


    )
}

export default FontBlog