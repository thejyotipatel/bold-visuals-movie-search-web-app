import errorImg from '../assets/404-Error.svg'
const Error = () => {
  return (
    <>
      <div className='error-page'>
        <div className='error-center'>
          <img src={errorImg} alt='' className='error-img img' />
        </div>
      </div>
    </>
  )
}
export default Error
