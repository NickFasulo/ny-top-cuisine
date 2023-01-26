import { useState,useEffect } from 'react'
import './Restaurant-Detail.css'
import { useParams,useNavigate } from 'react-router-dom'
import { getRestaurant, deleteRestaurant } from '../../services/restaurants'
import { Configuration, OpenAIApi } from "openai";
// import dotenv from 'dotenv'


export default function RestaurantDetail() {
    // dotenv.config()
    const [restaurant,setRestaurant] = useState({})
    const [ai,setAI] = useState()
    const { id } = useParams()
    const navigate = useNavigate()
    const [loading, isLoading] = useState(true)
    const configuration = new Configuration({
        apiKey: process.env.OPEN_API_KEY,
      });
    const openai = new OpenAIApi(configuration);
    const completion = async() => {
        const complete = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Tell me why you love ${restaurant.name} food so much. They serve ${restaurant.cuisines[0]}, ${restaurant.cuisines[1]} and ${restaurant.cuisines[2]}`,
            temperature: 0.6,
            max_tokens: 99,
      })
      setAI(complete.data.choices[0].text)
      return complete.data.choices[0].text
    }

    useEffect(() => {
        fetchRestaurant()
        isLoading(false)
        console.log()
    }, [])

    const HandleAI = () => {
        completion()
    }

    const fetchRestaurant = async() => {
        const oneRest = await getRestaurant(id)
        setRestaurant(oneRest)
    }
    const deleteRestaurants = async() => {
        await deleteRestaurant(id)
        navigate(`/browse`, { replace: true });
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
            <button className='detailButtons'>Edit Restaurant</button>
            <button className='detailButtons'>Delete Restaurant</button>
            </div>
            <h2 className='cuisineTitle' id='aiTitle'>{`Why NYTC Loves ${restaurant.name}`}</h2>
            <div className='aiBox'>
                <p className='aiText'>{ai}</p>
            </div>
            <button className='detailButtons' onClick={HandleAI}>Generate LOVE</button>
        </div>
        </>)}

    </>
  )
}
