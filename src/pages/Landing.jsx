import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import ImageList from '../components/ImageList'
const URL =
  'https://api.unsplash.com/search/photos/?client_id=DzjfH-k4tEXim4zXbRybaxH9VIKu55a4hKQ5cxKIrT4&query='
export const loader = async () => {
  const searchTearm = 'cat'
  const response = await axios.get(`${URL}${searchTearm}`)

  return { images: response.data.results, searchTearm }
}
const Landing = () => {
  const { images, searchTearm } = useLoaderData()
  return (
    <>
      <div className='landing-center'>
        <ImageList images={images} />
      </div>
    </>
  )
}
export default Landing
