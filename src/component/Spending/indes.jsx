import React from "react";
import "./index.css";

import BalanceContent from "../Balance";
import CharBar from "../ChartBar";
import CoastContent from "../Coast";

const SpendingContent = () => {
  return (
    <div className="content">
      <BalanceContent />
      <div className="spending">
        <h2 className="titleSpending">Spending - Last 7 days</h2>
        <CharBar />
        <div className="divider" />
        <CoastContent />
      </div>
    </div>
  );
};

export default SpendingContent;
