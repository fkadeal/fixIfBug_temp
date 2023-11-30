import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillEye, AiTwotoneEyeInvisible } from 'react-icons/ai'
import {BiImageAdd } from 'react-icons/bi'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../actions/userActions'
import Loader from '../../components/Loader/Loader'
const Register = () => {
  const dispatch = useDispatch();
  const [file,setFile]=useState();
  const registerState = useSelector(state => state.registerUserReducer)
  console.log(registerState);
  const { success, loading, error } = registerState;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[3].value !== e.target[4].value) {
      alert("Passwords entered does not match");
    }
    else {
      console.log()
      setFile(e.target[5].files)
      const formData=new FormData();
      formData.append('image',file)
      formData.append('name', e.target[0].value)
      formData.append('phone', e.target[1].value)
      formData.append('email', e.target[2].value)
      formData.append('password', e.target[3].value)
      console.log(...formData)
      dispatch(registerUser(formData,alert,navigate))
      // const user = {
      //   name: e.target[0].value,
      //   email: e.target[2].value,
      //   password: e.target[3].value,
      //   phone: e.target[1].value

      // }
      // console.log(user)
      // dispatch(registerUser(user, alert, navigate))
      // if (loading === false) {
      //   if (success) {
      //     alert("User successfully registered");
      //     navigate("/login")
      //   }
      //   else {
      //     alert("Error in registering user. Try again")
      //   }
      // }
      // else {
      //   <div>

      //     <Loader />
      //   </div>
      // }
    }

  }
  const navigate = useNavigate();
  const [see, setSee] = useState(false)
  const [csee, setcSee] = useState(false)

  return (
    <div className='register'>
      <div className="registerContainer">
        <h2
          style={{
            marginBottom: "2rem"
          }}
        >Register</h2>
        <form action="" className='registerForm' onSubmit={handleSubmit}>
          <input type="text"
            placeholder='Name'
            className='nameinp'
          />
          <input type="text"
            placeholder='Phone'
            className='phoneinp'
          />

          <input type="email"
            placeholder='Email'
            className='emailinp'
          />
          <div className="pass">
            <input type={see ? "text" : "password"}
              placeholder='Password'
              className='passinp'

            />
            <span
              onClick={() => {
                setSee(!see)
              }}
              style={{
                fontSize: "20px"
              }}
            >{see ? <AiTwotoneEyeInvisible /> : <AiFillEye />}</span>
          </div>
          <div className="pass">
            <input type={csee ? "text" : "password"}
              placeholder='Confirm Password'
              className='passinp'

            />
            <span
              onClick={() => {
                setcSee(!csee)
              }}
              style={{
                fontSize: "20px"
              }}
            >{csee ? <AiTwotoneEyeInvisible /> : <AiFillEye />}</span>
          </div>
          <div
          style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-around"
          }}
          >
          <label htmlFor="name" className='labelFile'
          
          
          ><BiImageAdd
          style={{
            fontSize: "40px"
          }}
          />  </label>
          <p style={{marginTop:"0px",fontSize:"20px"}}> Add your profile Pic </p></div>
          <input type="file" id="name" className="nameimp" name="image" autocomplete="off"  onChange={(event) => { setFile(event.target.files[0]) }} 
            style={{
              display:"none"
            }}        
          />
          <button className='registerButton'>Register</button>
        </form>
        <p>Already have an account? <span
          style={{
            color: "blue",
            cursor: "pointer"

          }}
          onClick={() => {
            navigate("/login")
          }}
        >Login!!</span></p>
      </div>
    </div>
  )
}

export default Register