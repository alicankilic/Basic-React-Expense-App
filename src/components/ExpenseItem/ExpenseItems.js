import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHndlr = () => {
    setTitle("Updated");
    console.log("Osman");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHndlr}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
