import axios from 'axios'
const rootUrl = "http://localhost:8000/api/v1"
const adminApi = rootUrl + "/admin";
const joinApi = rootUrl + "/join";

const fetchprocessor = async ({method, url, data, token, isPrivate}) =>{
  try {
    // await axios.post(adminApi + "/register", data);
    const jwtToken = token || sessionStorage.getItem("accessJWT");
   
    const headers = isPrivate
      ? {
          Authorization: jwtToken,
        }
      : null;

    const res = await axios({
      method,
      url,
      data,
      headers,
    });

    return res.data;
  } catch (error) {
    const message = error.message;

    if (error?.response?.data?.message === "jwt expired") {
      const { accessJWT } = await fetchNewAccessJWT();
      sessionStorage.setItem("accessJWT", accessJWT);
      return fetchprocessor({ method, url, data, isPrivate, token: accessJWT });
    }

    return {
      status: "error",
      message: error.message,
    };
  }
};

// Register admin
export const postNewAdmin = async(data) =>{
    const url = adminApi  + "/register";
    const obj={
        method: "post" ,
        url,
        data,
    }
    return fetchprocessor(obj)
}

//email verificaion
export const postEmailVerification = async (data) => {
  
    const url = adminApi + "/verify";
    const obj={
      method: "post",
      url,
      data,
    }
    return fetchprocessor(obj);
 
  
  };
//resetpassword
// export const resetpassaxios = async (data) => {
 
//     try {
//       const res = await axios.post(adminApi + "/resetPassword", data);
//       return res.data;
//     } catch (error) {
//       return {
//         status: "error",
//         message: error.message,
//       };
//     }
//   };
//optrequest
  export const fetchOtpRequest = async (data) => {
    const url = adminApi + "/request-otp";
    const obj = {
      method: "post",
      url,
      data,
    };
    return fetchprocessor(obj);
  };
  
  export const resetPassRequest = async (frmDt) => {
   
    const url = adminApi + "/reset-password";
    const obj = {
      method: "patch",
      url,
      data:frmDt,
    };
    return fetchprocessor(obj);

  };

  //Login admin
export const loginadmin = async (logindata) =>{
    const url = adminApi + "/login";
    const obj = {
        method: "post",
        url,
        data: logindata,
       
    };
    return fetchprocessor(obj)
};
 //readadmin
export const fetchadminaxios = async () => {
    const url = adminApi + '/user-profile';
    const obj = {
      method: "get",
      isPrivate: true,
   
      url,
    };
    return fetchprocessor(obj);
  }
// RegisterJoin
export const postNewJoin = async(data) =>{
    const url = joinApi +"/joinnow";
    const obj={
        method: "post",
        url,
        data,
    }
    return fetchprocessor(obj)
}

/// fetchadminprofile
export const fetchadminprofile = async ()=>{
  const url = adminApi + "/user-profile";
  const obj = {
    method: "get",
    url,
   isPrivate: true,
  };
  return fetchprocessor(obj);
};

// jwt access accessjwt and refreshjwt
export const fetchNewAccessJWT = async () => {
  const url = adminApi + "/new-accessjwt";
  const token = localStorage.getItem("refreshJWT");
  
  const obj = {
    method: "get",
    url,
    isPrivate: true,
    token,
  };
  return fetchprocessor(obj);
};
















//readjoin
export const fetchjoinaxios  = async () => {
    const url = joinApi;
    const obj = {
      method: "get",
      url,
    };
    return fetchprocessor(obj);
  }


