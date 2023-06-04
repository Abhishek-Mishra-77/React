function ExpenseDetails(props) {
    return (
        <div className="expense-item_description">
            <div>{props.title}</div>
            <div>{props.amount}</div>
            <div>{props.LocationOfExpenditure}</div>
        </div>
    )
}

export default ExpenseDetails;