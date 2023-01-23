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

// export const queryGames = async (req, res) => {
//   try {
//     for (const key in req.query) {
//       const games = await Games.find({[key] : req.query[key]})
//       res.json(games)

//     }
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ error: error.message })
//   }
// }

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

export const getGamesRandom10 = async (req, res) => {
  try {
      let games = await Games.aggregate([{ $sample: { size: 10 } }])
        res.json(games)
          
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const getGameId = async (req, res) => {
  try {
    const { id } = req.params
    const games = await Games.findById(id)
    
    if (games) {
      return res.json(games)
    }
    res.status(404).json({ message: "Game not found!" })

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const getGameTitle = async (req, res) => {
  try {
    const { title } = req.params
    const games = await Games.findOne({'title': title})

    if (games) {
      return res.json(games)
    }

    res.status(404).json({ message: "Game not found!" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const getGamesGenre = async (req, res) => {
  try {
    const { genre } = req.params
    const games = await Games.find({'genre': genre})

    if (games) {
      return res.json(games)
    }
    res.status(404).json({ message: "Game not found!" })

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const getGamesPlatform = async (req, res) => {
  try {
    const { platform } = req.params
    const games = await Games.find({'platform': platform})

    if (games) {
      return res.json(games)
    }
    res.status(404).json({ message: "Game not found!" })

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const getGamesPublisher = async (req, res) => {
  try {
    const { publisher } = req.params
    const games = await Games.find({'publisher': publisher})

    if (games) {
      return res.json(games)
    }
    res.status(404).json({ message: "Game not found!" })

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const getGamesDeveloper = async (req, res) => {
  try {
    const { developer } = req.params
    const games = await Games.find({'developer': developer})

    if (games) {
      return res.json(games)
    }
    res.status(404).json({ message: "Game not found!" })

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const createGame = async (req, res) => {
  try {
    await Games.create(req.body)
    res.status(201).json(req.body)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateGame = async (req, res) => {
  try {
    const { id } = req.params
    const game = await Games.findByIdAndUpdate(id, req.body)
    res.status(201).json(game)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const deleteGame = async (req, res) => {
  try {
    const { id } = req.params
    const remove = await Games.findByIdAndDelete(id)

    if (remove) {
      return res.status(200).send("Game deleted!")
    }

    throw new Error("Game not found")
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}