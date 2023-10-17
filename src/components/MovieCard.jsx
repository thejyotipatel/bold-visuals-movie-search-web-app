import { Link } from 'react-router-dom'

const MovieCard = ({ item }) => {
  const { id, title, slug, medium_cover_image } = item
  return (
    <div className='movie-card'>
      <div className='img-container'>
        <img src={medium_cover_image} alt={slug || title} className='img' />
      </div>
      <div className='img-footer'>
        <p className='text-neutral-500 fw-300 fs-400'>{title}</p>
        <Link
          to={`/movie/${id}`}
          className='btn  bg-accent-500 text-accent-100'
        >
          Movie details
        </Link>
      </div>
    </div>
  )
}
export default MovieCard
