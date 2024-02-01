import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoginin, setIsLoginin] = useState(false);
  const formRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fieldemail = formRef.current.email.value;
    const fieldpassword = formRef.current.password.value;
    console.log(fieldemail);
    console.log(e.target.email.value);

    if (fieldemail && fieldpassword) {
      const newUser = {
        email: fieldemail,
        password: fieldpassword,
      };
      try {
        const response = await axios.post(
          "http://localhost:5000/registerUsers/loginUser",
          newUser
        );
        setIsLoginin(true);
        sessionStorage.setItem("jwtToken", response.data.token);
        setErrorMsg(response.data.message);
        navigate(`/${response.data.userId}`);
        console.log(response.data.userId);
      } catch (error) {
        setIsLoginin(false);
        setErrorMsg(error.response.data.message);
        console.log(error);
      }
    } else setErrorMsg("Please fill the blank space");
  };

  useEffect(() => {
    setErrorMsg("");
  }, [email, password]);

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="register-field">
        <h2>Sign-in</h2>

        <section className="register-field__section">
          <input
            type="text"
            className="register-input"
            placeholder="Enter Your Mail Address"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            reqiued
          />
        </section>

        <section className="register-field__section">
          <input
            type="password"
            className="register-input"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </section>

        <section className="register-field__button">
          <button className="register-button">Submit</button>
        </section>
        <div>
          <p classNBame="sign-in_error">{errorMsg}</p>
        </div>
      </div>
    </form>
  );
};
export default Signin;
