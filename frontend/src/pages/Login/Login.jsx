import { useState, } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { setIsLoggedIn,setUser } from "../../reducer/authSlice";
import { useDispatch } from "react-redux";
export default function Example() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  // const [remember,setRemember] = useState(false)
  const[error,setError] = useState('')
  const handleEmailInput = (e)=>{
setEmail(e.target.value)

  }
  const handlePasswordInput = (e)=>{
    setPassword(e.target.value)

  }
  const handleLoginSubmit =async ()=>{
    try {
      // e.preventDefault()
      const res = await axios.post('http://127.0.0.1:5003/api/v1/auth/login',{
        email,
        password
      },
      {
        withCredentials: true,
        credentials:'include'
      })
// alert('Please fill out all required fields.');
const {data} = res
if(data.success){
  if(data.user){
    
    dispatch(setIsLoggedIn(true))
    dispatch(setUser(data.user))
navigate('/ ')
  }
}else{
  setError(res.data.message)
  setEmail('')
  setPassword('')
}

    } catch (err) {
      console.log(err)
      setError(err.message)
      
    }


  }
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className="flex">

              <div className=" w-[50%] h-[35rem] px-6 py-12   lg:px-8  ">
Image
          </div>
        <div className="flex min-h-full w-[50%] h-[35rem]  flex-col justify-center px-6  py-12 lg:px-8 ">
    
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <p className="mx-auto mt-3 text-red-500 h-6  font-bold">{error&&error}</p>
  
          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input 
                  value={email}
                  onChange={handleEmailInput}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                  value={password}
                  onChange={handlePasswordInput}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  onClick={handleLoginSubmit}
                  className={`flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${email.length>4&&password.length>4?'hover:bg-indigo-600 bg-indigo-700':'bg-indigo-400 cursor-not-allowed'} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                  disabled={email.length<4||password.length<4}
                >
                  Sign in
                </button>
              </div>
            </div>
  
            {/* <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p> */}
          </div>
        </div>
        </div>

      </>
    )
  }
  