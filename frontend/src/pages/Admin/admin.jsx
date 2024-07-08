import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { setPrimaryColor,setSecondaryColor } from "../../reducer/adminSettingsSlice";
import axios from "../../utils/axiosConfig" 


const Admin = (props)=> {
  axios.defaults.withCredentials = true; //The most important line for cookies

//USe state
const adminSettings = useSelector(state=>state.adminSettings)
console.log('check',adminSettings)
const {primaryColor,secondaryColor }= adminSettings
const dispatch = useDispatch();
  let handlePrimaryColorInput=async(e)=>{
    dispatch(setPrimaryColor(e.target.value))
  }
  let handleSecondaryColorInput=async(e)=>{
    dispatch(setSecondaryColor(e.target.value))
      }
      const handleSave = async()=>{
        try {
          const res =await axios.post('/admin/settings',adminSettings)
          const {data} = res
          if(data.success){
            console.log(data)
          }else{
        console.log(res.data)
          }
        } catch (err) {
          console.log(err)
          
        }
      }
      const handleDefaultTheme = async()=>{
          dispatch(setPrimaryColor('#ffffff'))
          dispatch(setSecondaryColor('#e9f2f2'))
      }
  return (
<>
<div className='flex '>
<label htmlFor="primaryColor">Primary Color</label>
<input className='cursor-pointer' type="color" name="primaryColor" onInput={handlePrimaryColorInput} value={primaryColor} id="primaryColor" />
<label htmlFor="secondaryColor">Secondary Color</label>
<input className='cursor-pointer' type="color" onInput={handleSecondaryColorInput} value={secondaryColor} name="secondaryColor" id="secondaryColor" />
</div>
<input type="submit" value="Save" onClick={handleSave} />
<input type="button" value="Default Theme" onClick={handleDefaultTheme} />
</>
  )
}

export default Admin