import './ExpenseItem.css'
function ExpenseItem(){
    const expenseDate=new Date(2022,2,10);
    const expenseTitle="Car Insurance"
    const expenseAmount=294.67
    return (<div>
        <div className="Expense-item">{expenseDate.toDateString()}</div>
        <div>
            <h2 className="Expense-item__discription">{expenseTitle}</h2>
            <div className="Expense-item__price">${expenseAmount}</div>
        </div>
    </div>)
}
export default ExpenseItem;