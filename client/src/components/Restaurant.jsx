import { Link } from 'react-router-dom'

export default function Restaurant({ restaurant }) {
  return (
    <div>
      <Link to={`/${restaurant._id}`}>
        <img src={restaurant.food_photos[0] || restaurant.logo_photos[0]} />
        <h2>{restaurant.name}</h2>
      </Link>
    </div>
  )
}
