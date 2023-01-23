import { Router } from "express"
import express from 'express'
import * as controller from "../Controllers/Restaurant-Controller.js"

const router = Router()
router.use(express.json())

router.get("/", controller.getRestaurants)
router.get("/id", controller.getRestaurants)
router.get("/name", controller.getRestaurants)
router.get("/location", controller.getRestaurants)
router.get("/cuisine", controller.getRestaurants)

router.get("/:query", controller.queryRestaurants)

router.get("/random", controller.getRestaurantRandom)
router.get("/random10", controller.getRestaurantsRandom10)

router.get("/id/:id", controller.getRestaurantId)
router.get("/name/:name", controller.getRestaurantName)
router.get("/location/:location", controller.getRestaurantsLocation)
router.get("/cuisine/:cuisine", controller.getRestaurantsCuisine)


// router.post("/", controller.createGame)

// router.put("/:id", controller.updateGame)

// router.delete("/:id", controller.deleteGame)

export default router