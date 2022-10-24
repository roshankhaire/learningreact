import './ExpenseItem.css'
function ExpenseItem(){
    return (<div>
        <div className="Expense-item">March 28 2022</div>
        <div>
            <h2 className="Expense-item__discription">car Insurance</h2>
            <div className="Expense-item__price">$294.67</div>
        </div>
    </div>)
}
export default ExpenseItem;