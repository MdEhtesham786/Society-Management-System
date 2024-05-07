// import React from 'react'
import PropTypes from 'prop-types'
// import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { setIsLoggedIn,setUser } from '../../reducer/authSlice';
import "./Dashboard.css"

import axios from 'axios';
const Dashboard = (props)=> {
  const {user} =props
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      const confirmation = confirm("Are you sure you want to logout?");
      if (confirmation) {
        const res = await axios.post(
          "http://127.0.0.1:5003/api/v1/auth/logout",
          {
            withCredentials: true,
            credentials: "include",
          }
        );
        const { data } = res;
        if (data.success) {
dispatch(setIsLoggedIn(false))
dispatch(setUser({}))
          navigate("/api/v1/auth/login");
        } else {
          console.log(data.message);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
  <>
  <div className=" grid grid-rows-10 items-center  w-[97%] m-4 mb-0 rounded-lg overflow-hidden">

  <div className="  h-full row-span-3 flex justify-center items-center bg-blue-">
    <img src="../../../img/dummy.jpeg" className="h-[10.9rem] w-[77.6rem] object-cover object-center" alt="" />
  </div>
  <div className="  h-full row-span-1 text-[2rem] text-center grid items-center  bg-red-">
    Man opus building no 2 and 3
  </div>
  <div className="  h-full row-span-6 flex justify-center bg-[#ABBFD0]">
<div className="w-[55%] h-full flex  items-center flex-col">
  <div className="text-[1.8rem] text-center font-bold h-[15%] w-full grid items-center">Id Card</div>
  <div className="h-[80%] bg-white  w-[85%] mb-4 flex items-center rounded-lg ">
    <div className="m-4 bg-[#E2E2E2] h-[69%] w-[30%] rounded flex justify-center items-center ">

    </div>
  </div>
</div>
<div className="w-[45%] h-[80%] mb-4 mr-8 self-end flex justify-evenly items-center flex-col ">
  <div className="btn">{user.username}</div>
  <div className="btn">{user.roles&&user.roles[1].split('')[0].toUpperCase().concat(user.roles[1].slice(1))}</div>
  <div className="btn">Settings</div>
  <button onClick={handleLogout} className="btn">Log Out</button>
</div>
  </div>
  </div>
  </>
  )
}
Dashboard.propTypes = {
  user:PropTypes.object
}

export default Dashboard
