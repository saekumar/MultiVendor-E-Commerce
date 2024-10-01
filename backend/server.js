import app from './app.js'
import dotenv from 'dotenv'
import connectDB from './db/Database.js'
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`)
  console.log(`shutting down the server for handling uncaught exception`)
})

if (process.env.NODE_ENV !== 'PRODUCTION') {
  dotenv.config({
    path: 'config/.env',
  })
}

const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`)
  connectDB()
})

process.on('unhandledRejection', (err) => {
  console.log(`Shutting down the server for ${err.message}`)
  console.log(`shutting down the server for unhandle promise rejection`)

  server.close(() => {
    process.exit(1)
  })
})
