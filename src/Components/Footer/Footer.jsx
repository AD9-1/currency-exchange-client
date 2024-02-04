import React from "react";
import "./Footer.scss";
import usd from "../../Assets/usd.svg";
import aud from "../../Assets/aud.svg";
import bgn from "../../Assets/bgn.svg";
import cad from "../../Assets/cad.svg";
import chf from "../../Assets/chf.svg";
import eur from "../../Assets/eur.svg";
import gbp from "../../Assets/gbp.svg";
import inr from "../../Assets/inr.svg";
import rub from "../../Assets/rub.svg";
import zar from "../../Assets/zar.svg";
import jpy from "../../Assets/jpy.svg";
import nzd from "../../Assets/nzd.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="currencyprofile">
      <h2>Currencies</h2>
      <div className="currencyprofile__country">
        <div className="currencyprofile__country__countries">
          <p>
            <span>
              <img src={usd} />
            </span>{" "}
            USD - US Dollar
          </p>
          <p>
            <span>
              <img src={nzd} />
            </span>{" "}
            NZD - New Zealand Dollar
          </p>
          <p>
            <span>
              <img src={bgn} />
            </span>{" "}
            BGN - Bulgarian Lev
          </p>
        </div>

        <div>
          <p>
            <span>
              <img src={cad} />
            </span>{" "}
            CAD - Canadian Dollar
          </p>
          <p>
            <span>
              <img src={eur} />
            </span>{" "}
            EUR - Euro
          </p>
          <p>
            <span>
              <img src={chf} />
            </span>{" "}
            CHF - Swiss Franc
          </p>
        </div>
        <div>
          <p>
            <span>
              <img src={zar} />
            </span>{" "}
            ZAR - South African Rand
          </p>
          <p>
            <span>
              <img src={aud} />
            </span>{" "}
            AUD - Australian Dollar
          </p>
          <p>
            <span>
              <img src={gbp} />
            </span>{" "}
            GBP - British Pound
          </p>
        </div>
        <div>
          <p>
            <span>
              <img src={rub} />
            </span>{" "}
            RUB - Russian Ruble
          </p>
          <p>
            <span>
              <img src={inr} />
            </span>{" "}
            INR - Indian Rupee
          </p>
          <p>
            <span>
              <img src={jpy} />
            </span>{" "}
            JPY - Japanese Yen
          </p>
        </div>
      </div>
      <div className="currencyprofile__connect">
        <h3>Connect With Us</h3>
        <ul>
          <li>
            <FontAwesomeIcon className="icon" icon={faFacebook} />
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faInstagram} />
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faTwitter} />
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faGoogle} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
