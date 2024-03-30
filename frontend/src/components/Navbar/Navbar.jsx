import React from "react";
import './Navbar.css'
import logo from '../../assets/icons/logo.svg'
import logoText from '../../assets/icons/logo-text.svg'
import hamburgerIcon from '../../assets/icons/hamburger.svg'


const Navbar = () => {
    return (
        <nav className="navbar Container">
            <div className="logo-wrapper">
                <div className="logo-icon">
                    <img src={logo} alt="logo-icon" />
                </div>
                <div className="logo-text">
                    <img src={logoText} alt="logo-text" />
                </div>
            </div>
            <div className="hamburger">
                <img src={hamburgerIcon} alt="hamburger" />
            </div>
        </nav>
    )
}
export default Navbar