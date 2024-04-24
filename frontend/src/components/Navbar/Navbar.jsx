import React from "react";
import './Navbar.css'
import logo from '../../assets/icons/logo.svg'
import logoText from '../../assets/icons/logo-text.svg'
import hamburgerIcon from '../../assets/icons/hamburger.svg'
import PropTypes from 'prop-types';


const Navbar = (props) => {
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
            <div className="hahaha text-xl font-bold">
                
 Welcome {props.user&&props.user} !
            </div>
            <div className="hamburger">
                <img src={hamburgerIcon} alt="hamburger" />
            </div>
        </nav>
    )
}
Navbar.propTypes={
    user:PropTypes.string
}
export default Navbar