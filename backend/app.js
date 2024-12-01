import express from 'express'
import dotenv from 'dotenv'
import ErrorHandler from './utils/ErrorHandler.js'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'
import user from '../backend/controller/user.js'
import { errorResponse } from './middleware/error.js'

const app = express()

// Middleware
const corsOptions = {
  origin: ['http://localhost:5173', 'https://saenus.vercel.app'],
  credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use('/', express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: true }))

if (process.env.NODE_ENV !== 'PRODUCTION') {
  dotenv.config({
    path: 'backend/config/.env',
  })
}

app.use('/api/v2/user', user)

app.use(errorResponse)
export default app
