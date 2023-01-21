import mongoose from "mongoose"

let MONGODB_URI =
  process.env.MONGO_URL ||
  'mongodb://127.0.0.1:27017/Yelp-Api'

  let mongooseConnectionConfig = { useNewUrlParser: true, useUnifiedTopology: true}

  mongoose.set('strictQuery', true)

mongoose
  .connect(MONGODB_URI, mongooseConnectionConfig)
  .catch((error) => console.error('Error connecting to MongoDB: ', error.message))


mongoose.connection.on('disconnected', () => console.log(`Disconnected from MongoDB!`))


mongoose.connection.on('error', (error) => console.error(`MongoDB connection error: ${error}`))


export default mongoose.connection