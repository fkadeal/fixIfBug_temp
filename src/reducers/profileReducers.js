export const profileReducer=(state={user:{}},action)=>{
    switch(action.type)
    {
        case"GET_USER_REQUEST":return{
            loading:true,
            ...state
        }
        case"GET_USER_SUCCESS":return{
                loading:false,
                success:true,
                user:action.payload
                
        }
        case"GET_USER_FAILURE":return{
            loading:false,
            success:false,
            error:action.payload
        }
        default:return state
    }
}