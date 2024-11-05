import React, { useEffect } from 'react'
import Login from '../components/login/Login'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loadUser } from '../reduxOperations/actions/user'

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state) => state.user)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])
  return (
    <div className="">
      <Login />
    </div>
  )
}

export default LoginPage
