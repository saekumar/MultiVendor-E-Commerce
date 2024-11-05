import React, { useEffect } from 'react'
import SignUp from '../components/signup/SignUp'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SignUpPage = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state) => state.user)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])
  return (
    <div>
      <SignUp />
    </div>
  )
}

export default SignUpPage
