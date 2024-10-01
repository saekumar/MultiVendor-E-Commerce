import express from 'express'
import path from 'path'
import { uploads } from '../multer.js'
import { User } from '../model/user.js'
import ErrorHandler from '../utils/ErrorHandler.js'
import jwt from 'jsonwebtoken'
import catchAsyncErrors from '../middleware/catchAsyncErrors.js'
import sendMail from '../utils/sendMail.js'
// import { text } from 'body-parser'
const router = express.Router()

router.post('/create-user', uploads.single('file'), async (req, res, next) => {
  const { name, email, password } = req.body
  const userEmail = await User.findOne({ email })
  if (userEmail) {
    return next(new ErrorHandler('User already Exists', 400))
  }
  const filename = req.file.filename
  console.log(filename)
  const fileUrl = path.join(filename)

  const user = {
    name,
    email,
    password,
    avatar: {
      public_id: filename,
      url: fileUrl,
    },
  }
  const activationToken = createActivationToken(user)
  console.log('Activation Token', activationToken)
  const activationUrl = `http://localhost:5173/activation/${activationToken}`
  console.log('Activation Url', activationUrl)
  try {
    await sendMail({
      email: user.email,
      subject: 'Activate Your Account',
      message: `Hello ${user.name}. Please click on the link to activate your account : ${activationUrl}`,
    })
    res.status(201).json({
      success: true,
      message: `Please check your email-${user.email} to activate your account`,
    })
  } catch (error) {
    return next(new ErrorHandler(error.message, 500))
  }
  // const newUser = await User.create(user)
  // res.status(200).json({
  //   success: true,
  //   user: newUser,
  // })
})

// create token
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: '5m',
  })
}

// activate user

router.post(
  '/activation',
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { activation_token } = req.body
      const newUser = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      )
      if (!newUser) {
        return next(new ErrorHandler('Invalid Token', 400))
      }
      const { name, email, password, avatar } = newUser
      User.create({
        name,
        email,
        avatar,
        password,
      })
      sendToken(newUser, 201, res)
    } catch (error) {}
  })
)
export default router
