import React, { useState } from 'react'
import './navbar.css'
import { useSelector,useDispatch } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import{GoSignIn, GoSignOut} from "react-icons/go"
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../actions/userActions'

const Navbar = () => {
  
  const dispatch=useDispatch();
  const cartState = useSelector(state => state.cartReducer)
  const logininfo = JSON.parse(localStorage.getItem('logininfo'))

  const { cartItems } = cartState;

  const navigate = useNavigate()
  const handleClick=()=>{
    dispatch(logoutUser(navigate));

  }
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo"
          onClick={() => {
            navigate("/")
          }}
        >
          <h3>Cheesy Delivery</h3>
        </div>

        <div className="options">
          <div style={
            {
              display:"flex",
              alignItems:"center"
              
            }
          }>
          {logininfo?<h3
          onClick={()=>{
            navigate("/profile")
          }}
          style={{
            marginRight:"4rem"
          }}>{logininfo[0].user.name}</h3>:""}
          {
            logininfo?
            <button className='logoutBut'
            onClick={handleClick}
            >
              Logout
            </button>:
            <button className='loginBut'
            onClick={()=>{
              navigate("/login")
            }}
            >
              Login
            </button>
          }
          </div>
          <div className="cart">

            <AiOutlineShoppingCart className='icon'
              onClick={() => {
                navigate("/cart")
              }}
            />
            <p className='quantity'>{cartItems.length}</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar
