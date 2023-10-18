import { useLoaderData, Link, useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
const SingleImgURL = 'https://yts.mx/api/v2/movie_details.json'

const singleMovieQuery = (id) => {
  return {
    queryKey: ['movie', id],
    queryFn: async () => {
      const { data } = await axios.get(`${SingleImgURL}?movie_id=${id}`)

      return data
    },
  }
}
export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params

    await queryClient.ensureQueryData(singleMovieQuery(id))
    return { id }
  }

const Movie = () => {
  const { id } = useLoaderData()
  const { data } = useQuery(singleMovieQuery(id))

  const navigate = useNavigate()
  const movie = data.data.movie

  if (!movie) return <Navigate to={'/'} />

  const {
    large_cover_image,
    language,
    description_full,
    rating,
    year,
    title_long,
    genres,
    runtime,
    mpa_rating,
    slug,
  } = movie

  return (
    <>
      <div className='container'>
        <div className='movie-card-center'>
          <button onClick={() => navigate(-1)} className='btn'>
            Back home
          </button>
          <h1 className='movie-title'>{title_long}</h1>
          <div className='card-container'>
            <div className='card-img'>
              <img src={large_cover_image} alt={slug} className='img' />
            </div>

            <div className='card-info'>
              <p>
                <span>Year :</span>
                {year}
              </p>
              <p>
                <span>runtime :</span>
                {runtime}min
              </p>

              <p className='lang'>
                <span>language :</span>
                {language}
              </p>

              <p>
                <span>rating:</span>
                {rating}
              </p>

              <p>
                <span>MPA rating :</span>
                {mpa_rating}
              </p>

              <p>
                <span>genres :</span>
                {genres.join(', ')}
              </p>

              <p className='desc'>
                <span>description :</span>
                {description_full
                  ? `${description_full.substring(0, 500)}...`
                  : ''}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Movie
