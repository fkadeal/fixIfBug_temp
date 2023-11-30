export const registerUserReducer=(state={},action)=>{
    switch(action.type){
        case 'USER_REGISTER_REQUEST':return{
            loading:true
        }
        case 'USER_REGISTER_SUCCESS':return{
            loading:false,
            success:true,
            status:action.payload
        }
        case 'USER_REGISTER_FAILURE':return{
            loading:false,
            success:false,
            error:action.payload
            
        }


        default :return(state)
    }
}
export const loginUserReducer=(state={},action)=>{
    switch(action.type){
        case 'USER_LOGIN_REQUEST':return{
            loading:true
        }
        case 'USER_LOGIN_SUCCESS':return{
            loading:false,
            success:true,
            token:action.payload.data.token,
            userInfo:action.payload.data.user
            
        }
        case 'USER_LOGIN_FAILURE':return{
            loading:false,
            success:false,
            error:action.payload

        }


        default :return(state)
    }
}

export const editPizzaReducer=(state={ } , action)=>{

    switch(action.type)
    {
        case 'EDIT_PIZZA_REQUEST' : return{
            editloading : true,
            ...state
        }
        case 'EDIT_PIZZA_SUCCESS' : return{
            editloading : false ,
            editsuccess : true,
        }
        case 'EDIT_PIZZA_FAILED' : return{
            editerror : action.payload ,
            editloading : false
        }
        default : return state
    }

}