import connection from "./connection.js"
import express from "express"
import routes from "./Routes/router.js"
import cors from 'cors'

const PORT = process.env.PORT || 3000
let app = express()

app.use(cors())
app.use(express.json())

app.use('/', routes)

connection.on("connected", () => {
    console.clear()
    console.log("Connected To MongoDB!")
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
})