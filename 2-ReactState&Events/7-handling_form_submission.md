# Handling form submission
### Here we'll see how handle form submissions in react
<br>

## Form instead of button
### In react we dont submit a form setting an event listener in the button because it will override the form submisson by the browser so we add the event listener in the form tag and call a function to handle the submisson
`````
<form onSubmit={functionThatSubmit}>
</form>

<button type="submit" onClick={thatsWrong}>Dont do that</button>
`````
<br>

## Prevent Default
### When we use the form tag with the onSubmit attribute if its pressed it will reaload the page to send the server because its a web behavior, but we want to use js manually to handle the submission, and we can prevent it with prevent default a js resource.
````

const functionThatSubmit = () => {
     event.preventDefault(); -> HERE

        const expenseData = {
            title: title,
            amount: amount,
            date: date
        };

        console.log(expenseData);
}


<form onSubmit={functionThatSubmit}>
</form>
````