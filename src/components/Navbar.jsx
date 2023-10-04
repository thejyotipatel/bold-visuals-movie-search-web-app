import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='nav-center'>
        <NavLink to='/' className='logo fs-700 fw-600 text-accent-500'>
          BookMaster
        </NavLink>

        <div className='nav-links'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
          <NavLink to='/about' className='nav-link'>
            About
          </NavLink>
          <NavLink to='/book' className='nav-link'>
            Book
          </NavLink>
          <NavLink to='/newsLatter' className='nav-link'>
            NewsLatter
          </NavLink>
        </div>
      </div>
    </>
  )
}
export default Navbar
