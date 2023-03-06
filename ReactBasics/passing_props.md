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
### To pass props we have to name the props assign to a value and in the child component we consume the props setting it as parameters