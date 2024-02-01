import React from "react";
import "./Logout.scss";
import { NavLink } from "react-router-dom";
const Logout = () => {
  const handleClick = () => {
    sessionStorage.removeItem("jwtToken");
  };
  return (
    <div className="container">
      <p>Are You Sure want to log out?</p>
      <div className="container__button">
        <NavLink to="/">
          <button type="submit" onClick={handleClick}>
            Yes
          </button>
        </NavLink>
        <NavLink to="/">
          <button>No</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Logout;
