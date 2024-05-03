import "./App.css";
import BillGeneration from "./pages/Bill Generation/Bill-Generation";
import Ledger from "./pages/Ledger/Ledger.jsx";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SideMenu from "./layout/Side-Menu/SideMenu";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import { useState, useEffect } from "react";
import axios from "axios";

// import { Helmet,HelmetProvider } from 'react-helmet-async';
function App() {
  const defaultPath = "/api/v1";
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const location = useLocation();

  const vendorManagement = [
    {
      path: "/vendormanagement/addvendoraccount",
      component: Dashboard,
      exact: true,
    },
    {
      path: "/vendormanagement/updateamcandworkorder",
      component: Dashboard,
      exact: true,
    },
    {
      path: "/vendormanagement/addvendorbill",
      component: Dashboard,
      exact: true,
    },
    { path: "/vendormanagement/vendorlist", component: Dashboard, exact: true },
  ];

  const registers = [
    { path: "/registers/jform", component: Dashboard, exact: true },
    { path: "/registers/iform", component: Dashboard, exact: true },
    { path: "/registers/shares", component: Dashboard, exact: true },
    { path: "/registers/nomination", component: Dashboard, exact: true },
    { path: "/registers/deposit", component: Dashboard, exact: true },
    { path: "/registers/insurance", component: Dashboard, exact: true },
    { path: "/registers/noticeboard", component: Dashboard, exact: true },
    { path: "/registers/pollingbooth", component: Dashboard, exact: true },
    { path: "/registers/documentissue", component: Dashboard, exact: true },
    { path: "/registers/documentsissued", component: Dashboard, exact: true },
    { path: "/registers/documentupload", component: Dashboard, exact: true },
    { path: "/registers/loanregister", component: Dashboard, exact: true },
    { path: "/registers/tenantregister", component: Dashboard, exact: true },
  ];

  const masters = [
    { path: "/masters/generalaccount", component: Dashboard, exact: true },
    { path: "/masters/accountcategory", component: Dashboard, exact: true },
    { path: "/masters/personalaccount", component: Dashboard, exact: true },
  ];

  const transactions = [
    {
      path: "/transaction/billgeneration",
      component: BillGeneration,
      exact: true,
    },
    { path: "/transaction/memberreceipt", component: Dashboard, exact: true },
    { path: "/transaction/bankreceipt", component: Dashboard, exact: true },
    { path: "/transaction/cashreceipt", component: Dashboard, exact: true },
    {
      path: "/transaction/supplementaryreceipt",
      component: Dashboard,
      exact: true,
    },
    { path: "/transaction/bankpayment", component: Dashboard, exact: true },
    { path: "/transaction/cashpayment", component: Dashboard, exact: true },
    {
      path: "/transaction/bankreconcillation",
      component: Dashboard,
      exact: true,
    },
    { path: "/transaction/debitnote", component: Dashboard, exact: true },
    { path: "/transaction/creditnote", component: Dashboard, exact: true },
    { path: "/transaction/journalvoucher", component: Dashboard, exact: true },
    { path: "/transaction/closingjv", component: Dashboard, exact: true },
    { path: "/transaction/openingbalance", component: Dashboard, exact: true },
    { path: "/transaction/multiplereceipt", component: Dashboard, exact: true },
    { path: "/transaction/multiplepayment", component: Dashboard, exact: true },
    { path: "/transaction/ledgeredit", component: Dashboard, exact: true },
    {
      path: "/transaction/chequeslipgeneraton",
      component: Dashboard,
      exact: true,
    },
  ];

  const setting = [
    { path: "/setting/billsetting", component: Dashboard, exact: true },
    { path: "/setting/billamountsetting", component: Dashboard, exact: true },
    { path: "/setting/paymentsetting", component: Dashboard, exact: true },
    { path: "/setting/emailsetting", component: Dashboard, exact: true },
    { path: "/setting/templatesetting", component: Dashboard, exact: true },
    { path: "/setting/reportsetting", component: Dashboard, exact: true },
    { path: "/setting/widgetsetting", component: Dashboard, exact: true },
  ];

  const print = [
    { path: "/print/printbillwithreceipt", component: Dashboard, exact: true },
    { path: "/print/printbankreceipt", component: Dashboard, exact: true },
    { path: "/print/printcashreceipt", component: Dashboard, exact: true },
    { path: "/print/printbankpayment", component: Dashboard, exact: true },
    { path: "/print/printcashpayment", component: Dashboard, exact: true },
    { path: "/print/printdebitnote", component: Dashboard, exact: true },
    { path: "/print/printcreditnote", component: Dashboard, exact: true },
    { path: "/print/printjournalvoucher", component: Dashboard, exact: true },
    { path: "/print/printenroachment", component: Dashboard, exact: true },
    { path: "/print/printbillonly", component: Dashboard, exact: true },
    { path: "/print/printbillmonthbreakup", component: Dashboard, exact: true },
  ];

  const routes = [
    { path: "/", component: Dashboard, exact: true },
    // { path: "/bill-generation", component: BillGeneration, exact: true },
    { path: "/payNow", component: Dashboard, exact: true },
    { path: "/ledger", component: Ledger, exact: true },
    { path: "/outstandingreport", component: Dashboard, exact: true },
    { path: "/complaint", component: Dashboard, exact: true },
    { path: "/ledger", component: Dashboard, exact: true },
    { path: "/sendnotification", component: Dashboard, exact: true },
    { path: "/reports", component: Dashboard, exact: true },
    { path: "/quickreports", component: Dashboard, exact: true },

    ...vendorManagement,

    { path: "/quickreports", component: Dashboard, exact: true },

    ...registers,

    { path: "/memberlist", component: Dashboard, exact: true },

    ...masters,
    ...transactions,
    ...setting,
    ...print,
  ];

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
  }, []);

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
      <div className="Container ">
        {isLoginPage ? null : <SideMenu />}
        <section className={`${isLoginPage ? "w-full" : "w-[77.77%]"} mt-9`}>
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
