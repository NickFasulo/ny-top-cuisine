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
        {restaurant.name && (<> 
            <div className='detailBackground'></div>
        <div className='detailContainer'>
            <h1 className='detailTitle'>{restaurant.name}</h1>
            <div className='detailImgBox'>
            <img src={restaurant?.logo_photos} alt={restaurant?.name} className='detailImg'/>
            <h4>
                <ul className='detailHoursList'>
                <li className='detailHours'>{`Monday: ${restaurant?.local_hours.operational.Monday}`}</li>
                <li className='detailHours'>{`Tuesday: ${restaurant?.local_hours.operational.Tuesday}`}</li>
                <li className='detailHours'>{`Wednesday: ${restaurant?.local_hours.operational.Wednesday}`}</li>
                <li className='detailHours'>{`Thursday: ${restaurant?.local_hours.operational.Thursday}`}</li>
                <li className='detailHours'>{`Friday: ${restaurant?.local_hours.operational.Friday}`}</li>
                <li className='detailHours'>{`Saturday: ${restaurant?.local_hours.operational.Saturday}`}</li>
                <li className='detailHours'>{`Sunday: ${restaurant?.local_hours.operational.Sunday}`}</li>
                </ul>
            </h4>
            </div>
            <ul className='detailCuisines'>
                <h2 className='cuisineTitle'>Cuisines</h2>
                {restaurant?.cuisines.map((cuisine) => (
                <li className='detailCuisineList'>{cuisine}</li>
            ))}</ul>
            <div className='infoDetail'>
            <h2 className='cuisineTitle'>Restaurant Info</h2>
            <ul>
                <li className='detailCuisineList'>{`Street Address: ${restaurant.address.street_addr}`}</li>
                <li className='detailCuisineList'>{`Location: ${restaurant.address.city}`}</li>
                <li className='detailCuisineList'>{`Zipcode: ${restaurant.address.zipcode}`}</li>
                <li className='detailCuisineList'>{`Phone: ${restaurant.phone_number}`}</li>
                <li className='detailCuisineList'>{`Price Rating: 💰${restaurant.dollar_signs}`}</li>
                <li className='detailCuisineList'>{`Rating: ⭐${restaurant.weighted_rating_value}`}</li>
            </ul>
            </div>
            <div className='aiBox'>

            </div>
        </div>
        </>)}

    </>
  )
}
