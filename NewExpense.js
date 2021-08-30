import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react';

function NewExpense(props){
    const formData = (enteredData)=>{
        const  allData = {
            ...enteredData,
            id:Math.random().toString()
        }
        props.onLastStage(allData);
        
    }
    const [adding,setAdding] = useState(false)
    const addingExpense = ()=>{
        setAdding(true)
    }
    const canceladding = ()=>{
        setAdding(false);
    }




    return <div className='new-expense'>
       {!adding ?<button onClick={addingExpense}>Add Expense</button> :
        <ExpenseForm onSaving = {formData}  onCancel = {canceladding} />}

    </div>
}

export  default NewExpense;