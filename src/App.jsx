import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  About,
  Movie,
  Error,
  HomeLayout,
  Landing,
  NewsLatter,
  SinglePageError,
} from './pages'
import { loader as loadingLoader } from './pages/Landing'
import { loader as singleMovieLoader } from './pages/Movie'
import { action as newLatterAction } from './pages/NewsLatter'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 100 * 60 * 5,
    },
  },
})

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
        path: 'movie/:id',
        element: <Movie />,
        loader: singleMovieLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: 'newslatter',
        element: <NewsLatter />,
        action: newLatterAction,
        errorElement: <SinglePageError />,
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
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      {/* <Landing /> */}
    </>
  )
}

export default App
