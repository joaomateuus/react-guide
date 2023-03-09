import './App.css';
import { Expenses } from './components/Expenses/Expenses';

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
        <Expenses expenses={mockedData} />
      </div>
    </div>
  );
}

export default App;
