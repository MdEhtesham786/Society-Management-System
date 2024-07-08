import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import GenerateBills from "../../components/Generate-Bills/GenerateBills";
import CustomButton from "../../components/Button/CustomButton";
import "./Bill-Generation.css";
import Select from "../../components/Select/Select";
import axios from "../../utils/axiosConfig"
import { setAdminSettings} from "../../reducer/adminSettingsSlice";



const BillGeneration = (props) => {
  axios.defaults.withCredentials = true; //The most important line for cookies

  const navigate = useNavigate();

  const {page,memberList,adminSettings} = props
  const {primaryColor,secondaryColor} = adminSettings 
  //FormData Usestate
  const [formData, setFormData] = useState({
type:'select',
sub_type:'select',
    bill_date:new Date().toISOString().split('T')[0],
    due_date:new Date().toISOString().split('T')[0],
    is_credit_limit:false,
    credit_amount:0,
    rebate_date:new Date().toISOString().split('T')[0],
    rebate_days:0,
    rebate_percentage:0,
    interest_type:'select',
    interest_days:30,
    interest_percentage:1.75,
    manual_interest:false,
    building:'all',
    wing:'all',
    name:'Nothing Selected',
    narration:''
  })

// Function
const handleChange = async(e)=>{
  const { name, type, value, checked } = e.target;
  setFormData({
    ...formData,
    [name]: type === 'checkbox' ? checked : value
  });
 
}
const handleKeyDown = (e) => {
  if (e.keyCode === 38) {
    e.preventDefault();
  } else if (e.keyCode === 40) {
    e.preventDefault();
  }
};
const handleSubmit = async () => {
  try {
      const {type,sub_type,name,bill_date,is_credit_limit,due_date,credit_amount,rebate_date,rebate_days,rebate_percentage,interest_type,interest_days,interest_percentage,manual_interest,narration,building,wing} = formData
      const sendData ={type,sub_type,name,bill_date,is_credit_limit,due_date,credit_amount,rebate_date,rebate_days,rebate_percentage,interest_type,interest_days,interest_percentage,manual_interest,narration,building,wing,} 
      console.log(sendData)
      const res = await axios.post('/transaction/billGeneration/generate',sendData);
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
const handleEditBillSubmit = async () => {
  try {
      const {type,sub_type,name,bill_date,is_credit_limit,due_date,credit_amount,rebate_date,rebate_days,rebate_percentage,interest_type,interest_days,interest_percentage,manual_interest,narration,building,wing} = formData
      const sendData ={type,sub_type,name,bill_date,is_credit_limit,due_date,credit_amount,rebate_date,rebate_days,rebate_percentage,interest_type,interest_days,interest_percentage,manual_interest,narration,building,wing,} 
      const res = await axios.post('/transaction/billGeneration/generate',sendData);
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
const handleViewSubmit = async () => {
  try {
      const {type,sub_type,name,bill_date,is_credit_limit,due_date,credit_amount,rebate_date,rebate_days,rebate_percentage,interest_type,interest_days,interest_percentage,manual_interest,narration,building,wing} = formData
      const sendData ={type,sub_type,name,bill_date,is_credit_limit,due_date,credit_amount,rebate_date,rebate_days,rebate_percentage,interest_type,interest_days,interest_percentage,manual_interest,narration,building,wing,} 
      const res = await axios.post('/transaction/billGeneration/generate',sendData);
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
//Use effect
useEffect(() => {
  setFormData({
    type:'select',
    sub_type:'select',
        bill_date:new Date().toISOString().split('T')[0],
        due_date:new Date().toISOString().split('T')[0],
        is_credit_limit:false,
        credit_amount:0,
        rebate_date:new Date().toISOString().split('T')[0],
        rebate_days:0,
        rebate_percentage:0,
        interest_type:'select',
        interest_days:30,
        interest_percentage:1.75,
        manual_interest:false,
        building:'all',
        wing:'all',
        name:'Nothing Selected',
        narration:''
  })
}, [location.pathname])
  return (
    <>
    <div className="flex flex-col bg-blue h-[50rem]   px-2">
    <h2 className="text-2xl font-semibold text-center">{page}</h2>
<div className=" h-[29%] my-2 rounded-lg flex flex-col px-6 py-3 border-[#cdcdcd]  border drop-shadow-lg "style={{backgroundColor:secondaryColor}}>
<div className="flex justify-between underline text-lg underline-offset-4 items-center h-[15%]  font-semibold">
            Period
          </div>
          <div className="flex h-[25%] ">
          <div className="flex w-[30%] items-center">
              <label
                htmlFor="type"
                className=" text-lg grid place-items-center font-[500]"
              >
                Type :
              </label>
              <Select  classNames={'h-10 w-[76%] ml-2'} id={'type'}  onChange={handleChange} name={'type'} value={formData.type} optionArr={[{title:'Select',value:'select'},{ title: 'Bill', value: 'bill' }, { title: 'Salary', value: 'salary' },{title:'Supplementary Bill',value:'supplementary_bill'}]} />
            </div>
            <div className="flex w-[32%] items-center">
              <label
                htmlFor="sub_type"
                className=" text-lg grid place-items-center font-[500]"
              >
                Sub Type :
              </label>

              <Select classNames={`h-10 w-[70%] ml-2`} id={'sub_type'} onChange={handleChange} name={'sub_type'} defaultValue={formData.sub_type}  />
            </div>
            <div className="ml-6 flex w-[32%] items-center">
            <input
                type="checkbox"
 name="is_credit_limit"
                id="is_credit_limit"
                onChange={handleChange}
                checked={formData.is_credit_limit}
                className="w-8 h-8 rounded-lg border-[#d5d5d5] mr-2 border focus:ring-0 "
              />
              <label
                htmlFor="is_credit_limit"
                className=" text-lg grid place-items-center font-[500]"
              >
                Is Credit Limit ?
              </label>
            
            </div>
          </div>
          <div className="flex h-[25%]">
          <div className="flex w-[29%] items-center">
              <label
                htmlFor="bill_date"
                className=" text-lg grid place-items-center font-[500]"
              >
                Bill Date :
              </label>
              <input disabled
                type="date"
                onChange={handleChange} name="bill_date"
                id="bill_date"
                value={formData.bill_date}
                className="w-[67%] h-10 rounded-lg border-[#d5d5d5] ml-2 border bg-[#e6e6e6] cursor-not-allowed"
              />
            </div>
            <div className="flex w-[32%] items-center">
              <label
                htmlFor="due_date"
                className=" text-lg grid place-items-center font-[500]"
              >
                Due Date :
              </label>
              <input
              disabled
                type="date"
                onChange={handleChange} name="due_date"
                id="due_date"
                value={formData.bill_date}
                className="w-[70%] h-10 rounded-lg border-[#d5d5d5] ml-2 border bg-[#e6e6e6] cursor-not-allowed"
              />
            </div>
            <div className="ml-6 flex w-[32%] items-center">
           
              <label
                htmlFor="credit_amount"
                className=" text-lg grid place-items-center font-[500]"
              >
                Credit Amount 
              </label>
              <input
                type="number"
                onKeyDown={handleKeyDown}
                onChange={handleChange} name="credit_amount"
                id="credit_amount"
                
                disabled={!formData.is_credit_limit}
                value={formData.credit_amount}
                className={`w-[65%] h-10 rounded-lg border-[#d5d5d5] ml-2 border ${formData.is_credit_limit?'':'bg-[#e6e6e6] cursor-not-allowed'}`}
              />
            </div>
          </div>
          <div className="flex h-[35%]">
          <div className="flex w-[100%] items-center">
              <label
                htmlFor="narration"
                className=" text-lg grid place-items-center font-[500]"
              >
                Narration :
              </label>
              <textarea 
                onChange={handleChange} name="narration"
                id="narration"
                value={formData.narration}
                className="ml-2 resize-none w-[51%]  rounded-lg border border-[#d5d5d5]"
              ></textarea>
            </div>
       
       
          </div>
       
          
</div>
<div className="bg-[#E9F2F2] h-[30%] my-2 rounded-lg flex flex-col px-6 py-3 border-[#cdcdcd] border drop-shadow-lg " style={{backgroundColor:secondaryColor}}>
<div className="flex justify-between underline text-lg underline-offset-4 items-center h-[15%]  font-semibold">
            Rebate on Null
          </div>
          <div className="flex h-[33%] mb-2 ">
          <div className="flex w-[33%] items-center">
              <label
                htmlFor="rebate_days"
                className=" text-lg grid place-items-center font-[500]"
              >
                Rebate Date :
              </label>
              <input
              disabled
                type="date"
                onChange={handleChange} name="rebate_date"
                id="rebate_date"
                value={formData.rebate_date}
                className="w-[65%] h-10 rounded-lg border-[#d5d5d5] ml-2 border bg-[#e6e6e6] cursor-not-allowed "
              />
            </div>
            <div className="flex w-[33%] items-center">
              <label
                htmlFor="rebate_days"
                className=" text-lg grid place-items-center font-[500]"
              >
                Rebate Days :
              </label>
              <input
                type="number"
                onKeyDown={handleKeyDown}
                onChange={handleChange} name="rebate_days"
                id="rebate_days"
                value={formData.rebate_days}
                className="w-[65%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
              />
            </div>
            <div className=" flex w-[36%] items-center">
           
              <label
                htmlFor="rebate_percentage"
                className=" text-lg grid place-items-center font-[500]"
              >
                Rebate Perc (%)
              </label>
              <input
                type="number"
                onKeyDown={handleKeyDown}
                onChange={handleChange} name="rebate_percentage"
                id="rebate_percentage"
                value={formData.rebate_percentage}
                className="w-[60%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
              />
            </div>
          </div>
          <div className="flex justify-between underline text-lg underline-offset-4 items-center h-[15%]  font-semibold">
            Interest
          </div>
          <div className="flex h-[33%]  ">
          <div className="flex w-[22%] items-center">
              <label
                htmlFor="interest_type"
                className=" text-lg grid place-items-center font-[500]"
              >
                Type :
              </label>
              <Select classNames={`h-10 w-[70%] ml-2`} id={'interest_type'} onChange={handleChange} name={'interest_type'} defaultValue={formData.interest_type} optionArr={[{title:'Select',value:'select'},{title:'Compund',value:'compund'},{title:'Simple',value:'simple'}]} />

            </div>
            <div className="flex w-[29%] items-center">
              <label
                htmlFor="interest_days"
                className=" text-lg grid place-items-center font-[500]"
              >
                Interest Days :
              </label>
              <input
                type="number"
                onKeyDown={handleKeyDown}
                onChange={handleChange} name="interest_days"
                id="interest_days"
                value={formData.interest_days}
                className="w-[60%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
              />
            </div>
            <div className=" flex w-[32%] items-center">
              <label
                htmlFor="interest_percentage"
                className=" text-lg grid place-items-center font-[500]"
              >
                Interest Perc (%)
              </label>
              <input
                type="number"
                onKeyDown={handleKeyDown}
                onChange={handleChange} name="interest_percentage"
                id="interest_percentage"
                value={formData.interest_percentage}
                className="w-[55%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
              />
            </div>
            <div className=" flex w-[19%] items-center">
            <input
                type="checkbox"
 name="manual_interest"
                id="manual_interest"
                onChange={handleChange}
                checked={formData.manual_interest}
                className="w-8 h-8 rounded-lg border-[#d5d5d5] mr-2 border focus:ring-0 "
              />
              <label
                htmlFor="manual_interest"
                className=" text-lg grid place-items-center font-[500]"
              >
                Manual Interest ?
              </label>
             
            </div>
          </div>
       
</div>
<div className="bg-[#E9F2F2] h-[18%] my-2 rounded-lg flex flex-col px-6 py-3 border-[#cdcdcd] border drop-shadow-lg " style={{backgroundColor:secondaryColor}}>
<div className="flex justify-between underline text-lg underline-offset-4 items-center h-[30%]  font-semibold">
            Selection
          </div>
          <div className="flex h-[60%] mb-2 ">
          <div className="flex w-[33%] items-center">
              <label
                htmlFor="building"
                className=" text-lg grid place-items-center font-[500]"
              >
                Building :
              </label>
              <Select classNames={`h-10 w-[70%] ml-2`} id={'building'} onChange={handleChange} name={'building'} defaultValue={formData.building} optionArr={[{title:'All',value:'all'},{title:2,value:2},{title:3,value:3}]} />

            </div>
            <div className="flex w-[33%] items-center">
              <label
                htmlFor="wing"
                className=" text-lg grid place-items-center font-[500]"
              >
                Wing :
              </label>
              <Select classNames={`h-10 w-[70%] ml-2`} id={'wing'} onChange={handleChange} name={'wing'} defaultValue={formData.building} optionArr={[{title:'All',value:'all'},{title:'',value:''},{title:'-',value:'-'}]} />
            </div>
            <div className=" flex w-[36%] items-center">
           
              <label
                htmlFor="name"
                className=" text-lg grid place-items-center font-[500]"
              >
                Name
              </label>
              <Select classNames={`h-10 w-[70%] ml-2`} id={'name'} onChange={handleChange} name={'name'} defaultValue={formData.name} optionArr={memberList} />
            </div>
          </div>
</div>
<div className="flex justify-start items-end h-[12%]">
<CustomButton
                  onClick={handleSubmit}
                  type={"submit"}
                  style={{
                    backgroundColor: "#119F8E",
                    boxShadow: "2px 4px 4px 0px #00000040",
                    // border: "1px solid #aeaeae",
                    width: "8.5rem",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    display: "grid",
                    placeItems: "center",
                    color: "#F2F2F2",
                    height: "2.5rem",
                    padding: "0px",
                  }}
                >
                  {"Generate Bills"}
                </CustomButton>
                <CustomButton
                  onClick={handleEditBillSubmit}
                  type={"submit"}
                  style={{
                    backgroundColor: "#045E92",
                    boxShadow: "2px 4px 4px 0px #00000040",
                    // border: "1px solid #aeaeae",
                    width: "7.5rem",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    display: "grid",
                    placeItems: "center",
                    color: "#F2F2F2",
                    height: "2.5rem",
                    padding: "0px",
                    margin:'0 1rem'
                  }}
                >
                  {"Edit Bills"}
                </CustomButton>
                <CustomButton
                  onClick={handleViewSubmit}
                  type={"submit"}
                  style={{
                    backgroundColor: "#A9CEED",
                    boxShadow: "2px 4px 4px 0px #00000040",
                    // border: "1px solid #aeaeae",
                    width: "5.5rem",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    display: "grid",
                    placeItems: "center",
                    color: "#F2F2F2",
                    height: "2.5rem",
                    padding: "0px",
                  }}
                >
                  {"View"}
                </CustomButton>
</div>
    </div>
    
    </>
  );
};
BillGeneration.propTypes = {
  user: PropTypes.object,
};
export default BillGeneration;
