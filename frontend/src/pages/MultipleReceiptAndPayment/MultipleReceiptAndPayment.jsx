import React, { useRef, useState } from "react";
import CustomButton from "../../components/Button/CustomButton";

const MultipleReceipt = (props) => {
  const { page } = props;
  const myRef = useRef(null);
  const [expand, setExpand] = useState(false);
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
  return (
    <>
      <div className="flex flex-col bg-blue h-[40.3rem] px-2">
        <h2 className="text-2xl font-semibold text-center">{page}</h2>
        <div className="bg-[#E9F2F2] h-[10.5%] flex-col rounded-lg px-6 py-3 border-[#cdcdcd] border drop-shadow-lg mt-3">
          <div className="flex">
            <label
              htmlFor="cashorbank"
              className=" text-xl grid place-items-center  font-[500]"
            >
              Cash/Bank :
            </label>
            <select
              id="cashorbank"
              name="cashorbank"
              defaultValue={"select"}
              className="ml-2 w-[7rem] h-10  font-[500] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="select">Select</option>
              <option value="cash">Cash</option>
              <option value="bank">Bank</option>
            </select>
            <label
              htmlFor="account"
              className=" text-xl grid place-items-center ml-5 font-[500]"
            >
              Account :
            </label>
            <select
              id="account"
              name="account"
              defaultValue={"select"}
              className="ml-2 w-[9rem] h-10  font-[500] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="select">Select</option>
              <option value="axis">Axis Bank</option>
              <option value="tdcc">TDCC Bank</option>
            </select>

            <CustomButton
              type={"submit"}
              className={"ml-4"}
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
              {"View"}
            </CustomButton>
            <CustomButton
              type={"submit"}
              onClick={handleViewBtn}
              className={"ml-3"}
              style={{
                backgroundColor: "#004455",
                boxShadow: "2px 4px 4px 0px #00000040",
                border: "1px solid #8e8e8e",
                width: "9rem",
                fontWeight: "500",
                fontSize: "1.1rem",
                display: "grid",
                placeItems: "center",
                color: "#F2F2F2",
                height: "2.5rem",
                padding: "0px",
              }}
            >
              {"View Balance"}
            </CustomButton>
            <div className="flex items-center text-lg font-[500] ml-5">
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
        <div className="bg-[#E9F2F2] h-[85.5%] flex-col rounded-lg px-6 py-3 border-[#cdcdcd] border drop-shadow-lg mt-3">
          Table
        </div>
      </div>
    </>
  );
};

export default MultipleReceipt;
