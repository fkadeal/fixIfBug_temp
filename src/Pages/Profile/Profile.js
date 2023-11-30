import React, { useEffect } from 'react'
import "./Profile.css"
import img from "../../assets/rayul-_M6gy9oHgII-unsplash.jpg"
import Order from '../../components/Order/Order';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../actions/profileActions';
import Loader from '../../components/Loader/Loader';
const Profile = () => {
  const loginState=useSelector(state=>state.loginUserReducer);
  const{logininfo}=loginState;
  const id=logininfo[0].user._id;
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getUser(id))
  }, [])
  const profileState=useSelector(state=>state.profileReducer);
  // console.log(profileState)
  const{user,loading,error,success}=profileState;
  console.log(user)
  const{email,phone,name,address,order,image}=user
  // console.log(order)
  
  return (
    <div  className='profile'>
      {loading?<Loader/>:<div className="profileContainer">
          <div className="profileInfo">
            <img src={image?.filePath?image?.filePath:img} alt="" />
            <div className="infoDetails">
                <p className="uname">{name}</p>
                <p className="uphone">{phone}</p>
                <p className="uemail">{email}</p>
            </div>
            <div className="addressDetails">
                <h3>Saved Addresses</h3>
                {address?.map((e)=>{
                    return(<div className='address'>
                    <p>{e.address}</p>
                    <p>{e.city}</p>
                    <p>{e.country}</p>
                    <p>{e.pincode}</p>
                </div>)
                })}
            </div>
          </div>
          <div className="orderInfo">
                  <h1 style={{textAlign:'center'}}>Order History</h1>
                <div className="orders">
                  {order?.map((e)=>{
                    return(<Order order={e}/>)
                  })}
                </div>
          </div>
      </div>
}
    </div>
  )
}

export default Profile