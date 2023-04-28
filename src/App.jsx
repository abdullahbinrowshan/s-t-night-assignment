import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Statistics from './Pages/Statistics';
import Blog from './Pages/Blog';
import Topics from './Pages/Topics';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics />
        },
        {
          path: '/statistics',
          element: <Statistics />
        },
        {
          path: '/blog',
          element: <Blog />
        }
      ]
    },
  ]);



  return (
    <RouterProvider router={router} />
  )
}

export default App
