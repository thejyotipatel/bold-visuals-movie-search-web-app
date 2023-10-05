import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='footer footer-center p-4   text-base-content'>
        <div className='footer-links'>
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
        <div className='footer-icons'></div>
        <aside>
          <p>
            Get code on Github-{' '}
            <a
              href='https://github.com/thejyotipatel/bookmaster'
              target='_blank'
              rel='noopener noreferrer'
              className='footer-link'
            >
              @thejyotipatel
            </a>
          </p>
        </aside>
      </footer>
    </>
  )
}
export default Footer
