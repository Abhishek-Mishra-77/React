import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/card";
// import ExpensesFilter from './ExpsensesFilter';
const Expenses = (props) => {

    return (
        <div>
            <Card className="expenses">
               
                {props.items.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        location={expense.location}
                        date={expense.date}
                    />
                ))}

            </Card>
        </div>
    )
}

export default Expenses;