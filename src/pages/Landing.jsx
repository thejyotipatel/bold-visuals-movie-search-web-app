import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import ImageList from '../components/ImageList'
const URL = 'https://api.unsplash.com/search/photos/?client_id='
export const loader = async () => {
  const searchTearm = 'cat'
  const response = await axios.get(
    `${URL}${import.meta.env.VITE_CLIENT_ID}&query=${searchTearm}`
  )

  return { images: response.data.results, searchTearm }
}
const Landing = () => {
  const { images } = useLoaderData()
  return (
    <>
      <div className='landing-center'>
        <ImageList images={images} />
      </div>
    </>
  )
}
export default Landing
