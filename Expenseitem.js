import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import React from 'react';


function ExpenseItem(props) {
   return (
    <div className='expense-item'>
     
      <ExpenseDate date = {props.date}></ExpenseDate>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.price}</div>
      </div>
      
    
    </div>
  );
}

export default ExpenseItem;
