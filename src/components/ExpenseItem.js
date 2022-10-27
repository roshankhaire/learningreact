import ExpenseDate from'./ExpenseDate.js'
import './ExpenseItem.css'
function ExpenseItem(props){

    return (
        <div className="Expense-item">
           <ExpenseDate date={props.date}/>
             <div>
            <h2 className="Expense-item__discription">{props.title}</h2>
            <div className="Expense-item__price">${props.amount}</div>
           
        </div>
        </div>
    )
}
export default ExpenseItem;