import './Search.css'

export default function Search({ onChange }) {
  return (
    <form>
      <input
        onChange={onChange}
        placeholder='Search restaurants...'
        type='search'
      />
    </form>
  )
}
