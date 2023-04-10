import React from "react";

const Blog = () => {
  return (
    <div className="m-10">
      <h2 className=" text-lg font-bold">
        1. When should you use context API?
      </h2>
      <p className=" font-semibold">
        Ans. <br />
        The Context API in React should be used when data or state needs to be
        shared between multiple components that are not directly connected
        through props. Context API provides a way to pass data through the
        component tree without the need to pass props down manually at every
        level. It simplifies the management of shared state and makes it more
        efficient to update multiple components that rely on the same data.
        Context API can also be used when there is a need for global state
        management in a React application.
      </p>
      <br />
      <h2 className=" text-lg font-bold">2. What is custom hook in react?</h2>
      <p className=" font-semibold">
        Ans. <br />
        In React, a custom hook is a JavaScript function that starts with the
        use prefix and allows you to extract some logic from a component and
        share it across multiple components. Custom hooks allow you to reuse
        stateful logic, such as handling form input, fetching data from an API,
        or subscribing to browser events, without repeating code. Custom hooks
        use other hooks inside them to access the core React features like
        state, lifecycle methods, and context. You can create your custom hook
        to abstract complex functionality into a reusable and composable
        function that can be easily shared between different components.
      </p>
      <br />
      <h2 className=" text-lg font-bold">3. what useRef in react?</h2>
      <p className=" font-semibold">
        Ans. <br />
        useRef is a hook in React that returns a mutable ref object. It can be
        used to get a reference to a DOM element, store a value that persists
        between renders, and other purposes.
      </p>
    </div>
  );
};

export default Blog;
