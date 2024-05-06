import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SideMenu from "./layout/Side-Menu/SideMenu";
import Login from "./pages/Login/Login";
import { useState, useEffect } from "react";
import axios from "axios";
import routes from "./routes";
// import { Helmet,HelmetProvider } from 'react-helmet-async';
function App() {
  const defaultPath = "/api/v1";
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const location = useLocation();

 

  const isLoginPage = location.pathname === "/api/v1/auth/login";
  axios.defaults.withCredentials = true; //The most important line for cookies

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
          setUser(data.user);
        } else {
          console.log("User nhi hai");
        }
      }
      return res.data;
      // return parsedData
    } catch (err) {
      // console.log("DATA",data)
      console.log(err.message);
      console.log(err);
      navigate("/api/v1/auth/login");
    }
  };
  useEffect(() => {
    fetchData().then((res) => {
      if (res.success) {
        document.title = res.user.username;
      }
    });

  },[]);
 

  //Hardest code
  // const [formData, setFormData] = useState({
  //   name:'',
  //   age:0,
  //   class:'5b',
  //   isjoined:true
  // })

  // const handleInputChange = (e) => {
  //   const { name, value, type } = e.target;
  // setFormData({
  //   // ...formData,
  //   [name]: e.target[type === "checkbox" ? "checked" : "value"]
  // })

  // }
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
