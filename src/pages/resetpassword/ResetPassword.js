import React, { useState } from 'react'
import { fetchOtpRequest, resetPassRequest } from '../../helps/axios';
import { toast } from 'react-toastify';
import { RequestOTP } from '../../components/resetpassform/RequestOTP';
import { PasswordRestFrm } from '../../components/resetpassform/PasswordRestFrm';
import { RegisterHeader } from '../RegisterPage/RegisterHeader';
import { Alert } from 'react-bootstrap';
import '../signpage/signpage.css'

export const ResetPassword = () =>{
const [email, setEmail] = useState("");
const [showForm, setShowForm] = useState("otp");
const [response, setResponse] = useState({});

const handleOnChange = (e) => {
  const { value } = e.target;
  setEmail(value);
};

const handleOnOtpRequest = async (e) => {
  e.preventDefault();

  const { status, message } = await fetchOtpRequest({ email });

  toast[status](message);
  setResponse({ status, message });

  status === "success" && setShowForm("reset");
};

const handleOnPasswordReset = async (data) => {
  const { confirmpassword, ...rest } = data;
  if (rest.password !== confirmpassword) {
    return toast.error("Password do not match");
  }

  const { status, message } = await resetPassRequest({ ...rest, email });
 
  
  setResponse({ status, message });
};

const forms = {
  otp: (
    <RequestOTP
      handleOnChange={handleOnChange}
      handleOnOtpRequest={handleOnOtpRequest}
    />
  ),

   reset: <PasswordRestFrm handleOnPasswordReset={handleOnPasswordReset} />,
};
return (
  <div>
    <RegisterHeader/>
    {response.message && (
      <Alert variant={response.status === "success" ? "success" : "danger"}>
        {response.message}
      </Alert>
    )}

<div className='body p-3'>
<div className=" resetpass-body">{forms[showForm]}</div>

</div>
    
   
  </div>
);
};