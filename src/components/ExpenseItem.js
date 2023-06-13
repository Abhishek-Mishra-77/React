import ExpenseDate from './ExpenseDate';
import Card from './card';
import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails';

function ExpenseItem(props) {
    return (
        <Card className="expense-items">
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location}></ExpenseDetails>
        </Card>
    )
}

export default ExpenseItem;