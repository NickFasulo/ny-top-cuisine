import home from "../../src/screens/home.css"
import { getRestaurants } from "../services/restaurants.js"
import { useEffect, useState } from "react";
import axios from 'axios'


export default function Home() {
  const [home, setHome] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    const allRestaurants = await getRestaurants();
    setHome(allRestaurants);
  };



  return (
    <div>
      <h1>New York Top Cuisine</h1>
      <div className="rest-container">
        {home.map((restData) => (
          <>
            <img className="image" src={restData.logo_photos} />
            <h1>{restData.name}</h1>
            <h3>Rating: {restData.weighted_rating_value}</h3>
            <h4>City: {restData.address.city}, {restData.address.state}</h4>

          </>
        ))
        }
      </div>
    </div>
  )
}







// export default function Characters() {
//   const [characters, setCharacters] = useState([]);

//   useEffect(() => {
//     fetchCharacters();
//   }, []);

//   async function fetchCharacters() {
//     const allCharacters = await getCharacters();
//     setCharacters(allCharacters);
//   }

//   return (
//     <div>
//       <h1>All Characters</h1>
//       {characters.map((charData) => (
//         <Character character={charData} key={charData._id} />
//       ))}
//     </div>