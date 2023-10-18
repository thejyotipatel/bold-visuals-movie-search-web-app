import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import MovieList from '../components/MovieList'
import SearchForm from '../components/SearchForm'
import { useQuery } from '@tanstack/react-query'

const ApiURL = 'https://yts.mx/api/v2/list_movies.json'

const getMoviesQuery = (searchTearm) => {
  return {
    queryKey: ['search', searchTearm || '3D'],
    queryFn: async () => {
      const { data } = await axios.get(`${ApiURL}?query_term=${searchTearm}`)
      return data
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url)

    const searchTearm = url.searchParams.get('search') || '3D'

    await queryClient.ensureQueryData(getMoviesQuery(searchTearm))

    return { searchTearm }
  }
const Landing = () => {
  const { searchTearm } = useLoaderData()
  const { data } = useQuery(getMoviesQuery(searchTearm))

  const movies = data.data.movies

  return (
    <>
      <SearchForm searchTearm={searchTearm} />
      <div className='landing-center'>
        <MovieList movies={movies} />
      </div>
    </>
  )
}
export default Landing
