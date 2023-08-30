import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import Form from 'react-bootstrap/Form';
import './Blog.css'
import { useDispatch } from "react-redux";
import { postBlogAction } from './BlogAction';
import { Editor } from '@tinymce/tinymce-react';
import GlobalLayout from '../globalLayout/GlobalLayout';
import { DashboardHeader } from '../../components/dashboardlayout/DashboardHeader';
import { Adminlayout } from '../../components/dashboardlayout/Adminlayout';

const initialState = {

};

const AddNewBlog = () => {
    const dispatch = useDispatch();
    const [frmData, setFormData] = useState(initialState);
    const [status, setStatus] = useState(false);
    const [newImages, setNewImages] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [contentImage, setContentImage] = useState(null);
    const [profilePic, setProfilePic] = useState(null);

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
        console.log(selectedTags, "new iamges"); // This will show the updated value of newImages
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
        for (let key in frmData) {
            formData.append(key, frmData[key]);
        }
        formData.append("status", status);
        // Convert the selectedTags array into a comma-separated string
        const tagString = selectedTags.join(',');
        formData.append("blogTag", tagString);
        formData.append('contentImage', contentImage);
        formData.append('profilePic', profilePic);
        // newImages.length && [...newImages].map((item) => formData.append('images', item));
        dispatch(postBlogAction(formData));
    }
    useEffect(() => {
        console.log(selectedTags, "selected tags");
    }, [newImages][selectedTags]);

    return (
        <div>
           <DashboardHeader/>
            <h4 className='text-center'> ADD A NEW BLOG</h4>
            <Container className='BlogContainer'>
                <Form className='BlogForm' enctype="multipart/form-data" onSubmit={handleOnSubmit} >
                    <Form.Group className="mb-3">
                        <Form.Control type="text" size="lg" placeholder="Title" name="title" required onChange={handleOnChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" size="lg" name="content" required rows={8} placeholder="Type Your Blog content here" onChange={handleOnChange} />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Control type="file" accept="image/*" name="contentImage" required onChange={handleContentImageUpload} />
                    </Form.Group>

                    <br />
                    {/* <Form.Group className="mb-3">
                        <Editor
                            apiKey="YOUR_TINYMCE_API_KEY"
                            initialValue="<p>This is the initial content of the editor</p>"
                            init={{
                                height: 500,
                                menubar: 'file edit view insert format tools table tc help',
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount',
                                ],
                                toolbar:
                                    'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | link image | code',
                            }}
                            name="content"
                            onChange={handleOnChange}
                        />
                    </Form.Group> */}
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Author </Form.Label>
                                <Form.Control type="text" placeholder="author" name="author" required onChange={handleOnChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>upload Author profile pic</Form.Label>
                                <Form.Control type="file" accept="image/*" name="profilePic" onChange={handleProfilePicUpload} required />
                            </Form.Group>

                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <label htmlFor="blog-category">Select a Category:</label>
                            <Form.Select id="blog-category" onChange={handleOnChange} name="blogCategory" required >
                                <option disabled>which category the blog belong to</option>
                                <option value="general" >General</option>
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

            
        
           

            </div>
     
            

     
    )
}

export default AddNewBlog