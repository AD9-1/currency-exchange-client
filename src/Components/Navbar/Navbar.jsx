import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/SafeCurrency-logo (1).png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <NavLink to="/">
          {" "}
          <img src={logo} />
        </NavLink>
      </div>
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
