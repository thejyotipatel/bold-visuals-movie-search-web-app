const NewsLatter = () => {
  return (
    <div className='newlatter'>
      <div className='newlatter-center  '>
        <form className='form'>
          <h3>NewsLatter</h3>
          {/* name */}
          <div className='form-control'>
            <label htmlFor='name' className='form-label'>
              name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='form-input'
              defaultValue='max'
            />
          </div>
          {/* lastName */}
          <div className='form-control'>
            <label htmlFor='lastName' className='form-label'>
              last Name
            </label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              className='form-input'
              defaultValue='smith'
            />
          </div>
          {/* email */}
          <div className='form-control'>
            <label htmlFor='email' className='form-label'>
              email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              defaultValue='test@test.com'
              className='form-input'
            />
          </div>

          <button type='submit' className='btn'>
            send
          </button>
        </form>
      </div>
    </div>
  )
}
export default NewsLatter
