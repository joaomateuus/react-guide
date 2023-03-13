# Controlled x Uncontroled & Stateless x Statefull 
### This is another popular way of classifying components, and the criteria for the classification is simple: components that have state and the components that don't. 
<br>

## Stateless Components
### The most basic type of react component is one without state. React components that are pure functions of their props and do not require any internal state management can be written as simple JavaScript functions. These are said to be Stateless Functional Components because they are a function only of props, without having any state to keep track of and always has the same input.
````
export const myComponent = ({name}) => {
    return(
        <>
            <div>
                <h1>Hello {name}</h1>
            </div>
        </>
    )
}
````

## Statefull Components
### They are the opposite of stateless components, that manages state and keep track of it being more dinamyc.
````
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increasingCount = () => {
    return setCount(count + 1)
  }
  const decreseCount = () => {
    return setCount(count - 1)
  }


  return (
    <div className='main-div'>
      <h1>{count}</h1>
      <div className='button-div'>
        <button onClick={increasingCount}>Increase Count</button>
        <button onClick={decreseCount}>Decerease Count</button>
      </div>
    </div>
  )
}

export default App
````