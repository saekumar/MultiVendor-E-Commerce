// import express from 'express'
// import path from 'path'
// import { uploads } from '../multer.js'
// import { User } from '../model/user.js'
// import ErrorHandler from '../utils/ErrorHandler.js'
// import jwt from 'jsonwebtoken'
// import catchAsyncErrors from '../middleware/catchAsyncErrors.js'
// import sendMail from '../utils/sendMail.js'
// // import { text } from 'body-parser'
// const router = express.Router()

// router.post('/create-user', uploads.single('file'), async (req, res, next) => {
//   const { name, email, password } = req.body
//   const userEmail = await User.findOne({ email })
//   if (userEmail) {
//     return next(new ErrorHandler('User already Exists', 400))
//   }
//   const filename = req.file.filename
//   console.log(filename)
//   const fileUrl = path.join(filename)
//   console.log(fil)

//   const user = {
//     name,
//     email,
//     password,
//     avatar: {
//       public_id: filename,
//       url: fileUrl,
//     },
//   }
//   const activationToken = createActivationToken(user)
//   console.log('Activation Token', activationToken)
//   const activationUrl = `http://localhost:5173/activation/${activationToken}`
//   console.log('Activation Url', activationUrl)
//   try {
//     await sendMail({
//       email: user.email,
//       subject: 'Activate Your Account',
//       message: `Hello ${user.name}. Please click on the link to activate your account : ${activationUrl}`,
//     })
//     res.status(201).json({
//       success: true,
//       message: `Please check your email-${user.email} to activate your account`,
//     })
//   } catch (error) {
//     return next(new ErrorHandler(error.message, 500))
//   }
//   // const newUser = await User.create(user)
//   // res.status(200).json({
//   //   success: true,
//   //   user: newUser,
//   // })
// })

// // create token
// const createActivationToken = (user) => {
//   return jwt.sign(user, process.env.ACTIVATION_SECRET, {
//     expiresIn: '5m',
//   })
// }

// // activate user

// router.post(
//   '/activation',
//   catchAsyncErrors(async (req, res, next) => {
//     try {
//       const { activation_token } = req.body
//       const newUser = jwt.verify(
//         activation_token,
//         process.env.ACTIVATION_SECRET
//       )
//       if (!newUser) {
//         return next(new ErrorHandler('Invalid Token', 400))
//       }
//       const { name, email, password, avatar } = newUser
//       User.create({
//         name,
//         email,
//         avatar,
//         password,
//       })
//       sendToken(newUser, 201, res)
//     } catch (error) {}
//   })
// )
// export default router

import ErrorHandler from '../utils/ErrorHandler.js'
import express from 'express'
import fs from 'fs'
import path from 'path'

import { upload } from '../multer.js'
import { User } from '../model/user.js'
import jwt from 'jsonwebtoken'
import sendToken from '../utils/jwtToken.js'
import sendMail from '../utils/sendMail.js'
import isAuthenticated from '../middleware/auth.js'
const router = express.Router()

router.post('/create-user', upload.single('file'), async (req, res, next) => {
  try {
    const { name, email, password } = req.body
    const userEmail = await User.findOne({ email })

    if (userEmail) {
      const filename = req.file.filename
      const filePath = `uploads/${filename}`
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err)
          return next(new ErrorHandler(`${err.message}`, 500))
        }
      })
      return next(new ErrorHandler('User already exists', 400))
    }

    const filename = req.file.filename
    if (!filename) {
      return next(new ErrorHandler('Please select a profile picture', 300))
    }
    const fileurl = path.join('/uploads/', filename)

    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: filename,
        url: fileurl,
      },
      isActivated: false,
    })

    const activationToken = createActivationToken(user._id)
    const activationUrl = `http://localhost:5173/activation/${activationToken}`

    try {
      await sendMail({
        email: user.email,
        subject: 'Activate your Account',
        message: `Hello ${user.name}, please click on the below link to activate your account: ${activationUrl}`,
      })

      res.status(200).json({
        message: 'Please check your email for activation instructions.',
        success: true,
      })
    } catch (error) {
      return next(new ErrorHandler(error.message, 400))
    }
  } catch (error) {
    console.log(error)
    return next(new ErrorHandler(error.message, 400))
  }
})

const createActivationToken = (userId) => {
  try {
    return jwt.sign({ id: userId }, process.env.ACTIVATION_SECRET, {
      expiresIn: '5m',
    })
  } catch (error) {
    console.log(error)
  }
}

router.post('/activation', async (req, res, next) => {
  try {
    const { activationToken } = req.body

    const decoded = jwt.verify(activationToken, process.env.ACTIVATION_SECRET)
    if (!decoded) {
      return next(new ErrorHandler('Invalid Token', 400))
    }

    const user = await User.findById(decoded.id)
    if (!user) {
      return next(new ErrorHandler('User not found', 404))
    }

    if (user.isActivated) {
      return res.status(200).json({
        success: true,
        message: 'User is already activated',
      })
    }

    user.isActivated = true
    await user.save()

    sendToken(user, 201, res)
  } catch (error) {
    return next(new ErrorHandler(`${error.message}`, 400))
  }
})

router.post('/login-user', async (req, res, next) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return next(new ErrorHandler('Please fill all the fields', 400))
    }
    const user = await User.findOne({ email })
    if (!user) {
      return next(new ErrorHandler('No user with this email', 400))
    }
    const checkPass = await user.comparePassword(password)

    if (!checkPass) {
      return next(new ErrorHandler('Incorrect Credentials', 400))
    }
    const reWrittenUser = await User.findOne({ email }).select('-password')
    sendToken(reWrittenUser, 201, res)
  } catch (error) {
    console.log(error)
    return next(new ErrorHandler(`${error.message}`, 400))
  }
})

router.get('/getuser', isAuthenticated, async (req, res, next) => {
  try {
    const { id } = req.user
    const user = await User.findById(id).select('-password')
    console.log(user)
    if (!user) {
      return next(new ErrorHandler('User do not exist', 400))
    }
    res.status(200).json({
      success: true,
      user,
    })
  } catch (error) {
    return next(new ErrorHandler(`${error.message}`, 400))
  }
})
export default router
