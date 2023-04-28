import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
  ]);



  return (
    <RouterProvider router={router} />
  )
}

export default App
