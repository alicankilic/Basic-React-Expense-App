import "./NewExpense.css";
import React, {useState}from "react";
import ExpForm from "./ExpenseForm/ExpenseForm";

const NewExpense = (props) => {

  const [isEditing,setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
        ...enteredExpenseData,
        id:Math.random().toString()
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  }
  const stopEditingHandler = () => {
    setIsEditing(false);
  }



  return (
    <div className="new-expense">
      {isEditing === false ?  <button onClick={startEditingHandler}>Add Expense</button>: undefined}
      {isEditing === true ? <ExpForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEditingHandler}/>: undefined}
    </div>
  );
};

export default NewExpense;
