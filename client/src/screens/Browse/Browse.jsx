import { useEffect, useState } from 'react'
import { getRestaurants } from '../../services/restaurants'
import Restaurant from '../../components/Restaurant/Restaurant.jsx'
import Search from '../../components/Search/Search.jsx'
import ScrollToTop from 'react-scroll-to-top'
import './Browse.css'

export default function Browse() {
  const [restaurants, setRestaurants] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [loading, isLoading] = useState(true)

  useEffect(() => {
    fetchRestaurants()
    isLoading(false)
  }, [])

  async function fetchRestaurants() {
    const allRestaurants = await getRestaurants()
    setRestaurants(allRestaurants)
  }

  const searchItems = searchValue => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = restaurants.filter(item => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    } else {
      setFilteredResults(restaurants)
    }
  }

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className='browse'>
      <h1>Search New York's Top Restaurants</h1>
      <Search onChange={e => searchItems(e.target.value)} />
      <main>
        {searchInput.length > 1
          ? filteredResults.map(restaurant => {
              return <Restaurant restaurant={restaurant} key={restaurant._id} />
            })
          : restaurants.map(restaurant => {
              return <Restaurant restaurant={restaurant} key={restaurant._id} />
            })}
      </main>
      <ScrollToTop className='scroll-top' smooth />
    </div>
  )
}
