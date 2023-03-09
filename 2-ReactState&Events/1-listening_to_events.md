# Listening to Events and Working with Event Handler
### In the last chapter we saw all the basic and fundamental knowldge about react, now we'll see how we can answer to user events.
### Because its what we want react to user events and thats the core concept behind react in point of product and thats how it was sold, with the UI answer the user action instantly.
<br>

## How we work with events ?
### We work with events with eventListeners like in html and js I will cover all the main ones but first let see here an example with a button.
````
const ExpenseItem = (props) => {
    const handleClick = () => {
        console.log("clicked!!")
    }
    
    return(
        <Card>
            <ExpenseDate date={props.date} />
            <div>
                <h2>{props.title}</h2>
                <div>${props.amount}</div>
            </div>
            <button onClick={handleClick}>Click here!!</button>
        </Card>
    )

}
````
* ### Here I created a button that calls a function that display clicked on console when is clicked. And I did it creating an event listener like html and js but in react they look a little bit diferent actually easier.
````
// instead of it
document.getElemeByid('root').addEventListener()

// its it
<button onClick={functionHere}>Hello</button>
````
* ###  Instead of doing like js We add an event listener by going to the jsx element and setting a special prop and what react does is add a event listener to this button. And its not necessarie to call the function () because when the code is parsed behind the scenes the function can be called. So deal all this for us, so on eventListeners the () its not necessary.




