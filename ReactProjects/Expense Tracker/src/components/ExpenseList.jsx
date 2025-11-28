import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'
function ExpenseList({ expenses, deleteItem }) {
    if (expenses.length === 0) {
  return (
    <div className="empty-container">
      <div className="empty-icon">💸</div>
      <p className="empty-message">No expenses recorded</p>
    </div>
  );
}

  return (
    <div>
      {expenses.map((currExpense) => (
        <ExpenseItem
          key={currExpense.id}
          currExpense={currExpense}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
