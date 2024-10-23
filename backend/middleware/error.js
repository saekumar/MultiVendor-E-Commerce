import ErrorHandler from '../utils/ErrorHandler.js'

export const errorResponse = (err, req, res, next) => {
  let statusCode = err.statusCode || 500
  let message = err.message || 'Internal server Error'
  let success = false
  // // wrong mongodb id error
  // if (err.name === 'CastError') {
  //   const message = `Resources not found with this id.. Invalid ${err.path}`
  //   err = new ErrorHandler(message, 400)
  // }

  // // Duplicate key error
  // if (err.code === 11000) {
  //   const message = `Duplicate key ${Object.keys(err.keyValue)} Entered`
  //   err = new ErrorHandler(message, 400)
  // }

  // // wrong jwt error
  // if (err.name === 'JsonWebTokenError') {
  //   const message = `Your url is invalid please try again letter`
  //   err = new ErrorHandler(message, 400)
  // }

  // // jwt expired
  // if (err.name === 'TokenExpiredError') {
  //   const message = `Your Url is expired please try again letter!`
  //   err = new ErrorHandler(message, 400)
  // }

  res.status(statusCode).json({
    success,
    message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : null,
  })
}
