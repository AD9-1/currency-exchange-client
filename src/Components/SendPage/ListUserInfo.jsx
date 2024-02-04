import React from "react";
import { format } from "date-fns";
import "./ListUserInfo.scss";
const ListUserInfo = (props) => {
  return (
    <div className="send1-field">
      <section className="firstpart send1-field__list ">
        <h2>Hello {props.name} !</h2>
        <p>
          {" "}
          You can send {props.result} {props.tocurrency}
        </p>
      </section>

      <section className="send1-field__list">
        <h2>Previously</h2>

        {!props.getUser.length ? (
          <p>You have not made any transaction</p>
        ) : (
          <ul>
            {props.getUser.map((user) => {
              const date = user.transaction_time;
              const formattedDate = format(date, "yyyy-MM-dd");
             const formattedTime=format(date,"HH:mm:ss")
              return (
                <li key={user.id} className="send1-field__list__history">
                  You sent {user.send_money} {user.currency} on {formattedDate} at {formattedTime}
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
};

export default ListUserInfo;
