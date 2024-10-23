import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { server } from '../../server'

const Activation = () => {
  const [error, setError] = useState('')
  const { activationToken } = useParams()
  console.log(activationToken)

  const activateEmail = async () => {
    try {
      const res = await axios.post(`${server}/user/activation`, {
        activationToken,
      })
      console.log(res)
    } catch (error) {
      console.log(error)
      setError(error)
    }
  }
  useEffect(() => {
    if (activationToken) {
      activateEmail()
    }
  }, [activationToken])
  return (
    <div>
      {error ? (
        <div className="">{`Error occured ${error.message}`}</div>
      ) : (
        <div className="min-h-screen flex items-center justify-center text-3xl font-bold text-blue-600">
          Your account activated Successfully 😍
        </div>
      )}
    </div>
  )
}

export default Activation
