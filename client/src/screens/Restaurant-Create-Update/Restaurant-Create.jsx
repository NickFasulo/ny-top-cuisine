import './Restaurant-Create-Update.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createRestaurant } from '../../services/restaurants';

export default function Create() {
    let navigate = useNavigate();
    const [cuisine,setCuisine] = useState({
        cuisine1: "",
        cuisine2: "",
        cuisine3: "",
        cuisine4: "",
    })
    const [addresS,setAddresS] = useState({
        location: "",
        zip: "",
        addy: "",
    })
    const [ hours,setHours ] = useState({
        Monday: '',
        Tuesday: '',
        Wednesday: '',
        Thursday: '',
        Friday: '',
        Saturday: '',
        Sunday: '',
    })
    const [restaurant, setRestaurant] = useState({
        _id: '63cfd071dfa5a4d5e89ac498',
        name: '',
        phone_number: 0,
        cuisines: ["","","",""],
        dollar_signs: 0,
        weighted_rating_value: 0,
        food_photos: [""],
        logo_photos: [""],
        address: {
            street_addr: "",
            city: "",
            state: "",
            zipcode: "",
            country: "",
            lat: 40.73681259,
            lon: -73.93226624,
            street_addr_2: "",
            latitude: 40.73681259,
            longitude: -73.93226624
        },
        local_hours: {
            operational: {
                Monday: "",
                Tuesday: "",
                Wednesday: "",
                Thursday: "",
                Friday: "",
                Saturday: "",
                Sunday: "",
            },
            delivery: {
                Monday: "06:00AM - 06:30PM",
                Tuesday: "06:00AM - 06:30PM",
                Wednesday: "06:00AM - 06:30PM",
                Thursday: "06:00AM - 06:30PM",
                Friday: "06:00AM - 06:30PM",
                Saturday: "06:00AM - 06:30PM",
                Sunday: "06:00AM - 06:30PM",
            },
            pickup: {
                Monday: "Closed",
                Tuesday: "Closed",
                Wednesday: "Closed",
                Thursday: "Closed",
                Friday: "Closed",
                Saturday: "Closed",
                Sunday: "Closed",
            },
            dine_in: {
                Monday: "06:00AM - 06:30PM",
                Tuesday: "06:00AM - 06:30PM",
                Wednesday: "06:00AM - 06:30PM",
                Thursday: "06:00AM - 06:30PM",
                Friday: "06:00AM - 06:30PM",
                Saturday: "06:00AM - 06:30PM",
                Sunday: "06:00AM - 06:30PM",
            }
        },
        id: 0,
        type: "restaurant",
        description: "",
        store_photos: [""],
        pickup_enabled: false,
        delivery_enabled: true,
        is_open: true,
        offers_first_party_delivery: false,
        offers_third_party_delivery: true,
        miles: 0.4561412708419147,
        aggregated_rating_count: 25,
        supports_upc_codes: false,
        __v: 0
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await createRestaurant(restaurant);
    console.log(response)
    navigate(`/${response._id}`, { replace: true });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setRestaurant((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleChangeC = (e) => {
    const { value, name } = e.target;
    setCuisine((prev) => ({
      ...prev,
      [name]: value,
    }));
    setRestaurant((prev) => ({
        ...prev,
        cuisines: [cuisine.cuisine1,cuisine.cuisine2,cuisine.cuisine3,cuisine.cuisine4]
      }));
  };
  const handleChangeA = (e) => {
    const { value, name } = e.target;
    setAddresS((prev) => ({
      ...prev,
      [name]: value,
    }));
    setRestaurant((prev) => ({
        ...prev,
        address: { street_addr:addresS.addy, city:addresS.location, zipcode:addresS.zip}
      }));
  };
  const handleChangeH = (e) => {
    const { value, name } = e.target;
    setHours((prev) => ({
      ...prev,
      [name]: value,
    }));
    setRestaurant((prev) => ({
        ...prev,
        local_hours: {operational: {Monday:hours.Monday,Tuesday:hours.Tuesday,Wednesday:hours.Wednesday,Thursday:hours.Thursday,Friday:hours.Friday,Saturday:hours.Saturday,Sunday:hours.Sunday,}}
      }));
  };

  return (
    <div className="background">
        <h1 className='createTitle'>Create A Restaurant!</h1>
      <form className="createForm" onSubmit={handleSubmit}>
      <input
          type="text"
          className='inputs'
          placeholder="ID"
          name="_id"
          value={restaurant._id}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Restaurant Name"
          name="name"
          value={restaurant.name}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Phone Number"
          name="phone_number"
          value={restaurant.phone_number}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Cuisine 1"
          name="cuisine1"
          value={cuisine.cuisine1}
          onChange={handleChangeC}
        />        
        <input
          type="text"
          className='inputs'
          placeholder="Cuisine 2"
          name="cuisine2"
          value={cuisine.cuisine2}
          onChange={handleChangeC}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Cuisine 3"
          name="cuisine3"
          value={cuisine.cuisine3}
          onChange={handleChangeC}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Cuisine 4"
          name="cuisine4"
          value={cuisine.cuisine4}
          onChange={handleChangeC}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Price Value"
          name="dollar_signs"
          value={restaurant.dollar_signs}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Rating"
          name="weighted_rating_value"
          value={restaurant.weighted_rating_value}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Food Photo"
          name="food_photos"
          value={restaurant.food_photos}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Logo"
          name="logo_photos"
          value={restaurant.logo_photos}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Street Address"
          name="addy"
          value={addresS.addy}
          onChange={handleChangeA}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Zipcode"
          name="zip"
          value={addresS.zip}
          onChange={handleChangeA}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Location"
          name="location"
          value={addresS.location}
          onChange={handleChangeA}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Monday Hours"
          name="Monday"
          value={hours.Monday}
          onChange={handleChangeH}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Tuesday Hours"
          name="Tuesday"
          value={hours.Tuesday}
          onChange={handleChangeH}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Wednesday Hours"
          name="Wednesday"
          value={hours.Wednesday}
          onChange={handleChangeH}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Thursday Hours"
          name="Thursday"
          value={hours.Thursday}
          onChange={handleChangeH}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Friday Hours"
          name="Friday"
          value={hours.Friday}
          onChange={handleChangeH}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Saturday Hours"
          name="Saturday"
          value={hours.Saturday}
          onChange={handleChangeH}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Sunday Hours"
          name="Sunday"
          value={hours.Sunday}
          onChange={handleChangeH}
        />
        <button className='inputs' type="submit">Submit</button>
      </form>
    </div>
  );
}
