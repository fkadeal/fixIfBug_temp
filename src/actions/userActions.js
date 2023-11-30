import axios from "axios";
export const registerUser=(user,alert,navigate)=>async dispatch=>{
    dispatch({type:"USER_REGISTER_REQUEST"});
    try {
        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
        };
        console.log(user)
        const response=await axios.post('https://cheesy-delivery-api.vercel.app/api/auth/register',user,config)
        dispatch({type:"USER_REGISTER_SUCCESS",payload:response.status});
        alert("User Registration Successful")
        navigate("/login")
        console.log(response)
    } catch (error) {
        console.log("Error in registering user")
        console.log(error)
        dispatch({type:"USER_REGISTER_FAILURE",payload:error})
    }
}

export const loginUser=(user,navigate)=>async (dispatch,getState)=>{
    dispatch({type:"USER_LOGIN_REQUEST"});
    try {
        const response=await axios.post('/api/auth/login',user)
        dispatch({type:"USER_LOGIN_SUCCESS",payload:response});

    const loginState=getState().loginUserReducer;
    console.log(loginState)
    const {token,userInfo,success}=loginState
        if(success){
            const loginInfo = [
                {
                  token: token,
                  user: userInfo
                }
      
              ]
              localStorage.setItem("logininfo", JSON.stringify(loginInfo));
              navigate("/")
        }
        console.log(response)
    } catch (error) {
        console.log("Error in loging in user")
        console.log(error)
        dispatch({type:"USER_LOGIN_FAILURE",payload:error})
    }
}

export const logoutUser=(navigate)=> dispatch =>{
    localStorage.removeItem('logininfo')
    navigate("/login")
}


export const getAllUsers=()=>async dispatch=>{

    dispatch({type:'GET_USERS_REQUEST'})

    try {
        const response = await axios.get('/api/users/getallusers')
        console.log(response);
        dispatch({type:'GET_USERS_SUCCESS' , payload : response.data})
       
    } catch (error) {
        dispatch({type:'GET_USERS_FAILED' , payload : error})
    }

}

export const deleteUser=(userid)=>async dispatch=>{

    try {
        await axios.post('/api/users/deleteuser', {userid})
        alert('User deleted successfully')
        window.location.reload()
    } catch (error) {
        alert('Something went wrong')
        console.log(error);
    }

}