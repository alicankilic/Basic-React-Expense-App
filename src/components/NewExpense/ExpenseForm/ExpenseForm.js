import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [ntitle, setTitleState] = useState("");
  const [namount, setAmountState] = useState("");
  const [ndate, setDateState] = useState("");
  

  const titleChangeHandler = (event) => {
    setTitleState(event.target.value);
  
  };
  const amountChangeHandler = (event) => {
    setAmountState(event.target.value);
   
  };
  const dateChangeHandler = (event) => {
    setDateState(event.target.value);
  
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: ntitle,
      amount: +namount,
      date: new Date(ndate),
    };
    props.onSaveExpenseData(expenseData);
    setTitleState('');
    setAmountState('');
    setDateState('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={ntitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={namount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-02-02"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={ndate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
