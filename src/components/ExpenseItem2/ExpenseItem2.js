import React, { useState } from "react";
import "./ExpenseItem2.css";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpenseDropDown/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpenseChart";

const ExpenseItem2 = (props) => {
  const [year, yearSetValue] = useState("2020");
  const yearHandler = (value) => {
    yearSetValue(value);
  };

  const filteredExpenses = props.property.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYear={yearHandler} onNow={year} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default ExpenseItem2;
