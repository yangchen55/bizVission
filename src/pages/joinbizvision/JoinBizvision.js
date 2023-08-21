import React, { useState } from 'react'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import GlobalLayout from '../globalLayout/GlobalLayout'
import './joinbizvission.css'
import { CustomeForm } from './CustomeForm'


export const JoinBizvision = () => {
    const [form, setform] = useState([])

    const handleonchange = (e)=>{
    const {name, value }= e.target

    setform({
        ...form,
        [name]:value,

    })
    }

    const handleonsubmit = (e)=>{
        e.preventDefault()
        console.log(form)
    }


    const inputes = [
        {
          label: "First Name",
          type: "text",
          name: "fname",
          placeholder: "First Name",
          required: true,
        },
        {
          label: "Last Name",
          type: "text",
          name: "lname",
          placeholder: "Last Name",
          required: true,
        },
        {
          label: "Company Name",
          type: "text",
          name: "companyname", 
          placeholder: "Company Name",
          required: true,

        },
        {
            label: "Email",
            type: "text",
            name:"email",
            placeholder: "Email",
            required: true,
          },
           {
          label: "Phone Number",
          type: "number",
          name: "phonenumber",
          placeholder: "Phone Number",
          required: true,
          },

          {
            label: "Company Type",
            type: "text",
            name: "companytype",
            placeholder: "Small Business",
            },
            {
            label: "How Did You Head About Us?",
            type: "text",
            name: "message",
            placeholder: "Small Business"
               
                },
    ]
  return (
    <div>
        <GlobalLayout>
            <div className='container'>
            <Row>
           
                <Col >
                <p className='joinpagefont col-p p-2'>
                <div className='joinpagefont div1'>Join BizVision</div>
            
                Once you submit your information below, you can <br/>
                 expect next steps for becoming an Axial member.


                 <Form className='mt-2' onSubmit={handleonsubmit}>
                    {inputes.map((item, i)=>(
                        <CustomeForm key={i}{...item} onChange={handleonchange} 
                        />
                    ))}

{/* 
       <FloatingLabel 
        controlId="floatingInput"
        label="Email address"
        className="mb-3 ddd"
      >
         <Form.Select >
        
           <option value="1">One</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
         </Form.Select>
       
      </FloatingLabel> */}

      <div className='d-grid'>
        <Button type='submit'>Completed</Button></div>





                 </Form>
                </p>

               
                </Col>
                <Col md></Col>
            </Row>

            </div>
           

        </GlobalLayout>
       
        

    </div>



  )
}
