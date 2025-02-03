In React Router Dom v6, a common mistake is incorrectly using the `useParams` hook inside a component that isn't a child of a route element defined with the `Route` component.  This will lead to `params` being `undefined`. For example:

```javascript
// Incorrect usage
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  // ...
}

// Correct usage
import { useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  // ...
}

function App() {
  return (
    <Routes>
      <Route path="/:id" element={<MyComponent/>}/>
    </Routes>
  );
}
```