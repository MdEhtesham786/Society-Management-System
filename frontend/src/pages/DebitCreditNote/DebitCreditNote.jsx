import React, { useState,useEffect } from "react";
import CustomButton from "../../components/Button/CustomButton";
import "./DebitCreditNote.css";
import Select from "../../components/Select/Select";
import axios from "../../utils/axiosConfig"

const DebitNote = (props) => {
  axios.defaults.withCredentials = true; //The most important line for cookies
  const { page,memberList } = props;

//USE STATES
  const [formData, setFormData] = useState({
    name:'select_name',//required
    date:new Date().toISOString().split('T')[0],
    type:'select',
    receipt_type:'select',
    amount:'',//required
    principal:'',//required
    interest:'',//required
    narration:''
  })

  //Functions
  const handleSubmit = async () => {
    try {
      const apiEndpoints = {
        'Debit Note': '/transaction/debitNote',
        'Credit Note': '/transaction/creditNote',
        'Journal Voucher': '/transaction/journalVoucher',
      };
      const endpoint = apiEndpoints[page];

      if (endpoint) {

        const {name,date,amount,principal,interest,narration,type,receipt_type} = formData
        const sendData ={name,date,amount,principal,interest,narration,type,receipt_type} 
        const res = await axios.post(endpoint,sendData);
        const {data} = res
        if(data.success){
          console.log(data)
        }else{
console.log(res.data)
        }
      } else {
        console.log('Page not found');
      }
    } catch (err) {
      console.log(err)
    }
  }
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  const handleSearchBtn = () => {
    setArr2([...arr2, 1]);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 38) {
      console.log("up");
      e.preventDefault();
    } else if (e.keyCode === 40) {
      console.log("down");
      e.preventDefault();
    }
  };
  const handleChange = async(e)=>{
    setFormData({
     ...formData,
     [e.target.name]:e.target.value
    })
      }
//USE EFFECT
      useEffect(() => {
        setFormData({
          name:'select_name',//required
          date:new Date().toISOString().split('T')[0],
          type:'select',
          receipt_type:'select',
          amount:'',//required
          principal:'',//required
          interest:'',//required
          narration:''
        })
      }, [location.pathname,])
  return (
    <>
      <div className="flex flex-col bg-blue h-[85rem] px-2">
        <h2 className="text-2xl font-semibold text-center mb-2">{page}</h2>
        <div className="bg-[#E9F2F2] h-[17%] flex-col rounded-lg px-6 py-3 border-[#cdcdcd] border drop-shadow-lg">
          <div className="flex justify-between items-center h-[15%]  font-bold underline underline-offset-4">
            ENTRY FORM
          </div>
          <div className="flex mt-3 mb-4">
            <label
              htmlFor="date"
              className=" text-lg grid place-items-center font-[600]"
            >
              Date :
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              id="date"
              onChange={handleChange}
              className="w-[16.2%] ml-4 rounded-lg border border-[#d5d5d5] "
            />
            <label
              htmlFor="type"
              className=" text-xl grid place-items-center ml-11 font-[500]"
            >
              Type :
            </label>

            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="ml-4 w-[16rem] h-10  font-[500] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="select">Select</option>
              <option value="interest_debited">Interest Debited</option>
              <option value="other_credit">Other Credit</option>
            </select>

            <p className="text-lg grid place-items-center font-[500] ml-10">
              Balance :
            </p>
          </div>

          <div className="flex">
            <div className="flex w-[54.4%] h-full items-start justify-between ">
              <label
                htmlFor="narration"
                className=" text-lg grid place-items-center font-[500]"
              >
                Narration :
              </label>
              <textarea
                name="narration"
                id="narration"
                value={formData.narration}
              onChange={handleChange}
                className="ml-2 resize-none w-[83%] h-24 rounded-lg border border-[#d5d5d5]"
              ></textarea>
            </div>
            <div className="w-[40%] flex flex-col h-full ml-10">
              <p className="h-[50%] flex items-center text-lg font-[500] mb-6">
                Amount :
              </p>
              <p className="h-[50%] flex items-center text-lg font-[500]">
                Interest :
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#E9F2F2] h-[9%] flex-col rounded-lg px-6 py-3 border-[#cdcdcd] border drop-shadow-lg mt-3">
          <div className="flex">
           
            <label
                htmlFor="name"
                className=" text-lg grid place-items-center font-[500]"
              >
                Name :
              </label>
              <Select id={'name'} onChange={handleChange} name={'name'} value={formData.name}  classNames={'ml-4 w-[22rem] h-10  font-[500] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'} optionArr={memberList} />
            <label
              htmlFor="type"
              className=" text-xl grid place-items-center ml-5 font-[500]"
            >
              Type :
            </label>
            <select
              id="receipt_type"
              name="receipt_type"
              value={formData.receipt_type}
              onChange={handleChange}
              className="ml-4 w-[15rem] h-10  font-[500] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="select">Select</option>
              <option value="credit_receipt">Credit Receipt</option>
              <option value="debit_receipt">Debit Receipt</option>
            </select>
            <CustomButton
              type={"submit"}
              onClick={handleSubmit}
              className={"ml-10"}
              style={{
                backgroundColor: "#119F8E",
                boxShadow: "2px 4px 4px 0px #00000040",
                border: "1px solid #8e8e8e",
                width: "5rem",
                fontWeight: "500",
                fontSize: "1.1rem",
                display: "grid",
                placeItems: "center",
                color: "#F2F2F2",
                height: "2.5rem",
                padding: "0px",
              }}
            >
              {"Add"}
            </CustomButton>
          </div>
          <div className="flex mt-4 justify-start">
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
              value={formData.amount}
              onChange={handleChange}
              className="w-[25%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
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
              value={formData.principal}
              onChange={handleChange}
              className="w-[25%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
            />
            <label
              htmlFor="interest"
              className=" text-lg grid place-items-center font-[500] ml-4"
            >
              Interest :
            </label>
            <input
              type="number"
              onKeyDown={handleKeyDown}
              name="interest"
              id="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-[25%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
            />
          </div>
        </div>

        <div className=" bg-[#E9F2F2]  h-[26%] mt-3 rounded-lg flex flex-col px-2 pt-1 border-[#cdcdcd] border drop-shadow-lg">
          <div className="mt-1 border border-[#959595] min-h-[95%] max-h-[95%] w-full rounded-lg overflow-y-auto flex flex-col ">
            <div
              className={`min-h-12 statement bg-[#F3F9FB] border-b[1px] border border-t-[0px] border-l-[0px] border-r-[0px] border-[#9F9F9F]  flex`}
            >
              <p className="w-[13%] border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg  ">
                Sr. No.
              </p>
              <p className="w-[20%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg ">
                Name
              </p>
              <p className="w-[17%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg ">
                Type
              </p>
              <p className="w-[14%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg ">
                Amount
              </p>
              <p className="w-[11%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg ">
                Principal
              </p>
              <p className="w-[11%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg ">
                Interest
              </p>
              <p className="w-[14%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg ">
                Edit & Delete
              </p>
            </div>
            {arr1.map((e, i) => {
              return (
                <div
                  className={`min-h-12 statement ${
                    i % 2 === 0 ? "bg-transparent" : "bg-[#F3F9FB]"
                  } ${
                    arr1.length - 1 === i && arr1.length > 7
                      ? "border-b-[0px]"
                      : "border-b[1px]"
                  } border border-t-[0px] border-l-[0px] border-r-[0px] border-[#9F9F9F]  flex`}
                  key={i}
                >
                  <p className="w-[13%] border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px]  "></p>
                  <p className="w-[20%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                  <p className="w-[17%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                  <p className="w-[14%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                  <p className="w-[11%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                  <p className="w-[11%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                  <p className="w-[14%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-[#E9F2F2] h-[10%] flex-col rounded-lg px-6 py-3 border-[#cdcdcd] border drop-shadow-lg mt-3">
          <div className="flex mb-4">
            <label
              htmlFor="name_search"
              className=" text-xl grid place-items-center  font-[500]"
            >
              Name :
            </label>
            <select
              id="name_search"
              name="name_search"
              defaultValue={"select"}
              className="ml-4 w-[30rem] h-10  font-[500] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="select">Select</option>
              <option value="name1">name1</option>
              <option value="name2">name2</option>
            </select>

            <label
              htmlFor="date_search"
              className=" text-lg grid place-items-center font-[600] ml-5"
            >
              Date :
            </label>
            <input
              type="date"
              name="date_search"
              id="date_search"
              className="w-[16.9%] ml-4 rounded-lg border border-[#d5d5d5] "
            />
          </div>
          <div className="flex">
            <label
              htmlFor="amount_search"
              className=" text-lg grid place-items-center font-[500]"
            >
              Amount :
            </label>
            <input
              type="number"
              onKeyDown={handleKeyDown}
              name="amount_search"
              id="amount_search"
              className="w-[20.8%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
            />
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
              className="ml-5 w-[7.8rem] h-10  font-[500] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
            <CustomButton
              onClick={handleSearchBtn}
              type={"submit"}
              className={"ml-[10.2rem]"}
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
        <div className=" bg-[#E9F2F2]  h-[34%] mt-3 rounded-lg flex flex-col px-2 pt-1 border-[#cdcdcd] border drop-shadow-lg">
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
            {arr2.map((e, i) => {
              return (
                <div
                  className={`min-h-12 statement ${
                    i % 2 === 0 ? "bg-transparent" : "bg-[#F3F9FB]"
                  } ${
                    arr2.length - 1 === i && arr2.length > 7
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

export default DebitNote;
