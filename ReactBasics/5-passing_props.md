# Props
### Props allow us to pass data between React components. We can pass callback functions an other pieces of data. We can atach multiple props to each component and passing props and acessing is very simple as we'll see.
<br>

## Parents and Children
### To understand how props work, we must first understand the relationship between parent and children components. React allows you to pass props but only down the family tree. A parent can only pass information to the children. Children can not pass props up to the parent. This is the one way data flow of React. It will always pass props down the component hierarchy unless your use a separate state manager like Redux.
<br>

`````
function Home() {
    return(
        <div>
            //passing name prop to greeting component
            <Greeting name=‘Tripp’/>
        </div>
   )
}

// Child component

function Greeting(props) {
    return (
        <div>
            //using prop passed down
            <p>Hi there {props.name}</p>
        </div> 
    )
`````
### To pass props we have to create something that looks like a html atribute and assign a value that you`ll get there in your component. What react makes is take the whole props that you passed for a component and pass it as a parameter that is an object and you can get the props you passed on your components as an argument.
````
function Home() {
    const activeStudents = [
        {name: 'joao', age: 21}
        {name: 'mateus', age: 21}
    ]
    
    return(
        <div>
            <Cards students={activeStudents} />
        </div>
   )
}
````
````
function Cards(props) {
    return (
        <div>
            {   
                props.students.map(student => {
                    return student
                });
            };
        </div> 
    )
````
<br>

## Other example:
* Where is rendered:
````
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <Person name="Max" age="29" />
        <Person name="Jerôme" age="26" />
        <Person name="Morgane" age="27" />
      </div>
    );
  }
}

export default App;
````
* Component:
````
// src/Person/Person.js
import React from 'react';

const person = (props) => {
  return (
    <p>
      I'm a {props.name} and I'm {props.age} years old!
    </p>
  );
};

export default person;
````