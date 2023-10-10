import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import ImageList from '../components/ImageList'
import SearchForm from '../components/SearchForm'
const URL = 'https://api.unsplash.com/search/photos/?client_id='
export const loader = async ({ request }) => {
  const url = new URL(request.url)
  // console.log(url)
  const searchTearm = url.searchParams.get('search') || 'book'
  const response = await axios.get(
    `${URL}${import.meta.env.VITE_CLIENT_ID}&query=${searchTearm}`
  )

  return { images: response.data.results, searchTearm }
}
const Landing = () => {
  const { images, searchTearm } = useLoaderData()
  return (
    <>
      <SearchForm searchTearm={searchTearm} />
      <div className='landing-center'>
        <ImageList images={images} />
      </div>
    </>
  )
}
export default Landing
