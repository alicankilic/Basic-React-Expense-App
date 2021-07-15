import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

function ExpenseItem(props) {
  // const expenseDate = new Date(2021,6,15);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2 className="expense-item__price">${props.amount}</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
