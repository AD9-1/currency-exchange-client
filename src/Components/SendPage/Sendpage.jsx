import React, { useEffect, useState } from "react";
import "./Sendpage.scss";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import ListUserInfo from "./ListUserInfo";

const Sendpage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [getUser, setUser] = useState();

  const jwtToken = sessionStorage.getItem("jwtToken");
  console.log("jwtToken :::::", jwtToken);
  console.log("The new Entry", location.state.userInfoId);
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/registerUsers/userInfo/${location.state.userId}`
        );
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, [location.state.userInfoId]);

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <>
      {!jwtToken || !location.state.userId ? (
        <div className="send-field">
          <section className="send-field__technique">
            <div className="card-1">
              <div className=" card-1__icon">
                <FontAwesomeIcon className="image" icon={faAddressCard} />
              </div>
              <h3>1. Create Account</h3>
              <p>
                It takes just a few minutes, and all you need is an email
                address.
              </p>
            </div>
            <div className="card-1">
              <div className=" card-1__icon">
                {" "}
                <FontAwesomeIcon className="image" icon={faShareFromSquare} />
              </div>
              <h3>2. Confirm & Send </h3>
              <p>
                Check the currencies and amount are correct and send your money
                transfer.
              </p>
            </div>
          </section>
          <section className="send-field__button">
            <button className="send-button" onClick={handleClick}>
              Sign-in & Send Money
            </button>
          </section>
        </div>
      ) : null}

      {getUser && (
        <ListUserInfo
          getUser={getUser.filter(
            (user) => user.id !== location.state.userInfoId
          )}
          name={location.state.userName}
          result={location.state.result}
          tocurrency={location.state.toCurrency}
        />
      )}
    </>
  );
};

export default Sendpage;
