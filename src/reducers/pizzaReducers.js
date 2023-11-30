export const getAllPizzaReducer=(state={pizza:[]},action)=>{
   switch(action.type)
   {
     case"GET_PIZZA_REQUEST":return{
        loading:true,
        ...state
        
     }
     case"GET_PIZZA_SUCCESS":return{
        loading:false,
      
        pizza:action.payload,
        
     }
     case"GET_PIZZA_FAILED":return{
      loading:false,
        error:action.payload
     }
     default:return  state
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