import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from './About'
import Footer from '../components/Footer'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <>
      <Navbar />
      <div className='container'>
        {isPageLoading ? (
          <div className='loading-center'>
            <div className='loading-spanner' />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
    </>
  )
}
export default HomeLayout
