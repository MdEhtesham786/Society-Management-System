import React from "react";
import "./Navbar.css";
import logo from "../../assets/icons/logo.svg";
import logoText from "../../assets/icons/logo-text.svg";
import hamburgerIcon from "../../assets/icons/hamburger.svg";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = (props) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/api/v1/auth/login";
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const confirmation = confirm("Are you sure you want to logout?");
      if (confirmation) {
        const res = await axios.post(
          "http://127.0.0.1:5003/api/v1/auth/logout",
          {
            withCredentials: true,
            credentials: "include",
          }
        );
        const { data } = res;
        if (data.success) {
          navigate("/api/v1/auth/login");
        } else {
          console.log(data.message);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="navbar Container">
      <a href="/" className="logo-wrapper cursor-pointer">
        <div className="logo-icon">
          <img src={logo} alt="logo-icon" />
        </div>
        <div className="logo-text">
          <img src={logoText} alt="logo-text" />
        </div>
      </a>
      <div className=" text-2xl font-bold">
        {props.user.username && "Welcome " + props.user.username + "!"}
      </div>
      {isLoginPage ? null : (
        <button onClick={handleLogout} className="bg-gray-300 h-8 w-20">
          Log Out
        </button>
      )}

      {/* <div className="hamburger">
                <img src={hamburgerIcon} alt="hamburger" />
            </div> */}
    </nav>
  );
};
Navbar.propTypes = {
  user: PropTypes.object,
};
export default Navbar;
