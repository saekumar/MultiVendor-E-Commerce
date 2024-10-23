import ErrorHandler from '../utils/ErrorHandler.js'
// import catchAsyncErrors from './catchAsyncErrors.js'
import jwt from 'jsonwebtoken'

const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies
    console.log('token', token)
    if (!token) {
      return next(new ErrorHandler('Please login', 401))
    }
    const user = await jwt.verify(token, process.env.JWT_SECRET_KEY)
    console.log('userId', user)
    req.user = user
    next()
  } catch (error) {
    return next(new ErrorHandler(`${error.message}`, 400))
  }
}
export default isAuthenticated
