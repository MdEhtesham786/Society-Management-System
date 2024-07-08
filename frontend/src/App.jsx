import "./App.css";
import { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SideMenu from "./layout/Side-Menu/SideMenu";
import Login from "./pages/Login/Login";
import { useEffect } from "react";
// import axios from "axios";
import axios from "./utils/axiosConfig.js" 
import routes from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn, setUser } from "./reducer/authSlice.js";
import Spinner from "./components/Loader/Spinner.jsx";
import { setAdminSettings, setPrimaryColor, setSecondaryColor } from "./reducer/adminSettingsSlice.js";
// import { Helmet,HelmetProvider } from 'react-helmet-async';
function App() {

  const defaultPath = "/api/v1";
  axios.defaults.withCredentials = true; //The most important line for cookies
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoginPage = location.pathname === "/api/v1/auth/login";
  const [loading, setLoading] = useState(true); // State to track loading status
  const [authChecked, setAuthChecked] = useState(false); // State to track if authentication check completed
  const [memberList, setMemberList] = useState([])
  const adminSettings= useSelector((state)=>state.adminSettings)
  //Redux State
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const fetchData = async () => {
    try {

      const res = await axios.post(`/auth/islogin`);
      const { data } = res;
      if (!data.success) {
        if (!isLoginPage) {
          navigate("/api/v1/auth/login");
        }
      } else {
        if (data.user) {
          dispatch(setIsLoggedIn(data.success));
          dispatch(setUser(data.user));
          if (location.pathname === "/api/v1/auth/login") {
            navigate("/");
          }
        } else {
          navigate("/api/v1/auth/login");
        }
      }
      return res.data;
    } catch (err) {
      console.log(err);
      navigate("/api/v1/auth/login");
    } finally {
      setLoading(false);
      setAuthChecked(true);

    }
  };
  const fetchMemberList = async () => {
    try {
      const res = await axios.get(`/memberList`);
      const { data } = res
      if (data.success) {
        setMemberList(data.memberList)
        console.log(memberList)
      } else {
        console.log(data)
      }
    } catch (err) {
      console.log(err)

    }
  }
  const fetchAdminSettings = async()=>{
    try {
      const res = await axios.get(`/admin/settings`);
      const { data } = res
      if (data.success) {
        dispatch(setPrimaryColor(data.settings.primaryColor))
        dispatch(setSecondaryColor(data.settings.secondaryColor))
      } else {
        console.log(data)
      }
    } catch (err) {
      console.log(err)

    }
  }
  //USE EFFECT
  useEffect(() => {
    fetchData()
    fetchMemberList()
  }, []);
  useEffect(()=>{
    fetchAdminSettings()
  },[location.pathname])
  useEffect(() => {

    if ((authChecked && !isLoggedIn) || !user) {
      if (location.pathname !== "/api/v1/auth/login") {
        navigate("/api/v1/auth/login");
      }
    }
  }, [location.pathname, isLoggedIn, user, authChecked, navigate]);
  return (
    <>

      <Navbar user={user} adminSettings={adminSettings} />
      <div className="Container" style={{backgroundColor:adminSettings.primaryColor}}>
        {isLoginPage ? null : <SideMenu />}
        <section
          className={`${
            isLoginPage ? "w-full" : "w-[78.77%]"
          } mt-3 h-[40.37rem] max-h-[40.37rem] overflow-y-auto`}
        >
          {loading ? (
            <Spinner />
          ) : (
            <Routes>
              {routes.map((route, index) => ( 
                <Route
                  key={index}
                  path={index === 0 ? route.path : defaultPath + route.path}
                  element={<route.component {...route.props} memberList={memberList} user={user} adminSettings={adminSettings} />}
                  exact={route.exact}
                />
              ))}
              <Route
                path="/api/v1/auth/login"
                element={<Login />}
                exact={true}
              />
            </Routes>
          )}
        </section>
      </div>

    </>
  );
}

export default App;
// useEffect->fetchData->dispatch(...data)->variable user store using useSelector->passes as a props in navbar component.
