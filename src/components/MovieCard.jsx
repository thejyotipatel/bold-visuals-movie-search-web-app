import { Link } from 'react-router-dom'

const MovieCard = ({ item }) => {
  const { id, title, slug, medium_cover_image } = item
  return (
    <div className='movie-card'>
      <div className='img-container'>
        <img src={medium_cover_image} alt={slug || title} className='img' />
      </div>
      <div className='img-footer'>
        <p>{title}</p>
        <Link to={`/movie/${id}`} className='btn'>
          Movie details
        </Link>
      </div>
    </div>
  )
}
export default MovieCard
