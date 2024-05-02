import "./Menu.css"
import MenuData from "./MenuData"
import { useEffect } from "react";
import {
    Collapse,
    initTWE,
  } from "tw-elements";
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
const Menu = (props)=>{
    useEffect(() => {
        // Initialize tw-elements
        initTWE({ Collapse });
        // initTWE();
        console.log('Successfully applied')
      }, []);
    // MenuData.forEach((data)=>{
    //     console.log(data)
    // })s
const {data,unique} = props
return(
    <>
    {data.subItem?
        <li key={unique}
        className="rounded-t-lg   dark:border-neutral-600 dark:bg-body-dark ">
        <h2 className="mb-0 flex " id="headingOne5">
        <div  className="flex items-center  px-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <div>

         <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
           <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
           <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
         </svg>
          </div>
         <button className="ms-3 px-0 group relative  flex justify-between w-full  rounded-t-lg border-0 bg-transparent  py-2 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white   dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
          type="button"
          data-twe-collapse-init
          data-twe-collapse-collapsed
          data-twe-target={`#collapse${unique}${data.subItem.length}`}
          aria-expanded="false"
          aria-controls={`collapse${unique}${data.subItem.length}`}
         >{data.title}
             <span
              className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
         </button>
       </div>

        </h2>
        <div className="rounded-lg overflow-hidden">

        {data.subItem.map((item,i)=>{
                  return(  <Link key={i} className="" to={item.path}><div 
                    id={`collapse${unique}${data.subItem.length}`}
                    className="hover:bg-[#b9c8d3] !visible hidden bg-[#c5d5e1] "
                    data-twe-collapse-item
                    aria-labelledby="headingOne5">
                    <div className="px-5 py-4">
                      {item.title}
                    </div>
                   </div></Link>
                   )
        })}
        </div>

      </li>: <li key={unique}>
       <Link to={data.path} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
         <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
           <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
           <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
         </svg>
         <span className="ms-3">{data.title}</span>
       </Link>
     </li>}

</>

)
}
Menu.propTypes = {
    data:PropTypes.object

}
export default Menu