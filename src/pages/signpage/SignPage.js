import React, { useEffect, useRef } from 'react'
import './signpage.css'
import { SignpageHeader } from './SignpageHeader'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { autoLogin, fetchadmin, loginAcion } from '../authRedux/authAction'



export const SignPage = () => {
    const dispatch = useDispatch()
    const emailRef = useRef("");
    const passRef = useRef("");
    const {isLoading, user} = useSelector((state)=>state.user)
    console.log(user)
    const navigate = useNavigate();
    const location = useLocation()
    
    useEffect(()=>{
      dispatch(fetchadmin())
    },[dispatch])

    const origin = location?.state?.from?.pathname || "/dashboard";
   
  
    const handleOnSubmit = e =>{
        e.preventDefault();
    
        const formDt= {
           email: emailRef.current.value,
           password: passRef.current.value,
        }
       // call axios helper to call the api 
        if(!formDt.email || !formDt.password){
          return alert("please fill in the both the fields")
        }
       
       dispatch(loginAcion(formDt))
      }



      useEffect(()=>{ 
        user?._id ? navigate(origin):dispatch(autoLogin())
        // TODO: make router private and auto login
      },[user?._id, navigate, origin,dispatch])
    
  return (
    <div className='hero'>
       <SignpageHeader/>
       {/* <Globalnavbar/> */}

     <div className='body p-3'>
    <div className="signinpage-body p-3">
    <Form className='shoadow-lg rounded' 
    onSubmit={handleOnSubmit} 
    required>
      <h3 className='text-center'>Sign In</h3>
      <hr className='mb-5'/>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
        ref={emailRef} 
        type="email"
         placeholder="Enter email"
        required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
        ref={passRef}
        type="password"
         placeholder="Password"
        required />
      </Form.Group>
      
      <div className='d-grid'>
      <Button variant="primary" type="submit">
        {isLoading?
        <Spinner variant='warning' animation='border '/>: "Sign In"}
       
      </Button>
      <hr/>
     <span>Can't access your account? </span>
      <Link to="/resetpassword" className='nav-link bg-bolder' >Forget Password</Link>

      </div>
      
      

    </Form>
    </div>

</div>
       

       
        

    </div>
  )
}
