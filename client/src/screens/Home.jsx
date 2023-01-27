  import "../../src/screens/home.css";
import "../components/navbar.css";
import {
  getRestaurants,
  getRestaurantRandom,
} from "../services/restaurants.js";
import { useEffect, useState } from "react";

export default function Home() {
  const [home, setHome] = useState([]);
  const [toggle, setToggle] = useState(0);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    fetchRestaurants();
    isLoading(false);
  }, [toggle]);

  async function fetchRestaurants() {
    const allRestaurants = await getRestaurants();
    setHome(allRestaurants);
  }

  function handleToggle() {
    setToggle((prev) => (prev = Math.floor(Math.random() * home.length)));
  }

  if (!home.length) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <br></br>
      <h1 className="nytc">New York Top Cuisine</h1>

      {
        <div>
            <div className="box">
              <br></br>
              <h2>Restaurants of the Day!</h2>

              <img className="image" src={home[toggle].logo_photos} />
              <h1>{home[toggle].name}</h1>
              <h3>Rating: {home[toggle].weighted_rating_value}</h3>
              <h4>
                City: {home[toggle].address.city}, {home[toggle].address.state}
              </h4>
            <button onClick={handleToggle}>next</button>
            <br></br>
            <br></br>
              <div id="iframe">
              <iframe width="100%" height="100%" src="https://biteable.com/watch/embed/3837562/992063e6c408f66d9f462189156722d5?mute=0&controls=0&autoplay=1&loop=1&playlist=3837562.992063e6c408f66d9f462189156722d5" autoPlay allowFullScreen></iframe> 
              
              </div>
            </div>
              <h1 className="llc">NYTC LLC</h1>
        
        </div>
      }
    </>
  );
}

// export default function Home() {
//   const [home, setHome] = useState([]);

//   useEffect(() => {
//     fetchRestaurants();
//   }, []);

//   async function fetchRestaurants() {
//     const allRestaurants = await getRestaurants();
//     setHome(allRestaurants);
//   };

//   return (
//     <div>
//       <h1>New York Top Cuisine</h1>
//       <div className="rest-container">
//         {home.map((restData) => (
//           <>
//             <img className="image" src={restData.logo_photos} />
//             <h1>{restData.name}</h1>
//             <h3>Rating: {restData.weighted_rating_value}</h3>
//             <h4>City: {restData.address.city}, {restData.address.state}</h4>

//           </>
//         ))
//         }
//       </div>
//     </div>
//   )
// }

// // export default function Home() {
//   const [data, setData] = useState({});
// const [restaurantIndex, setRestaurantIndex] = useState(1)

// useEffect(() => {
// fetch(`https://nytc.herokuapp.com${restaurantsIndex}`)
// .then(res => res.json())
// .then(data => setData(data))
// }, [restaurantIndex]);

// function nextRestaurants()
// {
//     setPokemonIndex((prev) => prev ++)

// }

// function prevRestaurant()
// {
//     setRestaurantIndex(((prev) => prev - 1))

// }
//   // return (

//    < div className="box">

//     <button onClick={() => prevRestaurant()} >prev</button>

//     <Card data={data}/>

//     <button onClick={() => {
//       setRestaurantIndex(((prev) => prev + 1))
//     }}>next</button>

//    </div>
//   );
// }

// return (
//   <div>
//     <h1>New York Top Cuisine</h1>
//     <div className="rest-container">
//       {home.map((restData) => (
//         <>
//           <img className="image" src={restData.logo_photos} />
//           <h1>{restData.name}</h1>
//           <h3>Rating: {restData.weighted_rating_value}</h3>
//           <h4>City: {restData.address.city}, {restData.address.state}</h4>

//         </>
//       ))
//       }
//     </div>
//   </div>
// );

// function App() {
//   const [data, setData] = useState({});
// const [pokemonIndex, setPokemonIndex] = useState(1)

// useEffect(() => {
// fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
// .then(res => res.json())
// .then(data => setData(data))
// }, [pokemonIndex]);

// function nextPokemon()
// {
//     setPokemonIndex((prev) => prev ++)

// }

// function prevPokemon()
// {
//     setPokemonIndex(((prev) => prev - 1))

// }
//   return (
//    < div className="box">

//     <button onClick={() => prevPokemon()} >prev</button>

//     <Card data={data}/>

//     <button onClick={() => {
//       setPokemonIndex(((prev) => prev + 1))
//     }}>next</button>

//    </div>
//   );
// }

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
