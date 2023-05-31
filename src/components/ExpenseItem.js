import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2023,5,31)
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.77;
    const LocationOfExpenditure = 'Uttar Pradesh'
    return (<div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item_description'>
            <h2>{expenseTitle}</h2>
            <h2>{LocationOfExpenditure}</h2>
            <div className='expense-item_price'>${expenseAmount}</div>
            </div>  
                   
    </div>)
}



export default ExpenseItem;