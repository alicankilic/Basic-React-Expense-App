import "./ExpenseItem2.css";
import Card from "../Card/Card"
import ExpenseItem from "../ExpenseItem/ExpenseItems";

const ExpenseItem2 = (props) => {
  return (
    <Card className="expenses">
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
  );
}

export default ExpenseItem2;
