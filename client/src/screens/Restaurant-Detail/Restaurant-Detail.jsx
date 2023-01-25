import { useState,useEffect } from 'react'
import './Restaurant-Detail.css'
import { useParams } from 'react-router-dom'
import { getRestaurant } from '../../services/restaurants'

export default function RestaurantDetail() {
    const [restaurant,setRestaurant] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetchRestaurants()
    }, [])

    const fetchRestaurants = async() => {
        const oneRest = await getRestaurant(id)
        setRestaurant(oneRest)
    }


  return (
    <>Restaurant-Detail
    
    </>
  )
}
