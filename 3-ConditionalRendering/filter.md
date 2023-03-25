# Conditional rendering based on filter
### We are seeing about conditional rendering in this chapter and there are lot of cases that we want to filter our output and we´ll see how does it works
<br>

## Managing the data between components
### We have our filter component and our list, in the filter we have our filter options and the component responsible, but how can we manipulate the data from the component and use this to conditional render the filtered list.
* ### Child
````
export const ExpensesFilter = ({expenseFilterListener, selected}) => {
  const handleFilterChanges = (event) => {
    expenseFilterListener(event.target.value);
  }
  
    return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selected} onChange={handleFilterChanges}>
          <option value=""></option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )
}

````
* ### Parent
````
export const Expenses = ({expenses}) => {
  const [filter, setFilter] = useState('2020');

  const handleFilterValue = (selectedYear) => {
    setFilter(selectedYear);
  };

  return (
    <>
      <Card className='expenses'>
        <ExpensesFilter selected={filter} expenseFilterListener={handleFilterValue} />
````
### So as we saw we can pass data from child to parend and in the filter (child) its called a function that the component receveid as prop from the parent passing the value of the input and in this way we can manipulate the data and apply our filter logic in the parent.
<br>

## But How we´ll render it ?
### In the same way that we rendered the entire list, We can validate what we´ll render based in a condition, if there is a filtered applied we´ll show the filtered values if there isn´t we´ll render all the values.
`````
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

`````
### So we just need to apply the logic of the filter, in js we can use filter method that is a method that filter the values based in the condition turning it into a new array. and a if statement to check if there is a filtered applied
<br>

### So in this example we can see that the better way to work with components is to set only the main responsibilities turning everything ready for being used when a value is receveid. Making it usable to the most of the cases and letting the data flow to whereever is being used.
