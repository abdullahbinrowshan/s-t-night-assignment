import React from 'react'

const Blog = () => {
    return (
        <div className='container mx-auto space-y-12 w-11/12 my-24'>
            <div>
                <h3 className='text-2xl ml-2 mb-4 font-semibold text-yellow-100'><span className='font-extrabold'>Question:</span> What is the purpose of React router?</h3>
                <p>
                    <b>Answer:</b> React Router is a library for React that provides a way to handle routing in a web application. The purpose of React Router is to help us build single-page applications (SPAs) that can have multiple views, or "pages," without the need for a full page reload.
                    <br />
                    <br />
                    With React Router, we can define routes for different views of their application, and then handle the navigation between those views in a way that is seamless for the user. React Router uses a declarative approach, where we define the routes and the corresponding components that should be rendered for each route.
                    <br />
                    <br />
                    React Router also provides a range of features for more advanced use cases, such as nested routes, dynamic routing, and handling browser history. By using React Router, we can build complex SPAs that feel like traditional multi-page applications, while still providing a smooth and responsive user experience.
                </p>
            </div>
            <div>
                <h3 className='text-2xl ml-2 mb-4 font-semibold text-yellow-100'><span className='font-extrabold'>Question:</span>  How does context API work?</h3>
                <p>
                    <b>Answer:</b> Context API in React is a way to manage global state that can be accessed by any component within a certain scope without having to pass props down the component tree.
                    <br />
                    <br />
                    To use the Context API, you define a context object that holds the shared state, and then wrap the components that need access to that state with a Context Provider component. The Provider component passes the state down to the child components via a special prop called value.
                    <br />
                    <br />
                    The child components that need access to the shared state can then access the value prop using the useContext hook. This hook returns the current value of the context and re-renders the component whenever the context value changes.
                    <br />
                    <br />
                    By using the Context API, you can avoid prop drilling and make it easier to manage state that needs to be accessed by multiple components.
                </p>
            </div>
            <div>
                <h3 className='text-2xl ml-2 mb-4 font-semibold text-yellow-100'><span className='font-extrabold'>Question:</span> What is useRef in React?</h3>
                <p>
                    <b>Answer:</b> useRef is a hook in React that returns a mutable ref object. The ref object can hold a value that persists between renders and can be accessed and modified by the component.
                    <br />
                    <br />
                    useRef can be used to access the underlying DOM node or to store any mutable value that doesn't trigger a re-render when changed. For example, you can use useRef to store a value that needs to be updated in an event listener or a timer.
                    <br />
                    <br />
                    useRef can also be used to store a reference to a child component, allowing you to call methods or access properties of the child component directly from the parent.
                    <br />
                    <br />
                    Overall, useRef provides a way to store and access mutable values that don't trigger a re-render, making it useful for a variety of scenarios in React development.
                </p>
            </div>
        </div>
    )
}

export default Blog