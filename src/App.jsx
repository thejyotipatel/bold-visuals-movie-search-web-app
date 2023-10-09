import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  About,
  Images,
  Error,
  HomeLayout,
  Landing,
  NewsLatter,
  SinglePageError,
} from './pages'
import { loader as loadingLoader } from './pages/Landing'
import { loader as singleImagesLoader } from './pages/Images'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: loadingLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: 'images/:id',
        element: <Images />,
        loader: singleImagesLoader,
        errorElement: <SinglePageError />,
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
    path: '*',
    element: <Error />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
