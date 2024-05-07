import React from "react";
import CustomButton from "../../components/Button/CustomButton";

const OpeningBalance = (props) => {
  const { page } = props;
  return (
    <>
      <div className="flex flex-col bg-blue h-[40.3rem] px-2">
        <h2 className="text-2xl font-semibold text-center">{page}</h2>
        <div className="bg-[#E9F2F2] h-[29%] flex-col rounded-lg px-6 py-3 border-[#cdcdcd] border drop-shadow-lg mt-3">
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
              htmlFor="date"
              className=" text-lg grid place-items-center font-[600] ml-10"
            >
              As on Date :
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-[16.2%] ml-3 rounded-lg border border-[#d5d5d5] "
            />
            <label
              htmlFor="checkbox"
              className=" text-lg grid place-items-center font-[600] ml-10"
            >
              Is Date Due :
            </label>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="  h-5 w-5 ml-2 mt-[0.75rem] rounded border border-[#d5d5d5] "
            />
          </div>

          <div className="flex mt-4">
            <label
              htmlFor="type"
              className=" text-xl grid place-items-center font-[500]"
            >
              Type :
            </label>
            <select
              id="type"
              name="type"
              defaultValue={"select"}
              className="ml-4 w-[22.6rem] h-10  font-[500] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="select">Select</option>
              <option value="Personal">Personal</option>
              <option value="General">General</option>
            </select>
            <label
              htmlFor="incomeexpenditure"
              className=" text-xl grid place-items-center font-[500] ml-10"
            >
              Income Expenditure :
            </label>
            <select
              id="incomeexpenditure"
              name="incomeexpenditure"
              defaultValue={"selectaccount"}
              className="ml-4 w-[22rem] h-10  font-[500] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="selectaccount">Select Account</option>
              <option value="Personal">Personal</option>
              <option value="General">General</option>
            </select>
          </div>

          <div className="flex justify-center mt-4">
            <CustomButton
              type={"submit"}
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
              {"Search"}
            </CustomButton>
            <CustomButton
              type={"submit"}
              className={"ml-5"}
              style={{
                backgroundColor: "#004455",
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
              {"Save"}
            </CustomButton>
          </div>
        </div>
        <div className="bg-[#E9F2F2] h-[60%] flex-col rounded-lg px-6 py-3 border-[#cdcdcd] border drop-shadow-lg mt-3">
          Table
        </div>
      </div>
    </>
  );
};

export default OpeningBalance;
