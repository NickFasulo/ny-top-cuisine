import { useEffect, useState } from 'react'
import { getRestaurants } from '../../services/restaurants'
import Restaurant from '../../components/Restaurant/Restaurant.jsx'
import Search from '../../components/Search/Search.jsx'
// import Filter from '../../components/Filter/Filter.jsx'
import ScrollToTop from 'react-scroll-to-top'
import './Browse.css'

export default function Browse() {
  // const [selected, setSelected] = useState([])
  const [restaurants, setRestaurants] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [loading, isLoading] = useState(true)
  const [searchInput, setSearchInput] = useState('')

  // const sortItems = (items) => {
  //   items.sort((a, b) => a - b)
  // }

  useEffect(() => {
    fetchRestaurants()
    isLoading(false)
  }, [])

  const fetchRestaurants = async () => {
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
      {/* <Filter value={selected} onChange={setSelected} /> */}
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
