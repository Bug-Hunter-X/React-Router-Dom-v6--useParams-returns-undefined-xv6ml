# React Router Dom v6: useParams Hook Issue
This repository demonstrates a common error when using the `useParams` hook in React Router Dom v6.  The `useParams` hook only functions correctly when used within a component that is a direct child of a `Route` component that defines a route parameter in its `path` prop.  Incorrect usage leads to `useParams` returning an empty object, resulting in undefined parameter values.

The `bug.js` file shows the incorrect implementation, while `bugSolution.js` provides the corrected version.