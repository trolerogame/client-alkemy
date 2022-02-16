import React, {useEffect, useContext } from 'react'
import { Context } from '../context/context'
import { navigate } from '@reach/router'
const home = () => {
  const {token,getOperationsAndUser} = useContext(Context)
  useEffect(() => {
    if(!token) navigate('/login')
    getOperationsAndUser() 
  },[token])
  return (
    <div>Home</div>
  )
}

export default home