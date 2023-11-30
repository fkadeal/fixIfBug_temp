export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const itemExists = state.cartItems.find(item => item.name === action.payload.name)
            console.log(itemExists)
            if (itemExists) {
                    console.log(state.cartItems)
                    console.log(action.payload)
                    return{
                        ...state,
                        cartItems:state.cartItems.map(item=>item.name===action.payload.name?action.payload:item)
                    }
            }
            else {


                return {
                    //cartItems:action.payloadit overrides the initial cart itemms in this case to we needto use ...,


                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }

            }
            break;
            case "DELETE_FROM_CART":return{
                cartItems:state.cartItems.filter(item=>item.name!==action.payload.name)
            }
            default: return state
        }
}