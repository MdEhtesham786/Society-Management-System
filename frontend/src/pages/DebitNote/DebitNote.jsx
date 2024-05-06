import React, { useState } from "react";
import CustomButton from "../../components/Button/CustomButton";

const DebitNote = () => {
  // const [arr, setArr] = useState([]);
  // const handleSearchBtn = () => {
  //   setArr([...arr, 1]);
  // };
  return (
    <>
      <div>
        <div className="bg-[#E9F2F2] h-[35%] flex-col rounded-lg px-6 py-3 border-[#cdcdcd] border drop-shadow-lg">
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
              id="date"
              className="w-[16.9%] ml-4 rounded-lg border border-[#d5d5d5] "
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
              defaultValue={"select"}
              className="ml-4 w-[16.2rem] h-10  font-[500] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            <div className="flex w-[65%] h-full items-start ">
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
            <div className="w-[50%] flex flex-col h-full ml-10">
              <p className="h-[50%] flex items-center text-lg font-[500] mb-6">
                Amount :
              </p>
              <p className="h-[50%] flex items-center text-lg font-[500]">
                Interest :
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#E9F2F2] h-[35%] flex-col rounded-lg px-6 py-3 border-[#cdcdcd] border drop-shadow-lg mt-3">
          <div className="flex">
            <label
              htmlFor="name"
              className=" text-xl grid place-items-center  font-[500]"
            >
              Name :
            </label>
            <select
              id="name"
              name="name"
              defaultValue={"select"}
              className="ml-4 w-[22rem] h-10  font-[500] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="select">Select</option>
              <option value="name1">name1</option>
              <option value="name2">name2</option>
            </select>

            <label
              htmlFor="type"
              className=" text-xl grid place-items-center ml-5 font-[500]"
            >
              Type :
            </label>
            <select
              id="type"
              name="type"
              defaultValue={"select"}
              className="ml-4 w-[15rem] h-10  font-[500] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="select">Select</option>
              <option value="credit_receipt">Credit Receipt</option>
              <option value="debit_receipt">Debit Receipt</option>
            </select>
            <CustomButton
              type={"submit"}
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
              name="amount"
              id="amount"
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
              name="principal"
              id="principal"
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
              name="interest"
              id="interest"
              className="w-[25%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
            />
          </div>
        </div>
        <div>{/* table */}</div>
        <div>
          {/* <CustomButton
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
          </CustomButton> */}
        </div>
      </div>
    </>
  );
};

export default DebitNote;
