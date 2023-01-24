import connection from "../connection.js"
import Restaurants from "../Models/Restaurants.js"
import data from "./new-spoon0.json" assert {type:'json'}


let updatedData = data.restaurants.map(item => {
    let foodData = {}
    foodData.name = item.name
    foodData.phone_number = item.phone_number
    foodData.address = item.address
    foodData.type = item.type
    foodData.description = item.description
    foodData.local_hours = item.local_hours
    foodData.cuisines = item.cuisines
    foodData.food_photos = item.food_photos
    foodData.logo_photos = item.logo_photos
    foodData.store_photos = item.store_photos
    foodData.dollar_signs = item.dollar_signs
    foodData.pickup_enabled = item.pickup_enabled
    foodData.delivery_enabled = item.delivery_enabled
    foodData.is_open = item.is_open
    foodData.offers_first_party_delivery = item.offers_first_party_delivery
    foodData.offers_third_party_delivery = item.offers_third_party_delivery
    foodData.miles = item.miles
    foodData.weighted_rating_value = item.weighted_rating_value
    foodData.aggregated_rating_count = item.aggregated_rating_count
    foodData.supports_upc_codes = item.supports_upc_codes
    return item
})

let seedRestaurants = async() => {
    try {
        // console.log(connection)
        connection && await Restaurants.deleteMany()
        await Restaurants.create(updatedData)
        console.log('Restaurants added to database')
        connection.close()
    } 

    catch (err) {
        console.error("Failed", err)
    }
}
seedRestaurants()