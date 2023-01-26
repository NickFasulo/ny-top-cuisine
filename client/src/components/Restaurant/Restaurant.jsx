import { Link } from 'react-router-dom'
import './Restaurant.css'

export default function Restaurant({ restaurant }) {
  return (
    <div className='rest-card'>
      <Link to={`/${restaurant._id}`}>
        <img src={restaurant.food_photos[0] || restaurant.logo_photos[0]} />
        <div className='rest-card-body'>
          <h3>{restaurant.name}</h3>
        </div>
      </Link>
    </div>
  )
}
