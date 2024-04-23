import './App.css'
import Ledger from './pages/Ledger/Ledger'
import {Route, Routes, useLocation} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SideMenu from './layout/Side-Menu/SideMenu'
import Dashboard from "./pages/Dashboard/Dashboard"
import Login from "./pages/Login/Login"
// import { Helmet,HelmetProvider } from 'react-helmet-async';

function App() {
  const defaultPath = '/api/v1'
const location = useLocation()
  const routes = [
    { path: '/', component: Dashboard,exact:true },
  
    { path: '/ledger', component: Ledger,exact:true },
  ];
  const isLoginPage = location.pathname==='/api/v1/auth/login'
  return (
    <>
  <Navbar/>
      <div className="Container ledger">
{isLoginPage ? null : <SideMenu />}
        <Routes>
      {routes.map((route, index) => (
          <Route
            key={index}
            path={defaultPath+route.path}
            element={<route.component />}
            exact={route.exact} 
          />
        ))}
   <Route path='/api/v1/auth/login' element={<Login/>} exact={true} />
    </Routes>      
   </div> 
   </>
  )
}

export default App
