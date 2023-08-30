import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import Form from 'react-bootstrap/Form';
import './Blog.css'
import { useDispatch } from "react-redux";
import { postBlogAction, updateBlogAction } from './BlogAction';
import { FaTimes } from 'react-icons/fa';
import GlobalLayout from '../globalLayout/GlobalLayout';

const EditBlog = ({ selectedBlog }) => {

    const dispatch = useDispatch();
    const [frmData, setFormData] = useState({});
    const [status, setStatus] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const [contentImage, setContentImage] = useState();
    const [profilePic, setProfilePic] = useState();

    const handleContentImageUpload = (event) => {
        setContentImage(event.target.files[0]);
    };

    const handleProfilePicUpload = (event) => {
        setProfilePic(event.target.files[0]);
    };

    const handleTagChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedTags([...selectedTags, value]);
        } else {
            setSelectedTags(selectedTags.filter(tag => tag !== value));
        }

    };

    const handleOnStatus = (e) => {
        setStatus(e.target.checked);
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...frmData,
            [name]: value,
        });
    };


    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const { __v, updatedAt, createdAt, ...rest } = frmData;
        for (let key in rest) {
            formData.append(key, rest[key]);
        }
        formData.append("status", status);
        formData.append("blogTag", selectedTags);
        formData.append('contentImage', contentImage);
        formData.append('profilePic', profilePic);

        dispatch(updateBlogAction(formData));
    }


    useEffect(() => {
        const { blogTag, contentImage, profilePic, status, ...rest } = selectedBlog
        setFormData(rest);
        setSelectedTags(blogTag)
        setStatus(status)
        console.log(selectedBlog)
    }, [setFormData, selectedBlog]);
    return (
        <GlobalLayout>
            <h4 className='text-center'> ADD A NEW BLOG</h4>
            <Container className='BlogContainer'>
                <Form className='BlogForm' onSubmit={handleOnSubmit} >
                    <Form.Group className="mb-3">
                        <Form.Control type="text" size="lg" placeholder="Title" name="title" value={frmData?.title} onChange={handleOnChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" size="lg" name="content" rows={8} value={frmData?.content} placeholder="Type Your Blog content here" onChange={handleOnChange} />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <img
                            src={process.env.REACT_APP_DOMAIN + selectedBlog?.contentImage[0]}
                            width="80px"
                            alt="photos"
                        />
                        <Form.Control type="file" accept="image/*" name="contentImage" onChange={handleContentImageUpload}
                        />

                    </Form.Group>
                    <br />
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Author </Form.Label>
                                <Form.Control type="text" placeholder="author" name="author" value={frmData?.author} onChange={handleOnChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>upload Author profile pic</Form.Label>
                                <img
                                    src={process.env.REACT_APP_DOMAIN + selectedBlog?.profilePic[0]}
                                    width="80px"
                                    alt="photos"
                                />
                                <Form.Control type="file" accept="image/*" name="profilePic" onChange={handleProfilePicUpload} />
                            </Form.Group>

                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <label htmlFor="blog-category">Select a Category:</label>
                            <Form.Select id="blog-category" onChange={handleOnChange} name="blogCategory" value={frmData?.blogCategory}>
                                <option disabled>which category the blog belong to</option>
                                <option value="advisors" >Advisors</option>
                                <option value="owners" >Business Owners</option>
                                <option value="buyers" >Buyers</option>
                            </Form.Select>

                        </Col>
                        <Col>
                            <label htmlFor="blog-tags">Select Tags:</label>

                            <Form.Check
                                type="checkbox"
                                label="General"
                                name="blogTag"
                                value="general"
                                onChange={handleTagChange}
                                // checked={selectedTags.includes('closedDeals')}
                                checked={selectedTags.includes('general')}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Closed Deals"
                                name="blogTag"
                                value="closedDeals"
                                onChange={handleTagChange}
                                checked={selectedTags.includes('closedDeals')}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Advisors"
                                name="blogTag"
                                value="advisors"
                                onChange={handleTagChange}
                                checked={selectedTags.includes('advisors')}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Business Owners"
                                name="blogTag"
                                value="business"
                                onChange={handleTagChange}
                                checked={selectedTags.includes('business')}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Buyers"
                                name="blogTag"
                                value="buyers"
                                onChange={handleTagChange}
                                checked={selectedTags.includes('buyers')}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Market Insight"
                                name="blogTag"
                                value="market"
                                onChange={handleTagChange}
                                checked={selectedTags.includes('market')}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Award Winning"
                                name="blogTag"
                                value="award"
                                onChange={handleTagChange}
                                checked={selectedTags.includes('award')}
                            />

                        </Col>
                    </Row>


                    <Form.Check
                        type="switch"
                        name="status"
                        className='m-3'
                        size="lg"
                        label={status ? 'Active' : 'Inactive'}
                        checked={status}
                        onChange={handleOnStatus}
                    />
                    <Button variant='success' type='submit'>Add new post</Button>
                </Form>

            </Container>

        </GlobalLayout >

    )
}

export default EditBlog