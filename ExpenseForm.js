import './ExpenseForm.css'
import React , {useState} from 'react'




function ExpenseForm(props){
    const [changedTitle,setTitle] = useState('')
    const[changedAmount,setAmount] = useState('')
    const[changeDate,setDate] = useState('')
    const titleHandler  = (event) =>{
        setTitle(event.target.value)

    }
    const amountHandler = (event)=>{
        setAmount(event.target.value)
    }
    const dateHandler = (event)=>{
        setDate(event.target.value)
    }
    const SubmitHandler = (event)=>{
        event.preventDefault()
        const newValues = {
            title:changedTitle,
            price:+changedAmount,
            date:new Date(changeDate)
        }
        props.onSaving(newValues);
        setTitle('')
        setAmount('')
        setDate('')
        props.onCancel()

    }

    return <form onSubmit={SubmitHandler}>
          <div className="new-expense_controls">
            <div className='new-expense_control'>
                <label>Title</label>
                <input type='text' value={changedTitle} onChange={titleHandler} />

            </div >
            <div className='new-expense_control'>
                <label>Amount</label>
                <input  type="number" value={changedAmount} min='0.1' step ='0.1' onChange={amountHandler} />

            </div>
            <div className='new-expense_control'>
                <label>Date</label>
                <input  type="date" value={changeDate} min='2019-01-01' max='2022-11-31' onChange={dateHandler} />

            </div>
            <div className='new-expense_actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Submit</button>
            </div>

        </div>
    </form>


}

export default ExpenseForm