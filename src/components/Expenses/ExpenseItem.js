import ExpenseDate from './ExpenseDate';
import Card from '../UI/card';
import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props) => {
    function deleteExpense(event) {
        const deleteExpense = event.target.parentElement;
       deleteExpense.remove()
        
    }
    return (
        <Card className="expense-items">
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location}></ExpenseDetails>
            <button onClick={deleteExpense}>Delete Expense</button>
        </Card>
    )
}

export default ExpenseItem;