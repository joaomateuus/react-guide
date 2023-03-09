# What is JSX ?
### Created by the development team of react, JSX its the way we can create our HTML template in react. Its basically html written with javascript, JSX its not interpreted by the browser so we need a transpiler as babel.
<br>

# Why JSX ?
### This is a topic on react docs that explain more about the decision of create markups for templates with javascript.
<br>

### So, React adopts the fact that render lógic its inside other UI logics as events, state and how the datas its prepared for render.
### And as we saw react is built upon based on components, and thats the core concept and why they decided to write markup with javascript. Instead of split the technologies react split concepts, concepts that handle the use case logic with all the tools that will be nedded inside it.
### Under the hood react is making this:
`````
class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi, I'm a React App!</h1>
    //   </div>
    // );

    const h1 = React.createElement('h1', null, "Hi, I'm a React App!");
    return React.createElement('div', { className: 'App' }, h1);
  }
}
`````
<br>


## Exemplos de implementacao do jsx: 
````
const name = "joao"
const headingOne = <h1>Hello, {name}</h1>

const element = <img src={user.avatarUrl}></img>;
````
* Here we created two variables one that store a name and other that is a sentence with the created name. You can interpolate variables with html just using this bracket syntax.
<br>

### And its posible to write everything in js inside those brackets for Outputting Dynamic Content:
````
// src/Person/Person.js
import React from 'react';

const person = () => {
  return (
    <p>I'm a Person and I'm {Math.floor(Math.random() * 30)} years old!</p>
  );
};

export default person;
````
<br>

## JSX Restrictions
### For example, class can't be used in JSX, because JSX is JS and class is a reserved word. Also we can't return more than one root element (solution using Fragment <></>).

