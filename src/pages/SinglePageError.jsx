import { useRouteError } from 'react-router-dom'
const SinglePageError = () => {
  const error = useRouteError()
  return <h4 style={{ margin: '2rem 0' }}>{error.message}</h4>
}
export default SinglePageError
