import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, next) {
    next(null, 'uploads/')
  },
  filename: function (req, file, next) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const filename = file.originalname.split('.')[0]
    next(null, filename + '-' + uniqueSuffix + '.png')
  },
})
const fileFilter = (req, file, next) => {
  const allowedFileTypes = /jpeg|jpg|png/
  const mimetype = allowedFileTypes.test(file.mimetype)
  const extname = allowedFileTypes.test(
    file.originalname.split('.').pop().toLowerCase()
  )
  if (mimetype && extname) {
    next(null, true)
  } else {
    next(
      new Error(
        'Invalid file type. Only JPEG, JPG, and PNG files are allowed.'
      ),
      false
    )
  }
}

export const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter,
})
