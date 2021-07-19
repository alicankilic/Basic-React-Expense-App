import React,{useState} from "react";
import "./ExpenseItem2.css";
import Card from "../Card/Card"
import ExpenseItem from "../ExpenseItem/ExpenseItems";
import ExpensesFilter from "../ExpenseDropDown/ExpenseFilter"

const ExpenseItem2 = (props) => {
  
  const [year,yearSetValue] = useState("2020");
  const yearHandler = (value) => {
    yearSetValue(value);
    console.log("OSMAN");
  }

  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter onYear= {yearHandler} onNow = {year}/>
      <ExpenseItem
        date={props.property[0].date}
        title={props.property[0].title}
        amount={props.property[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.property[1].date}
        title={props.property[1].title}
        amount={props.property[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.property[2].date}
        title={props.property[2].title}
        amount={props.property[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.property[3].date}
        title={props.property[3].title}
        amount={props.property[3].amount}
      ></ExpenseItem>
    </Card>
    </div>

  );
}

export default ExpenseItem2;
