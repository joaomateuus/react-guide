# Working with state in React
### State is key concept in react, I value wont be updated on the screen reasigning it to another value. So react have tools that help us to deal with it in the best way and we'll se here.
<br>

## useState
### useState is a function provided by the react library and this funtion allow us to define value as state where changes to these values should reflect in the components being re-render updating the old value.
* ### How we use it 
    * 1 - Inside in your components import useState from react and declare the function inside your component, it must be inside it does not work outside from a component function
    ````
    import React { useState } from 'react';

    export const App() => {
        useState();
        return(
            <>
            </>
	    )
    }
    ````
    * ### 2 - The function work like we have special variables that whenever they change the component will be re-rendered. So we have to assign the initial value passign as an argument to useState
    ````
    import React { useState } from 'react';

    export const Component({title}) => {
        useState(title);
        return(
            <>
            </>
	    )
    }
    ````
    * ### 3 - When a value is assigned to useState it returns this variable to use in our code with the initial value and a second variable that is for assign a new value to the one with the initial value  
    ````
     import React { useState } from 'react';

    export const Component({title}) => {
        const [title, setTitle] = useState(title);
        return(
            <>
            </>
	    )
    }
    ````
    * ### 4 - And we get them into an array destructuring because it returns an array of two elements, and you can name the first variable as you want because in array destructuring what matter is the order but with the second is a convention name as "set" following the first variable name.
    ````
    import React { useState } from 'react';

    export const Component({title}) => {
        const [title, setTitle] = useState(title);
        
        const changeTitle = () => {
            setTitle('Updated')
        }

        return(
            <>
                <h1>{title}</h1>
                <button onClick={changeTitle}>Change the title</button>
            </>
	    )
    }
    ````
    * ### And we can update the state using the second variablem and its not only the value that is changed but the component is re-rendered in a reactive way.
<br>


## When do I need to use useState ?
* ## When you need to update a value on the screen, because how we saw reassign a value to a variable with regular javascript it wont work, react has this hook that we can manage state easly in a reactive way. 

