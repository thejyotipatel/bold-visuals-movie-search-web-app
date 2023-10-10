import { Form, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  // console.log(data)
  if (data) toast.success('success check your email')
  return redirect('/')
}

const NewsLatter = () => {
  const navigation = useNavigation()
  const isSubmiting = navigation.state === 'submitting'

  return (
    <div className='newlatter'>
      <div className='newlatter-center  '>
        <Form className='form' method='POST'>
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
              required
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
              required
              name='email'
              id='email'
              defaultValue='test@test.com'
              className='form-input'
            />
          </div>

          <button type='submit' className='btn' disabled={isSubmiting}>
            {isSubmiting ? 'sending...' : 'send'}
          </button>
        </Form>
      </div>
    </div>
  )
}
export default NewsLatter
