import errorImg from '../assets/404-Error.svg'
const Error = () => {
  return (
    <>
      <div className='container'>
        <div className='error-center'>
          <img src={errorImg} alt='error...' className='error-img' />
        </div>
      </div>
    </>
  )
}
export default Error
