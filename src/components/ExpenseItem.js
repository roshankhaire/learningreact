import './ExpenseItem.css'
function ExpenseItem(props){
    const expenseDate=new Date(2022,2,10);
    const expenseTitle="Car Insurance"
    const expenseAmount=294.67
    return (<div>
        <div className="Expense-item">{props.date.toDateString()}</div>
        <div>
            <h2 className="Expense-item__discription">{props.title}</h2>
            <div className="Expense-item__price">${props.amount}</div>
            <div className="Expense-item__location">${props.locationOfExpenduture}</div>
        </div>
    </div>)
}
export default ExpenseItem;