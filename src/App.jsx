import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Statistics from './Pages/Statistics';
import Blog from './Pages/Blog';
import Topics from './Pages/Topics';
import Quizzes from './Pages/Quizzes';

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
          path: 'quiz-card/:quizId',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <Quizzes />
        },
        {
          path: '/statistics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
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
