import './ExpenseItem.css'
function ExpenseItem(props){
const month=props.date.toDateString('en-US',{month:'long'})
const day=props.date.toDateString('en-US',{day:'2-digit'})
const year=props.date.getFullYear()
    return (<div>
        <div className="Expense-item">
            
             <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>  
            
        </div>
        <div>
            <h2 className="Expense-item__discription">{props.title}</h2>
            <div className="Expense-item__price">${props.amount}</div>
           
        </div>
    </div>)
}
export default ExpenseItem;