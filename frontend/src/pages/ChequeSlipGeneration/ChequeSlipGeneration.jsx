import React, { useState } from "react";
import CustomButton from "../../components/Button/CustomButton";

const ChequeSlipGeneration = (props) => {
  const { page } = props;
  const [arr, setArr] = useState([]);
  const handleSearchBtn = () => {
    setArr([...arr, 1]);
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
  return (
    <>
      <div className="flex flex-col bg-blue h-[40rem] px-2">
        <h2 className="text-2xl font-semibold text-center mb-2">{page}</h2>
        <div className="bg-[#E9F2F2] h-[17%] flex-col rounded-lg px-6 py-3Z border-[#cdcdcd] border drop-shadow-lg">
          <div className="flex justify-between underline underline-offset-4 items-center font-semibold mt-2">
            SELECTION
          </div>
          <div className="flex mt-3">
            <label
              htmlFor="bank"
              className=" text-xl grid place-items-center font-[500]"
            >
              Bank :
            </label>
            <select
              id="bank"
              name="bank"
              defaultValue={"selectbank"}
              className="ml-2 w-[25rem] h-10  font-[500] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="selectbank">Select Bank</option>
              <option value="axis">Axis Bank</option>
              <option value="tdcc">TDCC Bank</option>
            </select>
            <label
              htmlFor="date"
              className="font-semibold text-xl grid place-items-center ml-12"
            >
              Date:
            </label>
            <input
              type="date"
              name="start_date"
              id="start_date"
              className="rounded-lg border border-[#d5d5d5] ml-4 w-[10rem]"
            />
            <label
              htmlFor="end_date"
              className="font-semibold text-xl grid place-items-center mx-4"
            >
              To
            </label>
            <input
              type="date"
              name="end_date"
              id="end_date"
              className="rounded-lg border border-[#d5d5d5] w-[10rem]"
            />
            <CustomButton
              type={"submit"}
              onClick={handleSearchBtn}
              className={"ml-8"}
              style={{
                backgroundColor: "#119F8E",
                boxShadow: "2px 4px 4px 0px #00000040",
                border: "1px solid #808080",
                width: "6rem",
                color: "#F2F2F2",
                fontWeight: "600",
                fontSize: "1.125rem",
                display: "grid",
                placeItems: "center",
              }}
            >
              {"Search"}
            </CustomButton>
          </div>
        </div>
        <div className=" bg-[#E9F2F2]  h-[55%] mt-3 rounded-lg flex flex-col px-2 pt-1 border-[#cdcdcd] border drop-shadow-lg">
          <div className="mt-1 border border-[#959595] min-h-[95%] max-h-[95%] w-full rounded-lg overflow-y-auto flex flex-col ">
            <div
              className={`min-h-12 statement bg-[#F3F9FB] border-b[1px] border border-t-[0px] border-l-[0px] border-r-[0px] border-[#9F9F9F]  flex`}
            >
              <p className="w-[8%] border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg  ">
                Sr. No.
              </p>
              <p className="w-[8%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg ">
                Doc. No.
              </p>
              <p className="w-[9%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg ">
                Date
              </p>
              <p className="w-[25%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg ">
                Name
              </p>
              <p className="w-[16%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg ">
                Amount
              </p>
              <p className="w-[20%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg ">
                CHEQUE NO/DATE
              </p>
              <p className="w-[14%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] grid place-items-center font-semibold text-lg ">
                Type
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
                  <p className="w-[8%] border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px]  "></p>
                  <p className="w-[8%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                  <p className="w-[9%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                  <p className="w-[25%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                  <p className="w-[16%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                  <p className="w-[20%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                  <p className="w-[14%]  border border-t-[0px] border-[#9F9F9F] border-l-[0px] border-b-[0px] border-r-[1px] "></p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-[#E9F2F2]  h-[21%] mt-3 rounded-lg flex flex-col px-2 pt-1 border-[#cdcdcd] border drop-shadow-lg">
          <div className="flex mt-2 pl-4">
            <label
              htmlFor="branch"
              className="font-semibold text-xl grid place-items-center"
            >
              Branch :
            </label>
            <input
              type="text"
              name="branch"
              id="branch"
              className="w-[20rem] h-10 rounded-lg border-[#d5d5d5] ml-3 border"
            />

            <label
              htmlFor="accountno"
              className="font-semibold text-xl grid place-items-center ml-8"
            >
              Account No:
            </label>
            <input
              type="number"
              name="accountno"
              id="accountno"
              onKeyDown={handleKeyDown}
              onWheel={(e) => handleWheel(e, { passive: false })}
              className="w-[27rem] h-10 rounded-lg border-[#d5d5d5] ml-3 border"
            />
          </div>
          <div className="flex mt-4 pl-4 ">
            <CustomButton
              type={"submit"}
              style={{
                backgroundColor: "#A9CEED",
                boxShadow: "2px 4px 4px 0px #00000040",
                border: "1px solid #8e8e8e",
                width: "6.5rem",
                fontWeight: "500",
                fontSize: "1.1rem",
                display: "grid",
                placeItems: "center",
                color: "#2A353F",
                height: "2.5rem",
                padding: "0px",
              }}
            >
              {"Select All"}
            </CustomButton>
            <CustomButton
              type={"submit"}
              className={"ml-5"}
              style={{
                backgroundColor: "#045E92",
                boxShadow: "2px 4px 4px 0px #00000040",
                border: "1px solid #8e8e8e",
                width: "7.5rem",
                fontWeight: "500",
                fontSize: "1.1rem",
                display: "grid",
                placeItems: "center",
                color: "#F2F2F2",
                height: "2.5rem",
                padding: "0px",
              }}
            >
              {"Select None"}
            </CustomButton>
            <CustomButton
              type={"submit"}
              className={"ml-5"}
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
                height: "2.5rem",
                padding: "0px",
              }}
            >
              {"Generate"}
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChequeSlipGeneration;
