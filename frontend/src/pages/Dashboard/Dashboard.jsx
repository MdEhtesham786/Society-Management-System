// import React from 'react'
// import PropTypes from 'prop-types'
// import { useState } from "react";
import "./Dashboard.css"
const Dashboard = ()=> {
  return (
  <>
  <div className="grid grid-rows-10 items-center  w-[97%] m-4 mb-0 rounded-lg overflow-hidden">

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
  <div className="btn">Hamza Shaikh</div>
  <div className="btn">Manager</div>
  <div className="btn">Settings</div>
  <div className="btn">Log Out</div>
</div>
  </div>
  </div>
  </>
  )
}

Dashboard.propTypes = {}

export default Dashboard
