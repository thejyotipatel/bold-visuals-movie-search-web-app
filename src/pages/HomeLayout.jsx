import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from './About'
import Footer from '../components/Footer'

const HomeLayout = () => {
  return (
    <div className='container'>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  )
}
export default HomeLayout
