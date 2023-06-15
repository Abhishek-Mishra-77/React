import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/card";
const Expenses = (props) => {
    return (
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
    )
}

export default Expenses;