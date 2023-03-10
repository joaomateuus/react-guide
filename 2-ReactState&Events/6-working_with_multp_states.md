# Woking with multiple states
### In a form you wont have only one field but multiple fields that you want to store and manage the state and we will se how to deal with it.
<br>

## Multiple UseEffects
`````
export const ExpenseForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('')
    
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }
  
    return (
    <form action="">
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <button className="new_expense__actions" type="submit">Add Expense</button>
    </form>
  )
}
`````
* ### You can have multiple useState calls that is not a problem but when you do that you have to set a function to deal with each one
<br>

## useState Object
### It only depends of you personal preference there is no problem to use multiple states, to use the following approach you have to pass an object with the form values to the useState initial value.
````
const [form, setForm] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
});
````
### Pay attetion here!!! When set the new value you have to be carefull, because justing using set and assign the value of the key that you want you override the last useState remaining just the key you updated. SO YOU HAVE TO USE SPREAD OPERATOR TO TAKE THE REST OF THE OBJECT AND CHANGE JUST WHAT YOU WANT.
````
    const titleChangeHandler = (event) => {
        setForm((prevState) => {
            return {...prevState, enteredTitle: event.target.value}
        });
    }
    const amountChangeHandler = (event) => {
        setForm((prevState) => {
            return {...prevState, enteredAmount: event.target.value}
        });
    }
    const dateChangeHandler = (event) => {
        setForm((prevState) => {
            return {...prevState, enteredDate: event.target.value}
        });
    }
````