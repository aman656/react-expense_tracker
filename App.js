
import React,{useState} from 'react';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';


const detail = [
  {id:'a1',
    date : new Date(2021,7,10),
    title:'Newspaper',
    price:100
  },
  {id:'a2',
    date : new Date(2021,7,8),
    title:'Groceries',
    price:200

  },
  {id:'a3',
    date : new Date(2021,7,5),
    title:'Electricity',
    price:150
  }

]

function App() {
  
  const [expenses,settingAllExpenses] = useState(detail)
  const lastStage = (everyThing) =>{
    settingAllExpenses((previousexpense) =>{
      return [everyThing, ...previousexpense]
    })
    
}

  return (
    <div className="App">
      <h1>Let's get started</h1>
      <NewExpense onLastStage = {lastStage}/>
      <Expenses detail={expenses}/>
     
    </div>
  );
}

export default App;
