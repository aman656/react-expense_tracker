import ExpenseItem from "./Expenseitem"
import './Expenses.css'
import Filter from "./Filter"
import React,{useState} from "react"
import AllExpenseChart from "./ExpensesChart"
// import Card from "./Card"

function Expenses(props){
    const [defaultYear,settingYear] = useState('2021')
    const selectingYear = (year)=>{
        settingYear(year)
    }

    const filtering = props.detail.filter(expenses =>{
        return expenses.date.getFullYear().toString()===defaultYear


    })
    return( <div className="expenses">
        <Filter settingdefaultYear = {defaultYear} onYearChange = {selectingYear} />
        <AllExpenseChart expenses = {filtering}/>
        {filtering.length===0 ? <p className="para">No Expense for this year is found</p> : filtering.map((expenses)=>(
            
            <ExpenseItem key = {expenses.id} title = {expenses.title} price = {expenses.price} date = {expenses.date}/>
    ))}
        
    </div>
    )
}
export default Expenses