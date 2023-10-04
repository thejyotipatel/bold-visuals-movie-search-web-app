import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About, Book, Error, HomeLayout, Landing, NewsLatter } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'book',
        element: <Book />,
      },
      {
        path: 'newslatter',
        element: <NewsLatter />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },

  {
    path: 'error',
    element: <Error />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
