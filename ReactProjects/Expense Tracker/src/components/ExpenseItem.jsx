import './ExpenseItem.css'
function ExpenseItem({currExpense,deleteItem}) {
  return (
    <div className="expense-item">
        <span className="expense-title">Title: {currExpense.title}</span>
        <span className="expense-amount">Amount: ₹{currExpense.amount}</span>
        <button  className="delete-btn" onClick={()=>deleteItem(currExpense.id)}>delete item</button>
    </div>
  )
}

export default ExpenseItem