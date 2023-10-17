import { useLoaderData, Link, Navigate } from 'react-router-dom'
import axios from 'axios'
const SingleImgURL = 'https://yts.mx/api/v2/movie_details.json'
export const loader = async ({ params }) => {
  const { id } = params
  const { data } = await axios.get(`${SingleImgURL}?movie_id=${id}`)
  console.log(data.data.movie)
  return { id, movie: data.data.movie }
}

const Movie = () => {
  const { movie } = useLoaderData()

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
          <Link to={'/'} className='btn'>
            Back home
          </Link>
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

              <p>
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
              <p className='desc'>
                <span>description :</span>
                {description_full}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Movie
