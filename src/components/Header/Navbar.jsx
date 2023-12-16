import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import {  HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import CodeIcon from '../../images/logo/logo.png'
import { CiUser } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={CodeIcon} alt="Logo" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/shop"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <ul className={click ? "nav-menu active nav-menu2" : "nav-menu2 nav-menu"}>
            <li className="icon1 icon">
            <CiUser/>
            
            <ul className="list-account"> 
              <li>Login</li>
              <li>Register</li>
              <li>Log Out</li>
            </ul>
            </li>
            <li className="icon2 icon">
         <CiShoppingBasket/>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;