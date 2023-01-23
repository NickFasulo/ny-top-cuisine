import { Router } from "express"
import express from 'express'
import * as controller from "../Controllers/Game-Controller.js"

const router = Router()
router.use(express.json())

router.get("/", controller.getGames)
router.get("/id", controller.getGames)
router.get("/title", controller.getGames)
router.get("/genre", controller.getGames)
router.get("/platform", controller.getGames)
router.get("/publisher", controller.getGames)
router.get("/developer", controller.getGames)

router.get("/:query", controller.queryGames)

router.get("/random", controller.getGameRandom)
router.get("/random10", controller.getGamesRandom10)

router.get("/id/:id", controller.getGameId)
router.get("/title/:title", controller.getGameTitle)
router.get("/genre/:genre", controller.getGamesGenre)
router.get("/platform/:platform", controller.getGamesPlatform)
router.get("/publisher/:publisher", controller.getGamesPublisher)
router.get("/developer/:developer", controller.getGamesDeveloper)

router.post("/", controller.createGame)

router.put("/:id", controller.updateGame)

router.delete("/:id", controller.deleteGame)

export default router