import { NavLink } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  return (
    <>
      <div className='nav-center'>
        <NavLink to='/' className='logo fs-700 fw-600 text-accent-500'>
          Bold Visuals
        </NavLink>

        <div className='nav-links'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
          <NavLink to='/about' className='nav-link'>
            About
          </NavLink>
          <NavLink to='/images' className='nav-link'>
            Images
          </NavLink>
          <NavLink to='/newsLatter' className='nav-link'>
            NewsLatter
          </NavLink>
        </div>

        <button
          className='menu-logo btn text-accent-500 fs-700 fw-700'
          onClick={() => setMenuToggle(!menuToggle)}
        >
          {menuToggle ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {menuToggle && (
          <div className='nav-mobiles'>
            <NavLink to='/' className='nav-mobile'>
              Home
            </NavLink>
            <NavLink to='/about' className='nav-mobile'>
              About
            </NavLink>
            <NavLink to='/images' className='nav-mobile'>
              Images
            </NavLink>
            <NavLink to='/newsLatter' className='nav-mobile'>
              NewsLatter
            </NavLink>
          </div>
        )}
      </div>
    </>
  )
}
export default Navbar
