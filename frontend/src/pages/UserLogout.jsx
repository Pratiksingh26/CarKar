import React, { useEffect } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const UserLogout = () => {

    const navigate = useNavigate()

  const token = localStorage.getItem("token")

  axios.get(`${import.meta.env.BASE_VITE_URL}/users/logout`, {
    headers:{
        Authorization : `Bearer ${token}`
    }
  }).then((response) => {
    if(response.status === 200){
    localStorage.removeItem("token")
    useEffect(() => {
        navigate("/login")
    })
   
    }
  })

  

  return (
    <div>
      UserLogout
    </div>
  )
}

export default UserLogout
