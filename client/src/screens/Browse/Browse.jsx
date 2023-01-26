import { useEffect, useState } from 'react'
import { getRestaurants } from '../../services/restaurants'
import Restaurant from '../../components/Restaurant/Restaurant.jsx'
import Search from '../../components/Search.jsx'
import './Browse.css'

export default function Browse() {
  const [restaurants, setRestaurants] = useState([])
  const [loading, isLoading] = useState(true)

  useEffect(() => {
    fetchRestaurants()
    isLoading(false)
  }, [])

  async function fetchRestaurants() {
    const allRestaurants = await getRestaurants()
    setRestaurants(allRestaurants)
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
      <Search />
      <main>
        {restaurants.map(restaurant => (
          <Restaurant restaurant={restaurant} key={restaurant._id} />
        ))}
      </main>
    </div>
  )
}
