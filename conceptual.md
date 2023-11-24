### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - React router is a way to provide client-side routing for the user
  - It is typically used for single-page applications
  - An initial route is served up from the server to the client. 
  - After that, with React Routers, the user goes to different routes (ie. a new URL) but the page never refreshes (ie. makes an HTTP request for a new route)
  - This makes the app run more smoothly for the user as routes are provided on the client-side, however, the user still has url routes so they can share and bookmark pages, and use back and forward keys in browser

- What is a single page application?
  - A single page application is a web app that gets served up from server once, at initial load, and then after that, are no page loads

- What are some differences between client side and server side routing?
  - With client-side routing, GET requests are not made to the server with each new route. Rather, the routing is done from the browser
  - With server-side routing, 

- What are two ways of handling redirects with React Router? When would you use each?
   1) Using "Navigate" component (previously "Redirect" component)
      1) import from react-router-dom
      2) pass the Navigate component as an element prop for a Route component, specifying whichever route you want the user to be redirected from
      3) Within the Navigate component, within the "to" prop, specify the route to which the user should be re-routed to

  2) Using the browser's .push method on the history object or react-router-dom's useHistory hook
     1) import from react-router-dom
     2) instantiate useHistory() to a variable
     3) the variable has a push() method. Pass the route you want user to be re-directed to within this method

- What are two different ways to handle page-not-found user experiences using React Router? 
   1) Create a PageNotFound Component

   

- How do you grab URL parameters from within a component using React Router?
  1) Make the path within a Route component dynamic by adding ":" then name of the parameter
  2)  Import the useParams hook from react-router-dom
   3) Instantite useParams() to a variable, which is an object
   4) The param value can be accessed on this object where the key is the param name
   
- What is context in React? When would you use it?
  - Context is a way to share data amongst components without having to prop drill
  - Allows for less repitition in code and useful for things like global themes
  1) Create a Context in a separate file
  2) Within this file, instantiate a Context variable with React.createContext() and export default
  3) Import this context variable to the component where you want it
  4) Create a Context.provider component around the components that you want the context to be provided to
  5) Pass whatever data you want available in this context in the value property. Can only be a single element, but can be an object where multiple pieces of data are stored in each key
  6) Import useContext() hook within any component that's wrapped within the Provider component to "subscribe" to the context data in this component (aka Consumer)
  7) Instantiate the useContext() hook, and pass the Context component into it. The data will be stored to this variable


- Describe some differences between class-based components and function components in React.
  - Class-based components are based on Javascript Classes while functional components are functions
  - CLass-based components follow the same sort of structure of a jS component whereby it will have various methods attached to it including constructor, but also component-related methods like Render, and other lifecycle methods
  - Class-based components manage state using this.state, while functional components use the hook useState()
  - Class-based components had lifecycle methods like componentDiDmount, componentDidUpdate, componentWillUnmount. functional components use useEffect
  - props are accessed via this.props for Class-based components, while they are passed directly as arguments in functional components
  - 


- What are some of the problems that hooks were designed to solve?
  - Hooks are a way to "hook" into React state and lifecycle features. Prior to hooks, you could not do this with functional components
  - 