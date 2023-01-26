import Restaurants from "../Models/Restaurants.js"

export const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurants.find()
    res.json(restaurants)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const queryRestaurants = async (req, res) => {
  try {
    for (const key in req.query) {
      const restaurants = await Restaurants.find({[key] : req.query[key]})
      res.json(restaurants)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const getRestaurantRandom = async (req, res) => {
  try {
      let count = await Restaurants.countDocuments()
      let randoNum = Math.floor(Math.random() * count)
      let restaurants = await Restaurants.findOne().skip(randoNum)
      res.json(restaurants)
         
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const getRestaurantsRandom10 = async (req, res) => {
  try {
      let restaurants = await Restaurants.aggregate([{ $sample: { size: 10 } }])
        res.json(restaurants)
          
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const getRestaurantId = async (req, res) => {
  try {
    const { id } = req.params
    const restaurants = await Restaurants.findById(id)
    
    if (restaurants) {
      return res.json(restaurants)
    }
    res.status(404).json({ message: "Restaurant not found!" })

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const getRestaurantName = async (req, res) => {
  try {
    const { name } = req.params
    const restaurants = await Restaurants.findOne({'name': name})

    if (restaurants) {
      return res.json(restaurants)
    }

    res.status(404).json({ message: "Restaurant not found!" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const getRestaurantsLocation = async (req, res) => {
  try {
    const { location } = req.params
    let restaurants 
    if(location.length === 5) {
        restaurants = await Restaurants.find({'address.zipcode': location})
    } else {
        restaurants = await Restaurants.find({'address.city': location})
    }


    if (restaurants) {
      return res.json(restaurants)
    }
    res.status(404).json({ message: "Restaurant not found!" })

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const getRestaurantsCuisine = async (req, res) => {
  try {
    const { cuisine } = req.params
    const restaurants = await Restaurants.find({'cuisines': cuisine})

    if (restaurants) {
      return res.json(restaurants)
    }
    res.status(404).json({ message: "Restaurant not found!" })

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const createRestaurant = async (req, res) => {
  try {
    await Restaurants.create(req.body)
    res.status(201).json(req.body)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params
    const restaurant = await Restaurants.findByIdAndUpdate(id, req.body)
    res.status(201).json(restaurant)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params
    const remove = await Restaurants.findByIdAndDelete(id)

    if (remove) {
      return res.status(200).send("Restaurant deleted!")
    }

    throw new Error("Restaurant not found")
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}