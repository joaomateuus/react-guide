# Listening to user inputs
### Everytime we need to get user input to save to our database manipulate data and etc now we'll see how to get user inputs.
<br>

## EventListeners
### We do that by event listeners, I can go to others but the main for get user input its on change
````
export const ExpenseForm = () => {
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  }
  
  return (
    <form action="">
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" / onChange={titleChangeHandler}>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={titleChangeHandler} />
            </div>
        </div>
        <button className="new_expense__actions" type="submit">Add Expense</button>
    </form>
  )
}
````
### OnChange will be triggered every time the user is using the keyborad, and with that we can get the user value, onChange and every event listener return a value that is an event if you console.log event you'll see all the properties for the event on the prototype chain. Properties that will help us to manipulate the user's input on the browser.