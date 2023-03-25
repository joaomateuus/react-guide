import { useState } from 'react';
import { Expenses } from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpense/NewExpense';
import './App.css';

function App() {
  const mockedData = [
    {id: 1, title: 'Iphone', amount:700.00, date: '06-03-2022'},
    {id: 2, title: 'MacBook', amount:1100.00, date: '04-03-2022'},
    {id: 3, title: 'Lunch', amount:20.00, date: '06-03-2021'},
    {id: 4, title: 'Dinner', amount:30.00, date: '06-03-2023'},
    {id: 5, title: 'Shoes', amount:20.00, date: '06-03-2022'},
    {id: 6, title: 'Rent', amount:500.00, date: '06-03-2020'},
  ]

  return (
    <div>
      <NewExpense />
      <Expenses expenses={mockedData} />
    </div>
  )
}

export default App
