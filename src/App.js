import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
function App() {
  const expenses = [
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
  return (
    <div>
       <Expenses items={expenses}></Expenses>
    </div>
  )
}

export default App;

