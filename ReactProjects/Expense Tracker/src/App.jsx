import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import './App.css'
function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  //function to add new expense data in **expenses**
  const addExpense = (newExpense) => {
    //newExpense he will hold object data **(ExpenseFrom.jsx)**
    setExpenses((prev) => [...prev, newExpense]);
  };
  const deleteItem = (id) => {
    setExpenses((prev) => prev.filter((currExpense) => currExpense.id !== id));
  };
  //derived variable of expenses
  const totalSumOfExpense = expenses.reduce(
    (sum, currExpense) => sum + currExpense.amount,
    0
  );
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  return (
    <div className="main-container">
      <h1 id="app-h1">Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <h3 id="app-h3">Total Expense: ₹{totalSumOfExpense.toFixed(2)}</h3>
      <ExpenseList expenses={expenses} deleteItem={deleteItem} />
    </div>
  );
}
export default App;
