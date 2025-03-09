import { useState } from 'react'
import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start/Start'
import UserLogin from './pages/User/UserLogin'
import UserSignup from './pages/User/UserSignup'
import CaptainLogin from './pages/Captain/CaptainLogin'
import CaptainSignup from './pages/Captain/CaptainSignup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import Riding from './pages/Riding'

const App = () => {
  return (
    <div>
      <Routes>
        
        <Route path='/' element= {<Start />} />
        <Route path='/login' element= {<UserLogin />} />
        <Route path='/signup' element= {<UserSignup />} />
        <Route path='/captain-login' element= {<CaptainLogin />} />
        <Route path='/captain-signup' element= {<CaptainSignup />} />
        <Route path='/riding' element = {<Riding />} />
        <Route path='/home' element = {
         <UserProtectWrapper>
          <Home />
         </UserProtectWrapper> 
         } />
         <Route path='/logout' element= {
          <UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
         } />
         <Route path='/captain-home' element = {
          <CaptainProtectWrapper>
             <CaptainHome />
          </CaptainProtectWrapper>
          
          } />
        
      </Routes>
    </div>
  )
}

export default App

