# How Component functions are executed
### Now we are going to understand the steps that a component take to be rendered on the screen 

### For example, I cant take a props and change in a function pretending that will change the UI because it won't we have to understand how react parses the jsx code and how does it really works
````
// IT WONT WORK!!!

title = props.date

const changeTitle = () => {
    title = 'updated'
}

return(
    <div>
        <h1>{title}</h1>
        <button onClick={changeTtile}>Change title</button>
    </div>
)
````
<br>

## So lets begin
### Keep in mind that components are functions and since are funtions someone has to call it and you might notice that we never call our component functions instead we just use those functions as jsx code.
<br>

### But under the hood calling a component it almost like a function call, when we call components we make react be aware of our functions so react calls it and the components return jsx code, until there no more components to call react evaluates everything and execute DOM instructions to render it on the screen thats how react works.
<br>

### And the only problem of this its react never repeats that after the app its initialized its done. But obviusly in modern apps you have to update what is visible on the screen, so we need a way to tell react that a component changed and need to be re-rendered and thats how we handle state in react, and we are starting to see why react is so loved by the comunity the reactive behavior that react has and we start our journey on the next lecture with state.