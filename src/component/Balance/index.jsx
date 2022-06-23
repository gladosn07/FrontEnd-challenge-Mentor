import React from "react";
import "./index.css";

const BalanceContent = () => {
  return (
    <div className="balance">
      <section className="myBalance">
        <p className="Tittle">My balance</p>
        <h2 className="currentBalance">$921.48</h2>
      </section>
      <section className="circleGroup">
        <div className="circle" />
        <div className="circleBrow" />
      </section>
    </div>
  );
};

export default BalanceContent;
