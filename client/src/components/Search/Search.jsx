import './Search.css'

export default function Search({ onChange }) {
  return (
    <div className='search'>
      <input
        onChange={onChange}
        placeholder='Search restaurants...'
        type='search'
      />
    </div>
  )
}
