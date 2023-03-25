import React, {useState} from 'react'
import { ExpenseItem } from "./ExpenseItem";
import { Card } from '../UI/Card';
import './Expenses.css'
import { ExpensesFilter } from './ExpensesFilter';

export const Expenses = ({expenses}) => {
  const [filter, setFilter] = useState('2020');

  const handleFilterValue = (selectedYear) => {
    setFilter(selectedYear);
  };

  const filteredByYear = expenses.filter(expense => {
    return expense.date.slice(6) === filter;
  });

  return (
    <>
      <Card className='expenses'>
        <ExpensesFilter selected={filter} expenseFilterListener={handleFilterValue} />
        {
          filter
          ?
            filteredByYear.map(expense => {
              return(
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />
              )
            })
          :
          expenses.map(expense => {
            return (
              <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}  key={expense.id}/>
            )
          })
        }
      </Card>
    </>
  )
}
