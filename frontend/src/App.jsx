import './App.css'
import Ledger from './pages/Ledger/Ledger'
import {Route, Routes, useLocation,redirect,useNavigate} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SideMenu from './layout/Side-Menu/SideMenu'
import Dashboard from "./pages/Dashboard/Dashboard"
import Login from "./pages/Login/Login"
import { useState,useEffect } from 'react';
import axios from 'axios'

// import { Helmet,HelmetProvider } from 'react-helmet-async';
function App() {
  const defaultPath = '/api/v1'
  const navigate = useNavigate()
  const [user,setUser] = useState({})
  const[error,setError] = useState('')

const location = useLocation()
  const routes = [
    { path: '/', component: Dashboard,exact:true },
    { path: '/ledger', component: Ledger,exact:true, },
    
  ];
  const isLoginPage = location.pathname==='/api/v1/auth/login'
  axios.defaults.withCredentials = true//The most important line for cookies

  const fetchData = async()=>{
    try {
      const  res = await axios.post(`http://127.0.0.1:5003/api/v1/auth/islogin`)
      const {data} = res
      if(!data.success){
        if(!isLoginPage){
          navigate('/api/v1/auth/login')
        }
      }else{
        console.log(data)
        if(data.user){
          setUser(data.user)
        }else{
          console.log('User nhi hai')
        }
      }
      return res.data
      // return parsedData
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData().then(res=>{
      if(res.success){
document.title = res.user.username      
      }
    })    
  }, []);
  return (
    <>
  <Navbar user={user}/>
      <div className="Container ">
{isLoginPage ? null : <SideMenu />}
<section className={`${isLoginPage?'w-full':'w-[77.77%]'} mt-9px`}>

        <Routes>
      {routes.map((route, index) => (
        <Route
        key={index}
        path={index===0?route.path:defaultPath+route.path}
        element={<route.component {...route.props} user={user}/>}
        exact={route.exact}
        />
      ))}
   <Route path='/api/v1/auth/login' element={<Login/>} exact={true} />
    </Routes>      
      </section>
   </div> 
   </>
  )
}

export default App
