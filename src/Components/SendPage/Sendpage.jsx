import React, { useEffect, useState } from "react";
import "./Sendpage.scss";
import axios from "axios";
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
        <div>
          <div className=""></div>
          <div className="send-field">
            <section className="send-field__button">
              <button className="send-button" onClick={handleClick}>
                Sign-in & Send Money
              </button>
            </section>
          </div>
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
