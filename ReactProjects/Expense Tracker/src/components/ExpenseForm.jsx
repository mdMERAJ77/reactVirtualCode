import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  //handle form data
  const formHandler = (e) => {
    e.preventDefault();
    if (!title || !amount) return alert("all fields are required!");
    console.log(title, amount);

    //object
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
    };
    //addExpense is a function inside the (APP.JSX)
    addExpense(newExpense);
    setTitle("");
    setAmount("");
  };
  return (
    <div className="main-form">
      <form onSubmit={formHandler}>
        <div className="title">
          <label>Expense Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="enter expense"
          />
        </div>
        <div className="amount">
          <label>Expense Amount: </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            step="0.01"
            placeholder="enter amount"
          />
        </div>
        <button type="submit">Add expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
