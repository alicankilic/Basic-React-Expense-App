import React from "react";
import "./ExpenseItem.css";
import Card from "../Card/Card"
import ExpenseDate from "../ExpenseDate/ExpenseDate";

function ExpenseItem(props) {
  // const expenseDate = new Date(2021,6,15);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
