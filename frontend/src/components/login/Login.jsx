import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { VscEyeClosed } from 'react-icons/vsc'
import styles from '../../styles/styles'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { server } from '../../server'
const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [viewPass, setViewPass] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post(
        `${server}/user/login-user`,
        { email, password },
        { withCredentials: true }
      )

      console.log(res)
      if (res.status === 201) {
        toast.success('User logged in successfully')
        navigate('/')
      }
    } catch (error) {
      console.log(error)
      toast.error(`${error.response.data.message}`)
    }
  }
  return (
    <div className="min-h-screen bg-orange-100 flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to your Account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form action="" className="space-y-6" onSubmit={handleSubmit}>
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
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
                  className="appearance-none block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
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
                  className="appearance-none block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
            <div className={`${styles.noramlFlex} justify-between`}>
              <div className={`${styles.noramlFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-400 border-gray-500 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="forgot-password"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password
                </a>
              </div>
            </div>
            <div className="">
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 bg-orange-500 rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
              >
                Login
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4 className="">Not have an Account?</h4>
              <Link to={'/sign-up'} className="text-blue-600 pl-2">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
