import React from 'react';

// function Delete({ onClickHandlar }) {
//     return (
//         <button onClick={onClickHandlar} >Delete Expense</button>
//     )
// }

function DeleteExpenses(props) {
    return(
        <button onClick={props.onClickHandler}>Delete Expenses</button>
    )
}

export default DeleteExpenses;