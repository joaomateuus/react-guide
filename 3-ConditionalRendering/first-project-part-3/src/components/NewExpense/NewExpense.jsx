import React from 'react';
import { ExpenseForm } from './ExpenseForm';
import './NewExpense.css'

export const NewExpense = ({getNewExpense}) => {
  const newExpenseHandler = (formInput) => {
    console.log(formInput);
    //passing to app
    getNewExpense(formInput);
  }
  
  return (
    <div className='new-expense'>
        <ExpenseForm newExpenseListener={newExpenseHandler} />
    </div>
  )
}
