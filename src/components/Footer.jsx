const Footer = () => {
  return (
    <>
      <footer className='container footer'>
        {/* <div className='footer-links'>
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
        </div> */}
        {/* <div className='footer-icons'></div> */}
        <p>
          Get code on Github-
          <a
            href='https://github.com/thejyotipatel/bookmaster'
            target='_blank'
            rel='noopener noreferrer'
            className='text-accent-500'
          >
            @thejyotipatel
          </a>
        </p>
      </footer>
    </>
  )
}
export default Footer
