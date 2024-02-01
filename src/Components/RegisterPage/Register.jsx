import React, { useState } from "react";
import axios from "axios";
import "./Register.scss";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setEmailError("");
    setPasswordError("");
    setSuccess("");
    const fieldemail = email;
    const fieldpassword = password;
    const fielddob = dob;
    const fieldname = name;
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (fieldname && fieldemail && fieldpassword && fielddob) {
      if (!fieldemail.match(validRegex)) {
        setEmailError("Please give email in the valid format");
      } else if (fieldpassword.length < 4) {
        setPasswordError("Password must be atleast 4 characters");
      } else {
        setError("");
        const newUser = {
          name: fieldname,
          email: fieldemail,
          password: fieldpassword,
          dob: fielddob,
        };

        try {
          const response = await axios.post(
            "http://localhost:5000/registerUsers",
            newUser
          );
          if (response.status === 200) {
            setSuccess("You have successfully registered");

            navigate("/signin");
          }
        } catch (error) {
          setError(error.response.data.message);
          console.error("Error while registering user:", error);
        }
      }
    } else {
      setError("Please do not leave blank in the field");
      console.log(error);
    }
  };

  return (
    <div className="register-field">
      <h2>Register Here</h2>

      <section className="register-field__section">
        <input
          className={error ? "register-input focus" : "register-input"}
          type="text"
          placeholder="Enter Your Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </section>

      <section className="register-field__section">
        <input
          className={
            error || emailError ? "register-input focus" : "register-input"
          }
          type="text"
          placeholder="Enter Your Mail Address"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </section>

      <section className="register-field__section">
        <input
          className={
            error || passwordError ? "register-input focus" : "register-input"
          }
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </section>

      <section className="register-field__section">
        <label className="label-dob">Date of Birth :</label>&nbsp;&nbsp;
        <input
          className={error ? "register-dob focus" : "register-dob"}
          type="date"
          placeholder="Enter Date of Birth"
          name="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </section>

      <section className="register-field__button">
        <button
          className="register-button"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </section>

      <div>
        <p className="register-field__error">
          {error}
          {emailError}
          {passwordError}
        </p>
        {success && <p className="register-field__error">{success}</p>}
      </div>
    </div>
  );
};

export default Register;
