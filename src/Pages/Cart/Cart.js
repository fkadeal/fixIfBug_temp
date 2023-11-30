import React from 'react'
import CartItem from '../../components/Cart Items/CartItem'
import './cart.css'
import { useDispatch,useSelector } from 'react-redux'
import Checkout from '../../components/Checkout/Checkout'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const cartState=useSelector(state=>state.cartReducer)
  const orderState=useSelector(state=>state.placeOrderReducer)
  const navigate=useNavigate()
  const {cartItems}=cartState
  const{loading,error,success}=orderState;

  
  console.log(orderState)
  var subtotal= cartItems.reduce((x,item)=>{
    return(x+item.price)
  },0)
  console.log(cartItems)
  return (
    <div className='cartpage'>
        <div className="cartitems">
            <h2>My Cart</h2>
            {/* <CartItem/>
            <CartItem/>
            <CartItem/> */}
            {
              cartItems?.map((pizza)=>{
                return(
                  <CartItem pizza={pizza} />
                  // console.log(pizza)
                )
              })
            }
        </div>
        <div className="subTotal">
            <h2>SubTotal = {subtotal} /-</h2>
            <Checkout subtotal={subtotal}/>
        </div>
    </div>
  )
}

export default Cart