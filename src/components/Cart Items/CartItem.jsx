import React, { useState } from 'react'
import './cartitem.css'
import {MdOutlineDeleteOutline} from 'react-icons/md'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart,deleteFromCart,updateCart } from '../../actions/cartActions'
const CartItem = ({pizza}) => {
  // console.log(pizza)
  // const[quantity,setQuantity]=useState(pizza.quantity)
  const dispatch=useDispatch();
  const handleClick=(s)=>{
    console.log("I am here")
    if(s==='+')
    {
      dispatch(updateCart(pizza,pizza.quantity+1,pizza.varient))
    }
    else
    {
      dispatch(updateCart(pizza,pizza.quantity-1,pizza.varient))
      

    }
    console.log(pizza)
  
  }
  return (
    <div className='cartItem'>
      <div className="info">
        <p className="name">
          {pizza.name } [{pizza.varient}]
        </p>
        <p className='price'> Price: {pizza.quantity} * {pizza.prices[0][pizza.varient]} = {pizza.quantity* pizza.prices[0][pizza.varient]}</p>
        <div className="quantityy">
         <p> Quantity : </p>
         <AiOutlinePlus
         style={{
          color:"green",
          fontSize:"20px",
          cursor:"pointer"
         }}
         onClick={()=>{
          handleClick('+')
         }}
         />
         <p>{pizza.quantity}</p>
         <AiOutlineMinus
         style={{
          color:"red",
          fontSize:"20px",
          cursor:"pointer"
         }}
         onClick={()=>{
          handleClick('-')
         }}
         />
        </div>
      </div>
      <div className="image">
        <img src={pizza.image} alt="" />
        <MdOutlineDeleteOutline 
        style={{
          cursor:"pointer",
          marginLeft:"3rem",
          fontSize:"1.4rem",
          color:"red"
        }}
        onClick={()=>{
          dispatch(deleteFromCart(pizza))
        }}
        />
      </div>
    </div>
  )
}

export default CartItem