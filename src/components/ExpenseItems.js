import  "./ExpenseItem.css";



function ExpenseItem() {
  return (
    <div className="expense-item" >
      <div>July 7TH 2021</div>
      <div className="expense-item__description">
        <h2>CAR INSURANCE</h2>
        <h2 className="expense-item__price">294.67</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
