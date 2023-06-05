import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

function ExpenseItem(props) {


    return (
        <div className='container'>
            <div className='expense-item'>
                <ExpenseDate date={props.date}></ExpenseDate>
                <ExpenseDetails title={props.title} LocationOfExpenditure={props.LocationOfExpenditure}
                    amount={props.amount}></ExpenseDetails>
            </div>
        </div>
    )
}


export default ExpenseItem;