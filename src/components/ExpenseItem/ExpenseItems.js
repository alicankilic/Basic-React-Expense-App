import React from "react";

import "./ExpenseItem.css";
import Card from "../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const clickHndlr = () => {
  //   setTitle("Updated");
  //   console.log("Osman");
  // };

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
    </li>
  );
};

export default ExpenseItem;
