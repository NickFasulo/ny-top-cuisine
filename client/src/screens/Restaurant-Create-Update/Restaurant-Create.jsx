import './Restaurant-Create-Update.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createRestaurant } from '../../services/restaurants';

export default function Create() {
    let navigate = useNavigate();
    const [restaurant, setRestaurant] = useState({
        name: '',
        phone_number: 0,
        cuisines: [""],
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

  return (
    <div className="background">
      <form className="createForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className='inputs'
          placeholder="Name | English"
          name="name_en"
          value={person.name_en}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Name | Russian"
          name="name_ru"
          value={person.name_ru}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Position"
          name="position"
          value={person.position}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Reasoning"
          name="reasoning"
          value={person.reasoning}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Photo Url"
          name="photo"
          value={person.photo}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Date Of Birth"
          name="dob"
          value={person.dob}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Location Of Birth"
          name="cob"
          value={person.cob}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="US Date"
          name="sanctions_us_date"
          value={person.sanctions_us_date}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="UA Date"
          name="sanctions_ua_date"
          value={person.sanctions_ua_date}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="AU Date"
          name="sanctions_au_date"
          value={person.sanctions_au_date}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Person ID"
          name="person_id"
          value={person.person_id}
          onChange={handleChange}
        />
        <button className='inputs' type="submit">Submit</button>
      </form>
    </div>
  );
}
