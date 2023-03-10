# Adding two way Binding
### Two way binding is very usefull with forms because allow us to get user inputs and after change it.
<br>

## How does it work ?
### Add the value attribute to the input elements, it will set the intern value propertie that every input has and set it to the initial value of our useState
````
 <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" value={date} max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <button className="new_expense__actions" type="submit">Add Expense</button>
    </form> 
````
### Instead of doing what we were doing with onChange, here whenever we change the input will be changing the state
### And a vantage of it we can set all the values to a empty string after the form is submitted.