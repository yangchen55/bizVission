import React, { useEffect, useRef, useState } from 'react'

;
import { useSearchParams } from 'react-router-dom';
import { postEmailVerification } from '../../helps/axios';
import { Alert, Spinner } from 'react-bootstrap';
import { RegisterHeader } from '../RegisterPage/RegisterHeader';

export const NewAccVerify = () => {
  // call the api with the code and email
  // show the message if verified or not

  let [searchParams] = useSearchParams();
  const [response, setResponse] = useState({});
  const isFetch = useRef(true);

  useEffect(() => {
    const emailVerificationCode = searchParams.get("c");
    const email = searchParams.get("email");

    //call the api
   email && emailVerificationCode && callAPi({ email, emailVerificationCode });
    isFetch.current = false;
  }, [searchParams]);

  const callAPi = async (obj) => {
    if(isFetch.current){
      const response = await postEmailVerification(obj);
    setResponse(response);
  }
  };



  return (
    <div>
       <RegisterHeader/>
        <div className=" p-5 d-flex justify-content-center align-items-center">
        {response?.message ? (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response?.message}
          </Alert>
        ) : (
          <Spinner animation="border" variant="primary" className="fs-1" />
        )}
      </div>

    </div>
  )
}
