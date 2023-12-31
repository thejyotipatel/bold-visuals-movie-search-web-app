import { NavLink } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const menuToggle = () => {
    setMenu(!menu)
  }
  return (
    <>
      <div className='nav-center  '>
        <div className=' container nav-container'>
          <NavLink to='/' className='logo'>
            Bold Visuals
          </NavLink>

          <div className='nav-links'>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
            <NavLink to='/about' className='nav-link'>
              About
            </NavLink>

            <NavLink to='/newsLatter' className='nav-link'>
              NewsLatter
            </NavLink>
          </div>

          <button className='menu-logo btn' onClick={menuToggle}>
            {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>

          {menu && (
            <div className='nav-mobiles'>
              <NavLink to='/' className='nav-mobile' onClick={menuToggle}>
                Home
              </NavLink>
              <NavLink to='/about' className='nav-mobile' onClick={menuToggle}>
                About
              </NavLink>

              <NavLink
                to='/newsLatter'
                className='nav-mobile'
                onClick={menuToggle}
              >
                NewsLatter
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default Navbar
