import { useState,useEffect } from 'react'
import './Restaurant-Detail.css'
import { useParams,useNavigate } from 'react-router-dom'
import { getRestaurant, deleteRestaurant } from '../../services/restaurants'

export default function RestaurantDetail() {
    const [restaurant,setRestaurant] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()
    const [loading, isLoading] = useState(true)

    useEffect(() => {
        fetchRestaurant()
        isLoading(false)
    }, [])

    const fetchRestaurant = async() => {
        const oneRest = await getRestaurant(id)
        setRestaurant(oneRest)
    }
    const deleteRestaurants = async() => {
        await deleteRestaurant(id)
    }

    if (loading) {
        return (
          <div>
            <h1>Loading...</h1>
          </div>
        )
      }

  return (
    <>
        <div className='detailBackground'></div>
        <div className='detailContainer'>
            <img src={restaurant?.logo_photos} alt={restaurant?.name} className='detailImg'/>
        </div>

    </>
  )
}
