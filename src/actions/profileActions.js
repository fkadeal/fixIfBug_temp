import axios from "axios";

export const  getUser=(id)=>async dispatch=>{
    dispatch({type:"GET_USER_REQUEST"})
    try {
        const response =await axios.get(`https://cheesy-delivery-api.vercel.app/api/user/finduser/${id}`)
        console.log(response.data.user)
        dispatch({type:"GET_USER_SUCCESS",payload:response.data.user})
    } catch (error) {
        console.log("Error in fetching user")
        console.log(error)
        dispatch({type:"GET_PIZZA_FAILURE",payload:error})
    }
}