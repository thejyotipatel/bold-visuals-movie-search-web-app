import { Link } from 'react-router-dom'

const ImageCard = ({ item }) => {
  const {
    id,
    alt_description,
    description,
    height,
    width,
    likes,
    created_at,
    urls,
  } = item
  return (
    <div className='image-card'>
      <div className='img-container'>
        <img src={urls?.full} alt={alt_description} className='img' />
      </div>
      <div className='img-footer'>
        <p className='text-neutral-500 fw-300 fs-400'>{alt_description}</p>
        <Link
          to={`/images/${id}`}
          className='btn  bg-accent-500 text-accent-100'
        >
          Image details
        </Link>
      </div>
    </div>
  )
}
export default ImageCard
