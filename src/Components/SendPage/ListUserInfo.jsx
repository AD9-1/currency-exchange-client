import React from "react";
import "./Sendpage.scss";
const ListUserInfo = (props) => {
  return (
    <div className="send-field">
      <section className="send-field__list">
        <h2>Hello {props.name} !</h2>
        <p>
          {" "}
          You can send {props.result} {props.tocurrency}
        </p>
        <hr />
        <h2>Previously</h2>
        {!props.getUser.length ? (
          <p>You have not made any transaction</p>
        ) : (
          props.getUser.map((user) => (
            <p key="user.id">
              {" "}
              You sent {user.send_money} {user.currency} at{" "}
              {user.transaction_time}
            </p>
          ))
        )}
      </section>
    </div>
  );
};

export default ListUserInfo;
