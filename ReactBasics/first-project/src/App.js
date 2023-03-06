import './App.css';
import { ExpenseItem } from './components/ExpenseItem';

function App() {
  const mockedData = [
    {id: 1, title: 'Iphone', amount:700.00, date: '06-03-2023'},
    {id: 1, title: 'MacBook', amount:1100.00, date: '04-03-2023'},
    {id: 1, title: 'Lunch', amount:20.00, date: '06-03-2023'},
    {id: 1, title: 'Dinner', amount:30.00, date: '06-03-2023'},
  ]
  return (
    <div className="App">
      <div className='main-div'>
        <ExpenseItem title={mockedData[0].title} amount={mockedData[0].amount} date={mockedData[0].date} /> 
        <ExpenseItem title={mockedData[1].title} amount={mockedData[1].amount} date={mockedData[1].date} /> 
        <ExpenseItem title={mockedData[2].title} amount={mockedData[2].amount} date={mockedData[2].date} /> 
        <ExpenseItem title={mockedData[3].title} amount={mockedData[3].amount} date={mockedData[3].date} /> 
      </div>
    </div>
  );
}

export default App;
