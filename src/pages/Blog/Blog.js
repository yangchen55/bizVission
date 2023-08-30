import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css'
import { useDispatch, useSelector} from "react-redux";
import { deleteBlogAction, getBlogAction, postBlogAction } from './BlogAction';
import { setSelectedBlog } from './blogSlice';
import EditBlog from './EditBlog';
import GlobalLayout from '../globalLayout/GlobalLayout';
import { setShowModal } from '../system/systemSlice';
import { DashboardHeader } from '../../components/dashboardlayout/DashboardHeader';

const Blog = () => {
    const dispatch = useDispatch();
    const { blogList, selectedBlog } = useSelector((state) => state.blog)
    console.log(blogList)
    console.log(process.env.REACT_APP_DOMAIN + blogList[0]?.profilePic[0])

    const handleOnDelete = (_id) => {
        if (
            window.confirm("Are you sure you want to delete this payment method?")
        ) {
            dispatch(deleteBlogAction(_id));
        }
    };

    const onEdit = (item) => {
        dispatch(setShowModal(true));
        dispatch(setSelectedBlog(item));
    };

    useEffect(() => {
        dispatch(getBlogAction())
        
        console.log(process.env.REACT_APP_DOMAIN + blogList[0]?.profilePic[0])
    }, [dispatch])

    return (


        <>
        <DashboardHeader/>
            {selectedBlog._id ? (
                <EditBlog selectedBlog={selectedBlog} />

            ) : (
                <div className='main d-flex'>
                    <Container className='BlogContainer m-3'>
                        <Button className="m-3 " variant="warning" href='/addBlog'>+ ADD NEW BLOG</Button>
                        {blogList.map((item, index) => (
                            <Accordion className='mt-4'>
                                <Accordion.Item eventKey={index}>
                                    <Accordion.Header className="d-flex justify-content-center text-center">

                                        <Col>
                                            <h6> Title:  {item?.title}</h6>
                                        </Col>
                                        <Col>
                                            <h6> Blog written by: {item?.author}</h6>
                                        </Col>
                                        <Col>
                                            <h6> blog written at:  {new Date(item?.createdAt).toLocaleDateString()}  </h6>
                                        </Col>
                                        <Col>
                                            <Button variant="danger" onClick={() => handleOnDelete(item._id)}>
                                                <i className="fas fa-trash-alt"></i> Delete
                                            </Button>

                                        </Col>
                                        <Col>
                                            <Button variant="info" onClick={() => onEdit(item)} >
                                                <i className="fas fa-edit" ></i> Edit
                                            </Button>
                                        </Col>


                                    </Accordion.Header>

                                    <Accordion.Body>

                                        <>

                                            <Row>
                                                <Col className='m-3'>
                                                    <img
                                                        src={process.env.REACT_APP_DOMAIN + item?.contentImage[0]}
                                                        width="80px"
                                                        alt="photos"
                                                    />
                                                </Col>
                                                <Col xs={6}>
                                                    {item.content}
                                                    <hr></hr>
                                                    <strong>Tag:</strong>
                                                    <div>
                                                        <h6>
                                                            {item?.blogTag?.map((tag, index) => (
                                                                <li key={index}>{tag}</li>
                                                            ))}
                                                        </h6>
                                                    </div>
                                                </Col>


                                                <Col className='m-3'>
                                                    <bold className="m-3">  status: </bold>

                                                    <Form.Check
                                                        type="switch"
                                                        className='m-3'
                                                        size="lg"
                                                        checked={item?.status}
                                                    />

                                                    category: <h5>{item?.blogCategory} </h5>
                                                    <br></br>
                                                    <img
                                            
                                                        src={process.env.REACT_APP_DOMAIN + item?.profilePic[0]}
                                                        className="avatar"
                                                        alt="Profile"
                                                    />
                                                    
                                                </Col>

                                            </Row>

                                        </>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        ))}
                    </Container>
                </div>
            )
            }

        </>


    )
}

export default Blog