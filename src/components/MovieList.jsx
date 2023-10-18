import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
  if (!movies) {
    return <h3>No movie found...</h3>
  }
  return (
    <>
      <div className='movie-list'>
        {movies.map((item) => {
          return <MovieCard key={item.id} item={item} />
        })}
      </div>
    </>
  )
}
export default MovieList
