import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/card';
import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails';
import DeleteExpenses from "./DeleteExpenses"

const ExpenseItem = (props) => {
    const [title , setTitle] = useState(props.title);
    const [amount , setAmount] = useState(props.amount);

    function clickHandler() {
      setTitle('Updated!')
    
    }
  
    function changeExpense() {
        setAmount('100.00');
    }


    function deleteExpense(event) {
        const deleteExpense = event.target.parentElement;
        deleteExpense.remove()
    }
    return (
        <Card className="expense-items">
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails title={title} amount={amount} location={props.location}></ExpenseDetails>
            <DeleteExpenses onClickHandler={deleteExpense} />
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={changeExpense}>Change Expense</button>
        </Card>
    )
}

export default ExpenseItem;