import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      LocationOfExpenditure: 'Health',
      amount: 294.67,
      date: new Date(2023, 5, 31),

    },
    {
      id: 'e2',
      title: 'Toilet Paper',
      LocationOfExpenditure: 'Health',
      amount: 100.85,
      date:new Date(2023, 5, 28),
    },
    {
      id: 'e3',
      title: 'Groceries',
      LocationOfExpenditure: 'Food',
      amount: 2025.6,
      date:new Date(2023, 5, 26),
    },
    {
      id: 'e4',
      title: 'Movies',
      LocationOfExpenditure: 'Enjoy',
      amount: 1000.23,
      date:new Date(2023, 5, 15),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        LocationOfExpenditure={expenses[0].LocationOfExpenditure}
        date={expenses[0].date}>

      </ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        LocationOfExpenditure={expenses[1].LocationOfExpenditure}
        date={expenses[1].date}>

      </ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        LocationOfExpenditure={expenses[2].LocationOfExpenditure}
        date={expenses[2].date}>

      </ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        LocationOfExpenditure={expenses[3].LocationOfExpenditure}
        date={expenses[3].date}>

      </ExpenseItem>
    </div >
  )
}

export default App;