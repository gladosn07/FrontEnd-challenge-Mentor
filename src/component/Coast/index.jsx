import React from "react";
import "./index.css";

const CoastContent = () => {
  return (
    <section className="Coast">
      <div className="totalThisMont">
        <p className="titleTotal">Total this Month</p>
        <h2 className="TotalMonth">$478.33</h2>
      </div>
      <div className="percentMonth">
        <p className="percent">+2.4%</p>
        <p className="subtitle">from last month</p>
      </div>
    </section>
  );
};

export default CoastContent;
