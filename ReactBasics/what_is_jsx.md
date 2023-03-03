# What is JSX ?
### Created by the development team of react, JSX its the way we can create our HTML template in react. Its basically html written with javascript, JSX its not interpreted by the browser so we need a transpiler as babel.
<br>

# Why JSX ?
### This is a topic on react docs that explain more about the decision of create markups for templates with javascript.
<br>

### So, React adopts the fact that render lógic its inside other UI logics as events, state and how the datas its prepared for render.
### And as we saw react is built upon based on components, and thats the core concept and why they decided to write markup with javascript. Instead of split the technologies react split concepts, concepts that handle the use case logic with all the tools that will be nedded inside it.
<br>

## Exemplos de implementacao do jsx: 
````
const name = "joao"
const headingOne = <h1>Hello, {name}</h1>

const element = <img src={user.avatarUrl}></img>;
````
* Here we created two variables one that store a name and other that is a sentence with the created name. You can interpolate variables with html just using this bracket syntax.
<br>

### And its posible to write everything in js inside those brackets
