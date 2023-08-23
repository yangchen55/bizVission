import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import './FontBlog.css'
import { useDispatch, useSelector } from "react-redux";
import { getBlogAction } from './FontBlogAction';
import GlobalLayout from '../globalLayout/GlobalLayout';
import img3 from "../../assets/img1.png";
import Image from 'react-bootstrap/Image';
import { Link, useParams } from 'react-router-dom';



const BlogCard = () => {
    const { title } = useParams()

    const titleWithSpaces = title.replace(/-/g, ' ');
    // console.log(titleWithSpaces); // "how this is sool cool"


    const dispatch = useDispatch();
    const { blogList, selectedBlog } = useSelector((state) => state.blog)
     console.log(blogList, " bloglist here")
 
    const a = blogList.find(item => item.title === titleWithSpaces)


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


                <>
                    <Row className='d-flex justify-content around'>

                        <Col md={6}>
                            <img src={process.env.REACT_APP_DOMAIN + a?.contentImage} alt="business real estate" style={{ width: '80vh', height: '80vh' }} className="m-3" />
                        </Col>

                        <Col md={4}>
                            <div className='mt-5'>
                                <h1 className='bold-text'>{a?.title && a?.title.toUpperCase()}</h1>
                                <cite className="d-flex justify-content-left mt-3">
                                    <Image src={process.env.REACT_APP_DOMAIN + a?.profilePic} alt="Author" roundedCircle style={{ width: '80px', height: '80px' }} />
                                    {/* <LazyLoad height={100} offset={100}>
                                        </LazyLoad> */}
                                    <span className="mx-4">
                                        <strong > {a?.author} </strong> <br />
                                        <h6> {formatDate(a?.createdAt)} </h6>
                                    </span>
                                </cite>
                                <h6 className='m-4'>TAGS</h6>
                                <div className='d-flex'>
                                    {a?.blogTag.map((i, index) => (
                                        <Link to={`/forum/${i}`}>  <Button variant="outline-success" className='signInButton m-1'>  {i}</Button> </Link>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <div>
                            {a?.content}
                        </div>

                    </Row>


                </>


            </Container>
        </GlobalLayout >
    )
}

export default BlogCard