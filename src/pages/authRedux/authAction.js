import { toast, ToastContainer } from "react-toastify"
import { fetchadminaxios, fetchNewAccessJWT, loginadmin } from "../../helps/axios"
import { requestPending, requestSuccess } from "./authSlice"

export const loginAcion = (formdata)=> async (dispatch)=>{
    try {

        dispatch(requestPending())
        const pendingResp = loginadmin(formdata)
        toast.promise(pendingResp, {pending: "Please wait..."})
        const{status, message, toknes} = await pendingResp;
        toast[status](message)

        if(status === 'success'){
            const { accessJWT, refreshJWT } = toknes;
        
            sessionStorage.setItem("accessJWT", accessJWT);
            localStorage.setItem("refreshJWT", refreshJWT);
        
            dispatch(fetchadmin());
        }

    } catch (error) {
        
    }
}


export const fetchadmin = () => async (dispatch) => {
    const { status, user} = await fetchadminaxios();
    status === "Success" ? dispatch(requestSuccess(user)) : dispatch(requestSuccess({})); 

  };


  
    
  export const autoLogin =  () =>async (dispatch )=>{
    //if  accessJWT exist, get the user and mount in our redux store
   //check if accessJWT exist,
 
     const accessJWT = sessionStorage.getItem("accessJWT")
     const refreshJWT = localStorage.getItem("refreshJWT")
     
     if (accessJWT){
         dispatch(fetchadmin());
     }else if (refreshJWT){
         // call for new accessJWt
         const { status, accessJWT} = await fetchNewAccessJWT();
         if(status === "success"){
             sessionStorage.setItem("accessJWT", accessJWT);
       dispatch(fetchadmin());
       return;
         }
         dispatch(forceLogout());
 
     } else {
         // force logout
         dispatch(forceLogout());
     }
 
 };
 
 
 const forceLogout = ()=> (dispatch)=>{
     sessionStorage.removeItem("accessJWT");
   localStorage.removeItem("refreshJWT");
   dispatch(requestSuccess({}));
 }