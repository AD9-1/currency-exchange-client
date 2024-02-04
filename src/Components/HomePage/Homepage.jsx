import axios from "axios";
import React, { useEffect, useState } from "react";
import currencies from "../../data";
import "./Homepage.scss";
import "primeicons/primeicons.css";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const Homepage = () => {
  const [toCurrency, setToCurrency] = useState("INR");
  const [fromCurrency, setFromCurrency] = useState("CAD");
  const [message, setMessage] = useState("p");
  const [amount, setAmount] = useState();
  const [result, setResult] = useState();
  const [uniAmount, setuniAmount] = useState("");
  const navigate = useNavigate();
  const { userId } = useParams();
  const jwtToken = sessionStorage.getItem("jwtToken");
  const isloggedin = !sessionStorage.getItem("jwtToken") ? false : true;
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    convert();
  }, [toCurrency, fromCurrency, amount]);

  const convert = () => {
    setMessage("");
    setTimeout(async () => {
      const response = await axios.get(
        `https://api.freecurrencyapi.com/v1/latest?base_currency=${fromCurrency}&currencies=${toCurrency}&apikey=${apiKey}`
      );

      const m = response.data.data[toCurrency];
      setuniAmount(m);
      setResult(amount * m);
    }, 0);
  };

  const handleChange = () => {
    setToCurrency(fromCurrency);
    setFromCurrency(toCurrency);
  };

  const handleSubmit = async () => {
    if (!result || result < 0) {
      return setMessage("Please Enter The Proper Amount to Send Money");
    }

    if (isloggedin == false || !userId) {
      navigate("/send", {
        state: {},
      });
    } else {
      try {
        const data = {
          sendMoney: result,
          sendCurrency: toCurrency,
        };

        const response = await axios.post(
          `http://localhost:5000/registerUsers/sendMoney/${userId}`,
          data,
          {
            headers: { Authorization: `Bearer ${jwtToken}` },
          }
        );

        navigate("/send", {
          state: {
            result,
            toCurrency,
            userId,
            userInfoId: response.data.userInfoId,
            userName: response.data.username,
          },
        });
      } catch (error) {
        setMessage(error.response.data.message);
      }
    }
  };

  return (
    <section className="home-container">
      <div className="left-container">
        <h2 className="animated-text">
          <span>Empower </span>
          <span>Your </span>
          <span>Finances : </span>
          <span>Seamlessly Convert </span>
          <span>Currency </span>
          <span>And </span>
          <span>Send Accross All </span>
          <span>Borders </span>
          <span>With </span>
          <span>Ease.</span>
        </h2>
      </div>
      <div className="homepage">
        <div className="homepage__upper">
          <section className="homepage__upper__left">
            <p>Amount</p>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="amountvalue"
            ></input>
          </section>
          <section className="homepage__upper__middle">
            <p>From</p>
            <select
              value={fromCurrency}
              className="currencyOption"
              name="currency-2"
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {" "}
              {currencies.map((currency, _index) => (
                <option key={_index}>{currency}</option>
              ))}
            </select>
          </section>
          <div className="homepage__upper__bothwayarrow">
            {" "}
            <button onClick={handleChange}>
              <i className="pi pi-arrow-right-arrow-left"></i>
            </button>
          </div>
          <section className="homepage__upper__right">
            <p>To</p>
            <select
              value={toCurrency}
              name="currency-1"
              className="currencyOption"
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {currencies.map((currency, _index) => (
                <option key={_index}>{currency}</option>
              ))}
            </select>
          </section>
        </div>

        <div className="homepage__button">
          {" "}
          <button type="submit" onClick={handleSubmit}>
            Send
          </button>
        </div>

        <div className={result ? "homepage__lower" : "hidden"}>
          <p className="homepage__lower__result bigger">
            {amount}
            {"   "}
            {fromCurrency}
            {"   "}= {"   "}
            {result}
            {"     "}
            {toCurrency}
          </p>
          <p className="homepage__lower__result">
            1 {fromCurrency} = {uniAmount}
            {toCurrency}{" "}
          </p>
        </div>
        <div
          className={
            amount <= 0 || (!amount && handleSubmit)
              ? "homepage__amount"
              : "hidden"
          }
        >
          <p className="homepage__amount__result">{message}</p>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
