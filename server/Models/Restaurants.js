import mongoose from 'mongoose'

const AddressSchema = new mongoose.Schema({
    street_addr: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
    lat: Number,
    lon: Number,
    street_addr_2: String,
    latitude: Number,
    longitude: Number
})

const DaysSchema = new mongoose.Schema({
    Monday: String,
    Tuesday: String,
    Wednesday: String,
    Thursday: String,
    Friday: String,
    Saturday: String,
    Sunday: String
})

const TypeSchema = new mongoose.Schema({
    operational: DaysSchema,
    delivery: DaysSchema,
    pickup: DaysSchema,
    dine_in: DaysSchema
})

const RestaurantsSchema = new mongoose.Schema({
    id: String,
    name: String,
    phone_number: Number,
    address: {
        street_addr: String,
        city: String,
        state: String,
        zipcode: String,
        country: String,
        lat: Number,
        lon: Number,
        street_addr_2: String,
        latitude: Number,
        longitude: Number
    },
    type: String,
    description: String,
    local_hours: {
        operational: DaysSchema,
        delivery: DaysSchema,
        pickup: DaysSchema,
        dine_in: DaysSchema
    },
    cuisines: [String],
    food_photos: [String],
    logo_photos: [String],
    store_photos: [String],
    dollar_signs: Number,
    pickup_enabled: Boolean,
    delivery_enabled: Boolean,
    is_open: Boolean,
    offers_first_party_delivery: Boolean,
    offers_third_party_delivery: Boolean,
    miles: Number,
    weighted_rating_value: Number,
    aggregated_rating_count: Number,
    supports_upc_codes: Boolean
})

export default mongoose.model('restaurants', RestaurantsSchema)