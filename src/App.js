import ExpenseItem from './components/ExpenseItem';
import logo from './logo.svg';
import './App.css';

function App() {
  const expenses=[
    {id:"e1",
    title:"Car Insurance" ,
    amount:267.97,
    date:new Date(2022,2,10),
    locationOfExpenduture:"money"
  },
    {id:"e2",
    title:"Bike Insurance" ,
    amount:250.97,
    date:new Date(2022,2,22)
  },
    {id:"e3",
    title:"Health Insurance" ,
    amount:244.97,
    date:new Date(2022,2,10)
  },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
       
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem> 
    </header>
    </div>
  );
}

export default App;
