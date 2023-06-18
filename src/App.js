import React, { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: 'Car Insurance',
    amount: 294.67,
    location: 'Delhi',
    date: new Date(2021, 2, 12)
  },
  {
    id: "e2",
    title: 'Toilet Paper',
    amount: 888.88,
    location: 'Uttar Pradesh',
    date: new Date(2022, 6, 8)
  },
  {
    id: "e3",
    title: 'Health Insurance',
    amount: 120.26,
    location: 'Chennai',
    date: new Date(2021, 7, 7)
  },
  {
    id: "e4",
    title: 'Education', amount: 305.22,
    amount: 120.26,
    location: 'Mumbai',
    date: new Date(2015, 4, 16)
  }
]

function App() {

  //  return React.createElement(
  //     'div',
  //     {},
  //     React.createElement('h2' , {} , "Let's get started!rrr"),
  //     React.createElement(Expenses , {items:expenses} ),
  //     React.createElement("div" , {} , "golfdjnjffndsjfsdjfnju")
  //  )

  const [expenses, SetExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    SetExpenses((prev) => {
      return [expense , ...prev];
    });
  }




  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  )
}

export default App;

