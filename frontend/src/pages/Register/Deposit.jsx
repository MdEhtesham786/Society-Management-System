import React, { useState } from "react";
import CustomButton from "../../components/Button/CustomButton";

const deposit = (props) => {
  const { page } = props;
  const [arr2, setArr2] = useState([]);
  const handleAddBtn = () => {
    setArr2([...arr2, 1]);
  };
  return (
    <div className="flex flex-col bg-blue h-[75rem] px-2">
      <h2 className="text-2xl font-semibold text-center mb-2">{page}</h2>
      <div className="bg-[#E9F2F2] h-[5.5%] mt-1 mb-4 rounded-lg flex flex-col px-3 py-3 border-[#cdcdcd] border drop-shadow-lg ">
        <div className="flex">
          <label
            htmlFor="type"
            className=" text-xl grid place-items-center ml-3 font-[500]"
          >
            Deposit Type :
          </label>
          <select
            id="type"
            name="type"
            defaultValue={"select"}
            className="ml-4 w-[25rem] h-10 font-[500] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="select">Select</option>
            <option value="Bank Deposit">Bank Deposit</option>
            <option value="Company Deposit">Company Deposit</option>
          </select>
          <label
            htmlFor="type"
            className=" text-xl grid place-items-center ml-11 font-[500]"
          >
            Bank Name :
          </label>
          <select
            id="type"
            name="type"
            defaultValue={"select"}
            className="ml-4 w-[25rem] h-10  font-[500] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="select">Select</option>
            <option value="axis_bank">Axis Bank</option>
            <option value="tdcc_bank">TDCC Bank</option>
          </select>
        </div>
      </div>

      <div className="bg-[#E9F2F2] h-[23%] flex-col rounded-lg px-6 py-3 mb-4 border-[#cdcdcd] border drop-shadow-lg">
        <div className="flex justify-between items-center h-[15%] font-bold underline underline-offset-4">
          ENTRY FORM
        </div>
        <div className="flex">
          <label
            htmlFor="deposit_no"
            className=" text-lg grid place-items-center font-500]"
          >
            Deposit Number:
          </label>
          <input
            type="text"
            name="deposit_no"
            id="deposit_no"
            className="w-[17.6%] ml-3 rounded-lg border border-[#d5d5d5] "
          />
          <label
            htmlFor="deposit_amount"
            className=" text-lg grid place-items-center font-500] ml-5"
          >
            Deposit amount:
          </label>
          <input
            type="text"
            name="deposit_amount"
            id="deposit_amount"
            className="w-[21%] ml-4 rounded-lg border border-[#d5d5d5] "
          />
          <label
            htmlFor="investment_date"
            className=" text-lg grid place-items-center font-500] ml-5"
          >
            Investment Date:
          </label>
          <input
            type="date"
            name="investment_date"
            id="investment_date"
            className="w-[16.2%] ml-4 rounded-lg border border-[#d5d5d5] "
          />
        </div>
        <div className="flex mt-4">
          <label
            htmlFor="rate_of_interest"
            className=" text-lg grid place-items-center font-500]"
          >
            Rate of Interest:
          </label>
          <input
            type="text"
            name="rate_of_interest"
            id="rate_of_interest"
            className="w-[18.2%] ml-3 rounded-lg border border-[#d5d5d5] "
          />
          <label
            htmlFor="maturity_amount"
            className=" text-lg grid place-items-center font-500] ml-5"
          >
            Maturity Amount:
          </label>
          <input
            type="text"
            name="maturity_amount"
            id="maturity_amount"
            className="w-[20.4%] ml-4 rounded-lg border border-[#d5d5d5] "
          />
          <label
            htmlFor="maturity_date"
            className=" text-lg grid place-items-center font-500] ml-5"
          >
            Maturity Date:
          </label>
          <input
            type="date"
            name="maturity_date"
            id="maturity_date"
            className="w-[16.2%] ml-4 rounded-lg border border-[#d5d5d5] "
          />
        </div>

        <div className="flex mt-3 ">
          <label
            htmlFor="narration"
            className=" text-lg grid place-items-center font-[500]"
          >
            Narration :
          </label>
          <textarea
            name="narration"
            id="narration"
            className="ml-2 resize-none w-[58.5%] h-24 rounded-lg border border-[#d5d5d5]"
          ></textarea>

          <div className="flex items-center">
            <CustomButton
              type={"submit"}
              className={"ml-16"}
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
              }}
            >
              {"Clear"}
            </CustomButton>
            <CustomButton
              type={"submit"}
              className={"ml-4"}
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
          </div>
        </div>
      </div>
      <div className="bg-[#E9F2F2] h-[18%] rounded-lg flex flex-col px-6  border-[#cdcdcd] border drop-shadow-lg ">
        <div className="flex justify-between items-center h-[18%] font-bold underline underline-offset-4">
          Search Form
        </div>
        <div className="flex items-center  ">
          <label
            htmlFor="debit_type"
            className=" text-lg grid place-items-center font-[500]"
          >
            Deposit Type :
          </label>
          <select
            id="records"
            name="records"
            defaultValue={"all"}
            className="ml-5 w-[18%] h-10  font-[500] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="all">All</option>
            <option value="bank_deposit">Bank Deposit</option>
            <option value="company_deposit">Company Deposit</option>
          </select>
          <label
            htmlFor="bank_name"
            className=" text-lg grid place-items-center font-[500] ml-4"
          >
            Bank Name:
          </label>
          <input
            type="text"
            name="bank_name"
            id="bank_name"
            value={""}
            className="w-[20%] h-10 rounded-lg border-[#d5d5d5] ml-5 border"
          />
          <label
            htmlFor="deposit_amount"
            className=" text-lg grid place-items-center ml-4 font-[500]"
          >
            Deposit Amount :
          </label>
          <input
            type="number"
            // onKeyDown={handleKeyDown}
            name="deposit_amount"
            id="deposit_amount"
            value={""}
            className="w-[20%] h-10 rounded-lg border-[#d5d5d5] ml-4 border"
          />
        </div>
        <div className="h-[35%] flex  items-center ">
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
              value={new Date().toISOString().split("T")[0]}
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
              value={new Date().toISOString().split("T")[0]}
              className="w-[35%] rounded-lg border border-[#d5d5d5] "
            />
          </div>
          <div className="w-[55%] flex ">
            <label
              htmlFor="deposit_no"
              className=" text-xl grid place-items-center font-[500]"
            >
              Deposit no :
            </label>
            <input
              type="number"
              // onKeyDown={handleKeyDown}
              name="deposit_no"
              id="deposit_no"
              value={""}
              className="w-[38%] h-10 rounded-lg border-[#d5d5d5] ml-2 border"
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
              className="ml-4 w-[7.5rem] h-10  font-[500] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center items-center h-[21%]">
          <CustomButton
            onClick={handleAddBtn}
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

      <div className=" bg-[#E9F2F2]  h-[45%] mt-4 rounded-lg flex flex-col px-2 pt-1 border-[#cdcdcd] border drop-shadow-lg">
        <div className="mt-1 border border-[#959595] min-h-[95%] max-h-[95%] w-full rounded-lg overflow-y-auto flex flex-col ">
          <div
            className={`min-h-12 statement bg-[#F3F9FB] border-b[1px] border border-t-[0px] border-l-[0px] border-r-[0px] border-[#9F9F9F]  flex`}
          >
            <p className="w-[4%] p-1 text-center border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-medium text-lg  ">
              Sr. No.
            </p>
            <p className="w-[7%] text-center border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-medium text-lg ">
              Deposit Type
            </p>
            <p className="w-[14%] text-center border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-medium text-lg ">
              Bank/Company Name
            </p>
            <p className="w-[10%] text-center border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-medium text-lg ">
              Deposit No
            </p>
            <p className="w-[14%] text-center border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-medium text-lg ">
              Invested Amount
            </p>
            <p className="w-[9%] text-center border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-medium text-lg ">
              Invested Date
            </p>
            <p className="w-[8%] text-center border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-medium text-lg ">
              Rate of Interest
            </p>
            <p className="w-[8%] text-center border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-medium text-lg ">
              Maturity Amount
            </p>
            <p className="w-[8%] text-center border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-medium text-lg ">
              Maturity Date
            </p>
            <p className="w-[8%] text-center border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-medium text-lg ">
              Remarks
            </p>
            <p className="w-[5%] text-center border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-medium text-lg ">
              Edit
            </p>
            <p className="w-[5%] text-center grid place-items-center font-semibold text-lg  ">
              Delete
            </p>
          </div>
          {arr2.map((e, i) => {
            return (
              <div
                className={`min-h-12 statement ${
                  i % 2 === 0 ? "bg-transparent" : "bg-[#F3F9FB]"
                } ${
                  arr2.length - 1 === i && arr2.length > 10
                    ? "border-b-[0px]"
                    : "border-b[1px]"
                } border border-t-[0px] border-l-[0px] border-r-[0px] border-[#9F9F9F] flex`}
                key={i}
              >
                <p className="w-[4%] border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px]  "></p>
                <p className="w-[7%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                <p className="w-[14%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                <p className="w-[10%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                <p className="w-[14%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                <p className="w-[9%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                <p className="w-[8%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                <p className="w-[8%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                <p className="w-[8%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                <p className="w-[8%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                <p className="w-[5%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                <p className="w-[5%]  "></p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default deposit;
