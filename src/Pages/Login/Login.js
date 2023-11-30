import React, { useState } from 'react'
import { AiFillEye, AiTwotoneEyeInvisible } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../actions/userActions'
import Loader from '../../components/Loader/Loader'
const Login = () => {
  const dispatch = useDispatch()
  const loginstate = useSelector(state => state.loginUserReducer)
  //  console.log(loginstate)

  const navigate = useNavigate();
  const [see, setSee] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: e.target[0].value,
      password: e.target[1].value

    }
    dispatch(loginUser(user,navigate));
    const { loading, success, userInfo, token, error } = loginstate;
  //  if(loading===false) {
  //     if (success) {
  //       const loginInfo = [
  //         {
  //           token: token,
  //           user: userInfo
  //         }

  //       ]
  //       localStorage.setItem("logininfo", JSON.stringify(loginInfo));


  //       navigate("/")

  //     }

  //     else {
  //       alert("Error in loging in. Try Again")
  //     }
  //   }
    // else{
    //   <div>
    //     <Loader/>
    //   </div>
    // }
    
  }
  return (
    <div className='login'>
      <div className="loginContainer">
        <h2
          style={{
            marginBottom: "2rem"
          }}
        >Login</h2>
        <form action="" className='loginForm' onSubmit={handleSubmit}>
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
          <button className='loginButton'>Login</button>
        </form>
        <p>Do not have an account? <span
          style={{
            color: "blue",
            cursor: "pointer"

          }}
          onClick={() => {
            navigate("/register")
          }}
        >Register!!</span></p>
      </div>
    </div>
  )
}

export default Login

/*
Past orders and rest of the details to be put in the profile page


*/