import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <p> CurrencyEx</p>
      <ul className="navbar__unorderedlist">
        <NavLink to="/" className="navlink">
          <li> Converter</li>
        </NavLink>
        <NavLink to="/register" className="navlink">
          <li>Register</li>
        </NavLink>
        <NavLink to="/signin" className="navlink">
          <li>Sign-in</li>
        </NavLink>

        <NavLink to="/logout" className="navlink">
          <li>Logout</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
