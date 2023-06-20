import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {

    const [isEditing, setEditing] = useState(false);

    function isEditingHandler() {
        setEditing(true);
    }


    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setEditing(false);
    }



    const setOnCancelHandler = () => {
        setEditing(false);
    }


    return (
        <div className="new-expense">
            {!isEditing && <button onClick={isEditingHandler}>Add New Expenses</button>}
            {isEditing && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={setOnCancelHandler}></ExpenseForm>}
        </div>
    )
}

export default NewExpense;