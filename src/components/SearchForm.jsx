import { Form, useNavigation } from 'react-router-dom'

const SearchForm = ({ searchTearm }) => {
  const navigation = useNavigation()
  const isSubmiting = navigation.state === 'submitting'
  return (
    <>
      <div className='search-forn-center'>
        <Form className='form-search'>
          <input
            type='text'
            name='search'
            id='search'
            defaultValue={searchTearm}
            className='form-input'
            placeholder='Type here...'
          />
          <button type='submit' className='btn' disabled={isSubmiting}>
            {isSubmiting ? 'searching...' : 'search'}
          </button>
        </Form>
      </div>
    </>
  )
}
export default SearchForm
