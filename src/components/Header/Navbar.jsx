import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import CodeIcon from "../../images/logo/logo.png";
import { CiUser } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { useCart } from "react-use-cart";
import { IoMdHeartEmpty } from "react-icons/io";

function NavBar() {
  const [click, setClick] = useState(false);
  const { totalUniqueItems } = useCart();
  const [showLoginRegister, setShowLoginRegister] = useState(false);
  const handleClick = () => setClick(!click);

  const activeUser = () => {
    const storedData = JSON.parse(localStorage.getItem("userData")) || [];
    const foundUser = storedData.find((user) => user.userData.isActive === 1);

    if (foundUser) {
      return foundUser;
    } else {
      return null;
    }
  };

  const activeUserData = activeUser();
  const handleLogout = () => {
  
    const confirmation = window.confirm("Do you want to Log out??");
  if (confirmation) {
    const storedData = JSON.parse(localStorage.getItem("userData")) || [];
    const updatedData = storedData.map((user) => {
      if (user.userData.isActive === 1) {
        return {
          ...user,
          userData: {
            ...user.userData,
            isActive: 0,
          },
        };
      }
      return user;
    });

    localStorage.setItem("userData", JSON.stringify(updatedData));
    window.location.href = "/";
  } else {
   return
  }

  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink  to="/" className="nav-logo">
            <img src={CodeIcon} alt="Logo" />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/about"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/blog"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/shop"
                className="nav-links"
                onClick={handleClick}
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/contact"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <ul
            className={
              click ? "nav-menu active nav-menu2" : "nav-menu2 nav-menu"
            }
          >
            <li className="icon icon1">
              <Link to="/wishlist">
                <IoMdHeartEmpty />
              </Link>
            </li>
            <li className="icon1 icon">
              <CiUser />
              {activeUserData ? (
                <ul className="list-account">
                  <li>
                    <Link to="/myaccount">Profile</Link>
                  </li>
                  <li
                    onClick={handleLogout}
                    onMouseEnter={() => setShowLoginRegister(false)}
                    onMouseLeave={() => setShowLoginRegister(true)}
                  >
                    Log Out
                  </li>
                </ul>
              ) : (
                <ul className="list-account">
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="icon2 icon">
              <Link to="/basket">
                <CiShoppingBasket className="card-basket" />
                <span className="count-cart">{totalUniqueItems}</span>
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
<HamburgetMenuClose />

              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />{" "}

              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
