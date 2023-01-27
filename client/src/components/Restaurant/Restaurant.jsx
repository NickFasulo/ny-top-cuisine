import { Link } from 'react-router-dom'
import './Restaurant.css'

export default function Restaurant({ restaurant }) {
  return (
    <div className='rest-card'>
      <Link to={`/${restaurant._id}`}>
        <img src={restaurant.logo_photos[0] || 'placeholder.jpg'} />
        <span>⭐ {Math.round(restaurant.weighted_rating_value * 10) / 10}</span>
        <div className='rest-card-body'>
          <h3>{restaurant.name}</h3>
        </div>
      </Link>
    </div>
  )
}
