import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'

const UserProtectWrapper = ({children}) => {

 
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(!token){
      navigate("/login")
    }
  }, [navigate])
  

  return (
    <>
    {children}
    </>
  )
}

export default UserProtectWrapper
