import { useEffect, useState } from 'react'
import { getRestaurants } from '../../services/restaurants'
import Restaurant from '../../components/Restaurant/Restaurant.jsx'
import Search from '../../components/Search/Search.jsx'
import './Browse.css'

export default function Browse() {
  const [loading, isLoading] = useState(true)
  const [restaurants, setRestaurants] = useState({
    query: '',
    list: []
  })

  const handleChange = e => {
    const results = restaurants.filter(restaurant => {
      if (e.target.value === '') return restaurants
      return restaurant.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    })

    setstate({
      query: e.target.value,
      list: results
    })
  }

  async function fetchRestaurants() {
    const allRestaurants = await getRestaurants()

    setRestaurants({
      // query: e.target.value,
      list: allRestaurants
    })
  }

  useEffect(() => {
    fetchRestaurants()
    isLoading(false)
  }, [])

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
      <Search />
      <main>
        {restaurants.list.map(restaurant => (
          <Restaurant restaurant={restaurant} key={restaurant._id} />
        ))}
      </main>
    </div>
  )
}
