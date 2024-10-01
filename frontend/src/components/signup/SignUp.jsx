import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { VscEyeClosed } from 'react-icons/vsc'
import styles from '../../styles/styles'
import { Link } from 'react-router-dom'
import { RxAvatar } from 'react-icons/rx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { server } from '../../server'
import toast, { Toaster } from 'react-hot-toast'
const SignUp = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [viewPass, setViewPass] = useState(false)
  const [avatar, setAvatar] = useState(null)

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    setAvatar(file)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newForm = new FormData()
    newForm.append('file', avatar)
    newForm.append('name', name)
    newForm.append('email', email)
    newForm.append('password', password)
    let res = await axios.post(`${server}/user/create-user`, newForm)
    if (res.status === 200) {
      setAvatar('')
      setEmail('')
      setName('')
      setPassword('')
      toast('Signed Up Successfully')
      navigate('/')
    }
  }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register as new User
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form action="" className="space-y-6" onSubmit={handleSubmit}>
            <div className="">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>

              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>

              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <div className="mt-1 relative">
                <input
                  type={viewPass ? 'text' : 'password'}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <span
                  className="absolute top-0 right-2 mt-3 cursor-pointer"
                  onClick={(e) => setViewPass(!viewPass)}
                >
                  {viewPass ? (
                    <AiOutlineEye size={20} />
                  ) : (
                    <VscEyeClosed size={20} />
                  )}
                </span>
              </div>
            </div>
            <div className="">
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar size={26} />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span className="">Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,,png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
            <div className="">
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Register
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4 className="">Already have an Account?</h4>
              <Link to={'/login'} className="text-blue-600 pl-2">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
