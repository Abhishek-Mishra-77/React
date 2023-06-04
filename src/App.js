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
      date: new Date(2023, 5, 28),
    },
    {
      id: 'e3',
      title: 'Groceries',
      LocationOfExpenditure: 'Food',
      amount: 2025.6,
      date: new Date(2023, 5, 26),
    },
    {
      id: 'e4',
      title: 'Movies',
      LocationOfExpenditure: 'Enjoy',
      amount: 1000.23,
      date: new Date(2023, 5, 15),
    },
  ];

  return (
    <div> 
      <h2>Let's get started!</h2>
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          LocationOfExpenditure={expense.LocationOfExpenditure}
          date={expense.date}
        />
      ))}
    </div>
  )

}

export default App;