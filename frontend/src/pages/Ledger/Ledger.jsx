
import CustomButton from '../../components/Button/CustomButton'
import "./Ledger.css"
import React, { useRef, useState } from 'react';
const Ledger = (props)=>{
    const myRef = useRef(null);
    const handleKeyDown = (e)=>{
        if (e.keyCode === 38) {
            console.log('up');
            e.preventDefault();
        } else if (e.keyCode === 40) {
            console.log('down');
            e.preventDefault();
        }
    }
    const [arr,setArr]=useState([])
    const handleViewBtn = ()=>{
        setArr([...arr,1])
    }
    const handleDownloadBtn = ()=>{
        const newArr = [...arr]
        newArr.pop()
        setArr(newArr)
    }
    return(
        <>
        <div className='flex flex-col bg-blue h-[100%] px-2'>
        <h2 className='text-2xl font-semibold text-center'>Ledger Report</h2>
        <div className='bg-[#E9F2F2] h-[35%] my-2 rounded-lg flex flex-col px-10 py-3 border-[#cdcdcd] border drop-shadow-lg'>
            <div className="flex justify-between items-center h-[33%]">
                <div className='flex'>
                <label htmlFor="type" className='font-semibold text-xl grid place-items-center'>Type:</label>
                <input type="text" name="type" id="type" className='w-[17rem] h-10 rounded-lg border-[#d5d5d5] ml-3 border' />
                </div>
                <div className='flex'>
                <label htmlFor="account" className='font-semibold text-xl grid place-items-center'>Account:</label>
                <input type="number" ref={myRef} name="account" id="account" onKeyDown={handleKeyDown} className='w-[27rem] h-10 rounded-lg border-[#d5d5d5] ml-3 border' />
                </div>
            </div>
            <div className="h-[33%] flex items-center ">
                <div className='flex w-[50%]'>
                <label htmlFor="date" className='font-semibold text-xl grid place-items-center'>Date:</label>
                <input type="text" name="start_date" id="start_date" className='w-[10rem] h-10 rounded-lg border-[#d5d5d5] ml-3 border' />
                <label htmlFor="end_date" className='font-semibold text-xl grid place-items-center ml-4'>To</label>
                <input type="text" name="end_date" id="end_date" className='w-[10rem] h-10 rounded-lg border-[#d5d5d5] ml-3 border' />
                </div>
                <div className='w-[50%] flex justify-end'>
                <CustomButton onClick={handleViewBtn}
            type={"submit"}
            style={{
                backgroundColor: "#A9CEED",
                boxShadow: "2px 4px 4px 0px #00000040",
                border: "1px solid #808080",
                width:'8rem',
                color:'#2A353F',
                fontWeight:'600',
                fontSize:'1.125rem',
                display:'grid',
                placeItems:'center'
            } }
            >
            {"View"}
          </CustomButton>
              </div>
            </div>
            <div className="h-[33%] flex items-center">
                <div className='w-full flex justify-end'>


  <select id="countries" className="w-[8rem]  font-[600] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option defaultValue='pdf' value='pdf' >PDF</option>
    <option value="excel">EXCEL</option>
    <option value="excel_r">EXCEL(R)</option> 
  </select> 


            <CustomButton onClick={handleDownloadBtn}
            type={"submit"}
            style={{
                backgroundColor: "#045E92",
                boxShadow: "2px 4px 4px 0px #00000040",
                border: "1px solid #000000",
                width:'11rem',
                fontWeight:'600',
                fontSize:'1.125rem',
                display:'grid',
                placeItems:'center',
                color:'#F2F2F2',
                marginLeft:'1rem'
            } }
            >
            {"Download"}
          </CustomButton>
              </div>
            </div>
        </div>
        <div className='bg-[#E9F2F2] h-[55%] my-2 rounded-lg flex flex-col px-2 pt-1 border-[#cdcdcd] border drop-shadow-lg'>
            <h3 className='text-xl font-semibold text-center'>
                STATEMENT
            </h3>
            <div className='border border-[#959595] min-h-[90%] w-full rounded-lg overflow-y-auto flex flex-col'>
                {arr.map((e,i)=>{
                    return(
                        <div className={`min-h-12 statement ${i%2===0?'bg-[#F3F9FB]':'bg-transparent'} ${arr.length-1===i&&arr.length>6?'border-b-[0px]':'border-b[1px]'} border border-t-[0px] border-l-[0px] border-r-[0px] border-[#9F9F9F]  flex`} key={i}>
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
                    )
                })}


            </div>
        </div>

        </div>
        </>
    )
}
export default Ledger
