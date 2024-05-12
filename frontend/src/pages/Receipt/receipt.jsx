import  { useState, useRef, useEffect } from "react";
import CustomButton from "../../components/Button/CustomButton";
import axios from "../../utils/axiosConfig"
import "./receipt.css";
import PropTypes from "prop-types";
import Select from "../../components/Select/Select";
import { useLocation } from "react-router-dom";
const Receipt = (props) => {
  const location = useLocation()
  let bankArr =[{title:'Select Account',value:'select_amount'},{title:'Axis Bank',value:'axis_bank'},{title:'TDCC Bank',value:'tdcc_bank'}]
  let cashArr =[{title:'Select Account',value:'select_amount'},{title:'Cash',value:'cash'}]

  //UseState
  const { page,accountSelectionName } = props;
  const myRef = useRef(null);
  const [expand, setExpand] = useState(false);
  const [arr, setArr] = useState([]);
  const [memberReceipt,setMemberReceipt] = useState('bank')
  const [supplementaryReceipt,setSupplementaryReceipt] = useState('bank')
  const [memberList,setMemberList] = useState([])

  //FormData Usestate
  const [formDataBillGeneration,setFormDataBillGeneration] = useState({})
  const [formDataMemberReceipt,setFormDataMemberReceipt] = useState({
name:"",
bank:"",
branch:"",
date:"",
cheque_refno:"",
micr_ifsc:"",
cheque_ref_date:"",
amount:"",
principal:"",
interest:"",
narration:""



  })
  const [formDataBankReceipt,setFormDataBankReceipt] = useState({})
  const [formDataCashReceipt,setFormDataCashReceipt] = useState({})
  const [formDataSupplementaryReceipt,setFormDataSupplementaryReceipt] = useState({})
  const [formDataBankPayment,setFormDataBankPayment] = useState({})
  const [formDataCashPayment,setFormDataCashPayment] = useState({})

  //Functions
  const handleBillGenerationSubmit=async()=>{
    try {
      
    } catch (err) {
      console.log(err)
      
    }
  }
  const handleMemberReceiptSubmit=async()=>{
    try {
      axios.post('transaction/memberReceipt')
    } catch (err) {
      console.log(err)
      
    }
  }
  const handleBankReceiptSubmit=async()=>{
    try {
      
    } catch (err) {
      console.log(err)
      
    }
  }
  const handleCashReceiptSubmit=async()=>{
    try {
      
    } catch (err) {
      console.log(err)
      
    }
  }
  const handleSupplementaryReceiptSubmit=async()=>{
    try {
      
    } catch (err) {
      console.log(err)
      
    }
  }
  const handleBankPaymentSubmit=async()=>{
    try {
      
    } catch (err) {
      console.log(err)
      
    }
  }
  const handleCashPaymentSubmit=async()=>{
    try {
      
    } catch (err) {
      console.log(err)
      
    }
  }
  const handleSearchBtn = () => {
    setArr([...arr, 1]);
  };

  const handleCancelBtn = () => {
    const newArr = [...arr];
    newArr.pop();
    setArr(newArr);
  };

  const handleViewBtn = () => {
    if (expand) {
      myRef.current.classList.add("w-0");
      myRef.current.classList.remove("w-[19rem]");

      setExpand(false);
    } else {
      myRef.current.classList.add("w-[19rem]");
      myRef.current.classList.remove("w-0");
      setExpand(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 38) {
      e.preventDefault();
    } else if (e.keyCode === 40) {
      e.preventDefault();
    }
  };

 const handleMemberChange = (e)=>{
setMemberReceipt(e.target.value)
  }

  const handleSupplementaryChange = (e)=>{
    setSupplementaryReceipt(e.target.value)
      }

      const fetchData =async ()=>{
        try {
          const res = await axios.get(`http://127.0.0.1:5003/api/v1/transaction/memberreceipt`);
          const {data} = res
          if(data.success){
            return data
          }else{
            console.log(data)
          }
        } catch (err) {
          console.log(err)
          
        }
      }

      //UseEffects
      useEffect(()=>{
        console.log('Lund')
    fetchData().then((res)=>{
      let arr = []
      res.memberList.forEach((member,i)=>{
        if(i==0){
          arr.push({
            title:'Select',
            value:'select_name'
          })
          arr.push({
            title:member.Name,
            value:member.Name
          
          })
        }
arr.push({
  title:member.Name,
  value:member.Name

})
})
setMemberList(arr)
    })
      },[])

  useEffect(()=>{
    setMemberReceipt('bank')
    setSupplementaryReceipt('bank')
  },[location.pathname])

  return (
    <>
      <div className="flex flex-col bg-blue h-[85rem] px-2">
        <h2 className="text-2xl font-semibold text-center">{page}</h2>
        <div className="bg-[#E9F2F2] h-[10%] my-2 rounded-lg flex flex-col px-6 py-3 border-[#cdcdcd] border drop-shadow-lg ">
          <div className="flex justify-between underline underline-offset-4 items-center h-[40%]  font-semibold">
         {accountSelectionName}
          </div>
          <div className="h-[60%] flex items-center">
            <div className="w-full flex justify-start">
              <div className="w-[50%] flex">

                {/* Member Receipt */}
                {page==='Member Receipt'&&
                 <> <Select onChange={handleMemberChange} classNames={'h-10 w-[8.5rem]'} id={'bank_cash'} name={'bank_cash'}  defaultValue={'bank'} optionArr={[{title:'Bank',value:'bank'},{title:'Cash',value:'cash'}]}/>
                <Select classNames={`h-10 w-[12.5rem] ${page==='Member Receipt'||page ==='Supplementary Receipt'?'mx-6':'mr-6'}`} id={'bank_account'} name={'bank_account'} defaultValue={'select_account'} optionArr={memberReceipt==='bank'?bankArr:cashArr}/></>}

                {/* Supplementary Receipt */}
                {page==='Supplementary Receipt'&& <> <Select onChange={handleSupplementaryChange} classNames={'h-10 w-[8.5rem]'} id={'bank_cash'} name={'bank_cash'}  defaultValue={'bank'} optionArr={[{title:'Bank',value:'bank'},{title:'Cash',value:'cash'}]}/>
                <Select classNames={`h-10 w-[12.5rem] ${page==='Member Receipt'||page ==='Supplementary Receipt'?'mx-6':'mr-6'}`} id={'bank_account'} name={'bank_account'} defaultValue={'select_account'} optionArr={supplementaryReceipt==='bank'?bankArr:cashArr}/></>}

                {/* Other Pages */}
                {page!=='Member Receipt'&&page!== 'Supplementary Receipt'? <Select classNames={`h-10 w-[12.5rem] ${page==='Member Receipt'||page ==='Supplementary Receipt'?'mx-6':'mr-6'}`} id={'bank_account'} name={'bank_account'} defaultValue={'select_account'} optionArr={props.page ==='Bank Payment'|| props.page==='Bank Receipt'?bankArr:cashArr}/>:''}
                <CustomButton
                  onClick={handleViewBtn}
                  type={"submit"}
                  style={{
                    backgroundColor: "#A9CEED",
                    boxShadow: "2px 4px 4px 0px #00000040",
                    border: "1px solid #aeaeae",
                    width: "8.5rem",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    display: "grid",
                    placeItems: "center",
                    color: "#2A353F",
                    height: "2.5rem",
                    padding: "0px",
                  }}
                >
                  {"View Balance"}
                </CustomButton>
              </div>
              <div className="w-[50%] flex items-center text-lg font-[500]">
                <p
                  className="w-0 h-[1.8rem] max-h-[1.8rem] whitespace-nowrap overflow-hidden"
                  style={{ transition: "width .2s linear" }}
                  ref={myRef}
                >
                  Current Balance Amount : 720165.46
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#E9F2F2] h-[30%] my-2 rounded-lg flex flex-col px-6  border-[#cdcdcd] border drop-shadow-lg ">
          <div className="flex justify-between items-center h-[15%]  font-bold underline underline-offset-4">
            ENTRY FORM
          </div>
          <div className="h-[15%] flex items-center">
            <div className="flex w-[32%]">
              <label
                htmlFor="entry_name"
                className=" text-lg grid place-items-center font-[500]"
              >
                Name :
              </label>
              {/* <input
                type="text"
                name="entry_name"
                id="entry_name"
                className="w-[85%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
              /> */}
<Select id={'entry_name'} name={'entry_name'}classNames={'h-10 w-[80%] ml-2'} optionArr={memberList}  />
            </div>
            <div className="w-[68%] flex justify-center">
              <label
                htmlFor="entry_bank"
                className=" text-lg grid place-items-center font-[500]"
              >
                Bank :
              </label>
              <input
                type="text"
                name="entry_bank"
                id="entry_bank"
                className="w-[23%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
              />
              <label
                htmlFor="entry_branch"
                className=" text-lg grid place-items-center ml-4 font-[500]"
              >
                Branch :
              </label>
              <input
                type="text"
                name="entry_branch"
                id="entry_branch"
                className="w-[23%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
              />
              <label
                htmlFor="date"
                className=" text-lg grid place-items-center font-[500] ml-4"
              >
                Date :
              </label>
                   <input
                type="date"
                name="date"
                id="date"
                value={new Date().toISOString().split('T')[0]}
                className="rounded-lg border border-[#d5d5d5] ml-2 w-[23%]"
              />
            </div>
          </div>
          <div className="h-[15%] flex items-center ">
            <div className="flex w-[40%]">
              <label
                htmlFor="cheque_refno"
                className=" text-lg grid place-items-center font-[500]"
              >
                Cheque/Ref no :
              </label>
              <input
                type="number"
                onKeyDown={handleKeyDown}
                name="cheque_refno"
                id="cheque_refno"
                className="w-[65%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
              />
            </div>
            <div className="w-[60%] flex ">
            <label
                htmlFor="micr_ifsc"
                className=" text-lg grid place-items-center ml-4 font-[500]"
              >
                MICR/IFSC :
              </label>
              <input
                type="text"
                name="micr_ifsc"
                id="micr_ifsc"
                className="w-[25%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
              />
              <label
                htmlFor="cheque_ref_date"
                className=" text-lg grid place-items-center font-[500] ml-4"
              >
                Cheque/Ref Date :
              </label>
                   <input
                type="date"
                name="start_date"
                id="start_date"
                value={new Date().toISOString().split('T')[0]}
                className="rounded-lg border border-[#d5d5d5] ml-2 w-[25%]"
              />
            
            </div>
          </div>
          <div className="h-[22%] mt-3 flex items-start ">
            <div className="flex w-[45%]">
              <label
                htmlFor="amount"
                className=" text-lg grid place-items-center font-[500]"
              >
                Amount :
              </label>
              <input
                type="number"
                onKeyDown={handleKeyDown}
                name="amount"
                id="amount"
                className="w-[28%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
              />
              <label
                htmlFor="principal"
                className=" text-lg grid place-items-center font-[500] ml-4"
              >
                Principal :
              </label>
              <input
                type="number"
                onKeyDown={handleKeyDown}
                name="principal"
                id="principal"
                className="w-[35%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
              />
            </div>
            <div className="w-[55%] flex items-start h-full">
              <div className=" flex w-[46%] ml-4 ">
                <label
                  htmlFor="interest"
                  className=" text-lg grid place-items-center font-[500]"
                >
                  Interest :
                </label>
                <input
                  type="number"
                  onKeyDown={handleKeyDown}
                  name="interest"
                  id="interest"
                  className="w-[67%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
                />
              </div>
              <div className="w-[50%] flex flex-col h-full ml-4">
                <p className="h-[50%] flex items-center text-lg font-[500]">
                  Balance :
                </p>
                <p className="h-[50%] flex items-center text-lg font-[500]">
                  Principal :
                </p>
              </div>
            </div>
          </div>
          <div className="h-[28%] flex items-center   ">
            <div className="flex w-[68%]  h-full items-start ">
              <label
                htmlFor="narration"
                className=" text-lg grid place-items-center font-[500]"
              >
                Narration :
              </label>
              <textarea
                name="narration"
                id="narration"
                className="ml-2 resize-none w-[85%] h-24 rounded-lg border border-[#d5d5d5]"
              ></textarea>
            </div>
            <div className="w-[32%] h-full ">
              <p className="flex items-center ml-14 text-lg font-[500] h-[40%]  ">
                Interest :
              </p>
              <div className="h-[60%]  flex justify-end items-end pb-2">
                <CustomButton onClick={handleMemberReceiptSubmit}
                  type={"submit"} 
                  style={{
                    backgroundColor: "#119F8E",
                    boxShadow: "2px 4px 4px 0px #00000040",
                    border: "1px solid #8e8e8e",
                    width: "7rem",
                    fontWeight: "500",
                    fontSize: "1.1rem",
                    display: "grid",
                    placeItems: "center",
                    color: "#F2F2F2",
                    height: "3rem",
                    padding: "0px",
                  }}
                >
                  {"Submit"}
                </CustomButton>
                <CustomButton
                  onClick={handleCancelBtn}
                  type={"submit"}
                  style={{
                    backgroundColor: "#045E92",
                    boxShadow: "2px 4px 4px 0px #00000040",
                    border: "1px solid #8e8e8e",
                    width: "7rem",
                    fontWeight: "500",
                    fontSize: "1.1rem",
                    display: "grid",
                    placeItems: "center",
                    color: "#F2F2F2",
                    height: "3rem",
                    padding: "0px",
                    marginLeft: "1rem",
                  }}
                >
                  {"Cancel"}
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#E9F2F2] h-[20%] my-2 rounded-lg flex flex-col px-6  border-[#cdcdcd] border drop-shadow-lg ">
          <div className="flex justify-between items-center h-[15%]  font-bold underline underline-offset-4">
            SELECTION
          </div>
          <div className="h-[27%] flex items-center  ">
            <div className="flex w-[45%]">
              <label
                htmlFor="selection_name"
                className=" text-lg grid place-items-center font-[500]"
              >
                Name :
              </label>
              <input
                type="text"
                name="selection_name"
                id="selection_name"
                className="w-[85%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
              />
            </div>
            <div className="w-[55%] flex justify-center">
              <label
                htmlFor="selection_bank"
                className=" text-lg grid place-items-center font-[500]"
              >
                Bank :
              </label>
              <input
                type="text"
                name="selection_bank"
                id="selection_bank"
                className="w-[35%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
              />
              <label
                htmlFor="selection_amount"
                className=" text-lg grid place-items-center ml-4 font-[500]"
              >
                Amount :
              </label>
              <input
                type="number"
                onKeyDown={handleKeyDown}
                name="selection_amount"
                id="selection_amount"
                className="w-[35%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
              />
            </div>
          </div>
          <div className="h-[29%] flex  items-center ">
            <div className="flex w-[45%]">
              <label
                htmlFor="start_date"
                className=" text-lg grid place-items-center font-[600]"
              >
                Date :
              </label>
              <input
                type="date"
                name="start_date"
                id="start_date"
                className="w-[35%] ml-4 rounded-lg border border-[#d5d5d5] "
              />
              <label
                htmlFor="end_date"
                className=" text-lg grid place-items-center font-[600] mx-4"
              >
                To
              </label>

              <input
                type="date"
                name="end_date"
                id="end_date"
                className="w-[35%] rounded-lg border border-[#d5d5d5] "
              />
            </div>
            <div className="w-[55%] flex ">
              <label
                htmlFor="records"
                className=" text-xl grid place-items-center ml-4 font-[500]"
              >
                Records :
              </label>

              <select
                id="records"
                name="records"
                defaultValue={"10"}
                className="ml-4 w-[7.5rem] h-10  font-[500] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
              <label
                htmlFor="cheque_no"
                className=" text-xl grid place-items-center ml-4 font-[500]"
              >
                Cheque no :
              </label>
              <input
                type="number"
                onKeyDown={handleKeyDown}
                name="cheque_no"
                id="cheque_no"
                className="w-[38%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
              />
            </div>
          </div>
          <div className="flex justify-center items-center h-[29%]">
            <CustomButton
              onClick={handleSearchBtn}
              type={"submit"}
              style={{
                backgroundColor: "#119F8E",
                boxShadow: "2px 4px 4px 0px #00000040",
                border: "1px solid #8e8e8e",
                width: "7rem",
                fontWeight: "500",
                fontSize: "1.1rem",
                display: "grid",
                placeItems: "center",
                color: "#F2F2F2",
                height: "3rem",
                padding: "0px",
              }}
            >
              {"Search"}
            </CustomButton>
          </div>
        </div>
        <div className=" bg-[#E9F2F2]  h-[34%] my-2 rounded-lg flex flex-col px-2 pt-1 border-[#cdcdcd] border drop-shadow-lg">
          <div className="mt-1 border border-[#959595] min-h-[95%] max-h-[95%] w-full rounded-lg overflow-y-auto flex flex-col ">
            <div
              className={`min-h-12 statement bg-[#F3F9FB] border-b[1px] border border-t-[0px] border-l-[0px] border-r-[0px] border-[#9F9F9F]  flex`}
            >
              <p className="w-[11%] border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg  ">
                Sr. No.
              </p>
              <p className="w-[9%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg ">
                Doc. No.
              </p>
              <p className="w-[13%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg ">
                Date
              </p>
              <p className="w-[19%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg ">
                Name
              </p>
              <p className="w-[12%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg ">
                Amount
              </p>
              <p className="w-[9%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg ">
                Cheque No.
              </p>
              <p className="w-[9%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg ">
                Bank
              </p>
              <p className="w-[9%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg ">
                Edit
              </p>
              <p className="w-[9%] grid place-items-center font-semibold text-lg  ">
                Delete
              </p>
            </div>
            {arr.map((e, i) => {
              return (
                <div
                  className={`min-h-12 statement ${
                    i % 2 === 0 ? "bg-transparent" : "bg-[#F3F9FB]"
                  } ${
                    arr.length - 1 === i && arr.length > 7
                      ? "border-b-[0px]"
                      : "border-b[1px]"
                  } border border-t-[0px] border-l-[0px] border-r-[0px] border-[#9F9F9F]  flex`}
                  key={i}
                >
                  <p className="w-[11%] border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px]  "></p>
                  <p className="w-[9%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                  <p className="w-[13%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                  <p className="w-[19%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                  <p className="w-[12%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                  <p className="w-[9%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                  <p className="w-[9%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                  <p className="w-[9%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                  <p className="w-[9%]  "></p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
Receipt.propTypes = {
  page: PropTypes.string,
  accountSelectionName:PropTypes.string
};
export default Receipt;
