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

### A typical React app therefore could be depicted as a component tree - having one root component ("App") and then an potentially infinite amount of nested child components.

### Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM in the end.

### JSX is NOT HTML but it looks a lot like it. Differences can be seen when looking closely though (for example className in JSX vs class in "normal HTML"). JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.

### When creating components, you have the choice between two different ways:

* ### Functional components (also referred to as "presentational", "dumb" or "stateless" components - more about this later in the course) => const cmp = () => { return <div>some JSX</div> } (using ES6 arrow functions as shown here is recommended but optional)

* ### class-based components (also referred to as "containers", "smart" or "stateful" components) => class Cmp extends Component { render () { return <div>some JSX</div> } }
<br>

