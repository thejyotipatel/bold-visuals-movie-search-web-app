import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import MovieList from '../components/MovieList'
// import SearchForm from '../components/SearchForm'

const URL = 'https://yts.mx/api/v2/list_movies.json?quality=3D'

export const loader = async ({ request }) => {
  // const url = new URL(request.url)

  // const searchTearm = url.searchParams.get('search') || 'book'
  const { data } = await axios.get(`${URL}`)
  // const response = await axios.get(
  //   `${URL}${import.meta.env.VITE_CLIENT_ID}&query=${searchTearm}`
  // )
  // console.log(data.data.movies)
  return { movies: data.data.movies }
}
const Landing = () => {
  const { movies } = useLoaderData()
  return (
    <>
      {/* <SearchForm searchTearm={searchTearm} /> */}
      <div className='landing-center'>
        <MovieList movies={movies} />
      </div>
    </>
  )
}
export default Landing
