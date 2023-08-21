import React, { useState } from 'react'
import { RegisterHeader } from './RegisterHeader'
import '../signpage/signpage.css'
import { Button, Form } from 'react-bootstrap'
import { CustomeForm } from '../joinbizvision/CustomeForm'
import { postNewAdmin } from '../../helps/axios'
import { toast } from 'react-toastify'

export const RegisterPage = () => {
  const [form, setFrom] = useState({})
  const [error, setErro] = useState("");

  const handleonchange = (e)=>{
    const {name, value} = e.target;
    if (name === "password && confirmpassword") {
      setErro("");

      value.length < 6 && setErro("Minimum lenght 8 char is required");

      !/[0-9]/.test(value) && setErro("Number is required");
      !/[A-Z]/.test(value) && setErro("Upper case is required");
      !/[a-z]/.test(value) && setErro("Lower case is required");
    }
    

    setFrom({
      ...form,
      [name]:value
    });
  };

  const handleonSubmit = async (e)=>{
    e.preventDefault();

    const {confirmpassword, ...rest} = form;
    if(confirmpassword !== rest.password){
      toast.error("Password don't Match")
      return;
    } 

    const {status, message} = await postNewAdmin(rest)
    toast[status] (message)
    console.log(rest)
   
  
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
            label: "Password",
            type: "password",
            name: "password",
            placeholder: "********",
            required: true,
            },

            {
              label: "Confirm Password",
              type: "password",
              name: "confirmpassword",
              placeholder: "********",
              required: true,
            },

    ]

  return (
    <div>
       <RegisterHeader/>
       <Form className='shoadom-lg rounded'
             onSubmit={handleonSubmit}>
       <div className='body p-3'>
        <div className='registerpage-body p-3'>
            
            <h3 className='text-center'>Join Page</h3>
            <hr className='mb-5'/>

            {inputes.map((item, i)=>(
            <CustomeForm key={i}{...item} 
            onChange={handleonchange} 
                        />
                    ))}

         <div className='d-grid'>
         <Button variant="primary" type="submit">
              Join Now
            </Button>
      <hr/>
     
      </div>

           

        </div>

       </div>
       </Form>

    </div>
  )
}
