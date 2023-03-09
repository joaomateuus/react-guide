# What are components ?
### When you have complex user interfaces its easier to break up this ui into pieces and separate the business logic into those pieces. And that's what are componentes UI pieces that we can put them together to build an user interface.
<br>

## Benefits Behind components:
* ### Reusability
    * Dont repeat yourself
* ### Separation of concerns
    * Don't do too many things in one and the same place (function)
<br>

## How is a component build ?
### React is a framework for build web user interfaces, and to create web frontend we just need:
* ### HTML
* ### CSS
* ### Javascript
### And that's how components are built in react. A component that has these 3 files that handle the layout structure (html), styling (css) and the dinamic (js).
<br>

## Declarative Approach
### With react we dont need to tell that certain html element should be created/inserted in certain place as we do with js writing all DOM instructions by our own. Instead we'll always define the desire end state and its react job to figure out wich element should be rendered

## Components
### Components are the core building block of React apps. Actually, React really is just a library for creating components in its core.
<br>

### A typical React app therefore could be depicted as a component tree - having one root component ("App") and then an potentially infinite amount of nested child components.
<br>

### Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM in the end.
<br>

## Functional x Classes Components
### React has as pattern the creation of functional components but you have the choice between two different ways (nobody uses classes components anymore we're seeing it just for educational purpose).
### The main diference between them are the paradigm, classes components works as oop js and functional components are functional programming.
<br>

## Class components
* ### class-based components (also referred to as "containers", "smart" or "stateful" components
* ### The class components structure consists in inherit React.component from react, create a constructor where we receive our props and create our attributes (variables and functions), render() render our jsx and we handle the lifecycle with the old lifecycle hooks
````
import React, {Component} from 'react';

export default class MinhaClasse extends Component {
	constructor(props) {
		super(props);
		this.state = {counter: 0};
		this.handleClick = this.handleClick.bind(this);
	}
	function handleClick() {
	
	}
}

import React from 'react';

class MinhaClasse extends React.component{
	render(){
		return <h1>Hello, {this.prop.name}</h1>
	}
}
````
<br>

## Functional Components
* ### Functional components (also referred to as "presentational", "dumb" or "stateless" components
* ### Are much simpler than class components we just have functions that receive props and return some jsx dealing with the lifecycle using hooks whenever is needed
````
import React, { useState } from "react";

export const App() => {
	// estado inicial, estado alterado
	// e iniciamos o valor inicial
	const [usuarios, setUsuarios] = useState(["Joao", "Mateus", "Morais"])
	return(
		<>
			<div>
				{usuarios.map((item) => {
					<p>{item}</p>
				})}
			</div>
		</>
	)
}

````
 (using ES6 arrow functions as shown here is recommended but optional)

