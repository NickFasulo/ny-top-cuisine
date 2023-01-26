import { Router } from "express"
import express from 'express'
import rRoute from "./Restaurant-Route.js"

const router = Router()
router.use(express.json())

router.use("/", rRoute)

export default router