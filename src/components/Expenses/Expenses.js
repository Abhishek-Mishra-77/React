import React, { useState } from 'react';

import './Expenses.css';
import Card from "../UI/card";
import ExpensesFilter from './ExpsensesFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');


    const filteredChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filteredChangeHandler}></ExpensesFilter>
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                <ExpenseList items={filteredExpenses}></ExpenseList>
                {filteredExpenses.length === 1 && <p style={{ color: "red" }}>Only single Expense here. Please add more...</p>}
            </Card>
        </div>
    )
}

export default Expenses;