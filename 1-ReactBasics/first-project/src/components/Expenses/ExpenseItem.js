import React from 'react'
import './ExpenseItem.css'

export const ExpenseItem = ({title, amount, date}) => {
  return (
    <div className="expense-item">
        <h2>{date}</h2>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">R${amount}</div>
      </div>
    </div>
  )
}
