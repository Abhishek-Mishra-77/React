import './ExpenseItem.css';

function ExpenseDetails(props) {
    return (
        <div className="expense-item_description">
            <div className="expense-item_description_title">{props.title}</div>
            <div className="expense-item_description_location">{props.LocationOfExpenditure}</div>
            <div className="expense-item_description_amount">${props.amount}</div>
            
        </div>
    )
}

export default ExpenseDetails;