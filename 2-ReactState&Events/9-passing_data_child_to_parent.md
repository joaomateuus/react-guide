# Passing data from child to parent components
### We already saw that we can pass data to child components through props, but how can we pass from bottom to up. I will see that here
<br>

## How does it works ?
### We can replicate the event listener pattern, as we saw we set an onChange that will be listening the user input. Looking in this way we can set a prop to parent from child that point to a function that we deal with the value in the parent.
### And in the child you receive this function as props and call it passing the value as a parameter, when the function its executed in the child it will triger in the parent and you can manipulate the value that you received as an argument

* ### Parent
    ````

    export const app = () => {
        const handlingData(new_data) => {
            console.log(newData);
        }
        
        return (
            <div>
                <Card getData={handlingData}  />
            </div>
        )
    }
    ````
* ### Child
    ````

    export const app = ({getData}) => {
        
        const handleFormSubmit = () => {
            const ourData = {
                id: 1,
                nome: "joao",
                cidade: "manaus"
            }
            
            getData(ourData);
        }
        
        return (
            <div>
                // some jsx here
            </div>
        )
    }
    ````
   
    