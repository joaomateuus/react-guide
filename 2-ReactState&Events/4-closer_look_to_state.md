# Closer look to State
### Here we are goin to cover some more topics about state
<br>

## Each instance of a component has your own state
### If I use useState in a component and I called it multiple times in another one to being render, each specific component instace is going to have your own state. And only the one that had the state change will be re-rendered on the UI.
````
import React { useState } from 'react';

    export const Component({title}) => {
       name = 'useState'
        return(
            <>
                <Card name={name}/>
                <Card name={name}/>
                <Card name={name}/>
                <Card name={name}/>
                
                // if the state change happened here
                // in this last card only it will be updated
                <Card name={name}/>
            </>
	    )
    }

````
<br>

## Why we use const for useState ?
### We are not assign a value to a variable in the regular way, we are calling a function, as we saw useState is a function that manages state, and has your own support for it. The way we use the first and the second values returned from useState works in a way that the state is handled by react, whenever we call the set (second parameter) if a change happens it will be re-rendered and the new value we be assigned to the first paremeter under the hood. And we have to use const because its a behind the scene process we are not justing assigning a new value to a variable.

````
   const [title, setTitle] = useState(title);

    const changeTitle = () => {
        setTitle('Updated')
    }
````
<br>

## State managment with use state is simple but its important to know those things and how does it work behind the scenes because whenever you find a problem you can deal with it.
<br>

## States can be updated in many ways!!
### Thus far, we update our state upon user events (e.g. upon a click).

### That's very common but not required for state updates! You can update states for whatever reason you may have.

### Later in the course, we'll see Http requests that complete (where we then want to update the state based on the Http response we got back) but you could also be updating state because a timer (set with setTimeout()) expired for example.