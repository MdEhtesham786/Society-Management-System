import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SideMenu from "./layout/Side-Menu/SideMenu";
import Login from "./pages/Login/Login";
import { useEffect } from "react";
import axios from "axios";
import routes from "./routes";
import {useDispatch,useSelector} from "react-redux"
import {isLogin} from "./reducer/userReducer"
// import { Helmet,HelmetProvider } from 'react-helmet-async';
function App() {
  const defaultPath = "/api/v1";
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === "/api/v1/auth/login";
  axios.defaults.withCredentials = true; //The most important line for cookies
  const dispatch = useDispatch()

  // const [loggedInUser,setLoggedInUser] = useState({})

  const fetchData = async () => {
    try {
      const res = await axios.post(`http://127.0.0.1:5003/api/v1/auth/islogin`);
      const { data } = res;
      if (!data.success) {
        if (!isLoginPage) {
          navigate("/api/v1/auth/login");
        }
      } else {
        if (data.user) {
  dispatch(isLogin({...data}))
          if(location.pathname === '/api/v1/auth/login'){
navigate('/')
          }
        } else {
navigate('/api/v1/auth/login')
        }
      }
      return res.data;
    } catch (err) {
      console.log(err);
      navigate("/api/v1/auth/login");
    }
  };
  useEffect(() => {
    fetchData()
  },[]);
const user = useSelector(state=>state.loggedInUser.user)
  
  return (
    <>
      <Navbar user={user} />
      <div className="Container">
        {isLoginPage ? null : <SideMenu />}
        <section className={`${isLoginPage ? "w-full" : "w-[78.77%]"} mt-3 h-[40.37rem] max-h-[40.37rem] overflow-y-auto`}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={index === 0 ? route.path : defaultPath + route.path}
                element={<route.component {...route.props} user={user} />}
                exact={route.exact}
              />
            ))}
            <Route path="/api/v1/auth/login" element={<Login />} exact={true} />
          </Routes>
        </section>
      </div>
    </>
  );
}

export default App;
// useEffect->fetchData->dispatch(...data)->variable user store using useSelector->passes as a props in navbar component.