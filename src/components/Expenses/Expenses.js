import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/card";
import ExpensesFilter from './ExpsensesFilter';
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');


    const filteredChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

        return (
            <div>
                <Card className="expenses">
                    <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filteredChangeHandler}></ExpensesFilter>
                    {props.items.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
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