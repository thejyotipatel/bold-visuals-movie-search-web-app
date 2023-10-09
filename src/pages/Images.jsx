import { useLoaderData, Link, Navigate } from 'react-router-dom'
import axios from 'axios'
const SingleImgURL = 'https://api.unsplash.com/photos/'
export const loader = async ({ params }) => {
  const { id } = params
  const { data } = await axios.get(
    `${SingleImgURL}${id}?client_id=${import.meta.env.VITE_CLIENT_ID}`
  )

  return { id, data }
}

const Images = () => {
  const { data } = useLoaderData()

  if (!data) return <Navigate to={'/'} />

  const { alt_description, description, height, width, urls, user, links } =
    data

  return (
    <>
      <div className='container'>
        <div className='img-card-center'>
          <Link to={'/'} className='btn'>
            Back home
          </Link>

          <div className='card-container'>
            <div className='card-img'>
              <img src={urls?.full} alt={alt_description} className=' img' />
            </div>

            <div className='card-info'>
              <p>
                <span>Width :</span>
                {width}px
              </p>
              <p>
                <span>Height :</span>
                {height}px
              </p>

              <p>
                <span>created at by user :</span>
                <a
                  href={user?.links?.html}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='$ '
                >
                  {user?.name}
                </a>
              </p>

              <p>
                <span>description :</span>
                {description}
              </p>
              <a
                href={links?.html}
                target='_blank'
                rel='noopener noreferrer'
                className=' '
              >
                Link to unsplash Image
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Images
