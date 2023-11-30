export const addToCart=(pizza,quantity,varient)=>(dispatch,getState)=>{

    console.log(pizza.image.filePath)
    var cartItem={
        name:pizza.name,
        image:pizza.image.filePath,
        varient:varient,
        quantity:quantity,
        prices:pizza.prices,
        price:pizza.prices[0][varient] * quantity

    }
    if(cartItem.quantity<1)
    {
        dispatch({type:"DELETE_FROM_CART",payload:pizza})
    }
    else if(cartItem.quantity>10)
    {
        alert("Cannot add more than 10 of same item")
    }
    else
    {dispatch({type:"ADD_TO_CART",payload:cartItem})}
    const cartItems=getState().cartReducer.cartItems
    console.log(cartItems)
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}
export const updateCart=(pizza,quantity,varient)=>(dispatch,getState)=>{
    console.log(pizza)
    var cartItem={
        name:pizza.name,
        image:pizza.image,
        varient:varient,
        quantity:quantity,
        prices:pizza.prices,
        price:pizza.prices[0][varient] * quantity

    }

    if(cartItem.quantity<1)
    {
        dispatch({type:"DELETE_FROM_CART",payload:pizza})
    }
    else if(cartItem.quantity>10)
    {
        alert("Cannot able to add items more that 10")
    }
    else
    {dispatch({type:"ADD_TO_CART",payload:cartItem})}
    const cartItems=getState().cartReducer.cartItems
    console.log(cartItems)
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}
export const deleteFromCart=(pizza)=>(dispatch,getState)=>{

    dispatch({type:"DELETE_FROM_CART",payload:pizza})
    const cartItems=getState().cartReducer.cartItems
    console.log(cartItems)
    localStorage.setItem('cartItems',JSON.stringify(cartItems))

}