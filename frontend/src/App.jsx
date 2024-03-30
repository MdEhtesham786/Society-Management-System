import './App.css'
import Ledger from './pages/Ledger/Ledger'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SideMenu from './layout/Side-Menu/SideMenu'
import Dashboard from "./pages/Dashboard/Dashboard"
// import { Helmet,HelmetProvider } from 'react-helmet-async';

function App() {
  const routes = [
    { path: '/', component: Dashboard,exact:true },
    { path: '/ledger', component: Ledger,exact:true },
  ];
  return (
    <>
  <Navbar/>
      <div className="Container ledger">
<SideMenu/>
        <Routes>
      {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
            exact={route.exact} 
          />
        ))}
    </Routes>      
   </div> 
   </>
  )
}

export default App
