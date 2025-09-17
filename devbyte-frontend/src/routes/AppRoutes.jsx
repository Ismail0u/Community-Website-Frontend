import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/auth/Login.jsx'
import Signup from '@/pages/auth/Signup.jsx'
import App from '@/App.jsx'


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="login" element= {<Login/>}/> 
      <Route path="signup" element= {<Signup/>}/> 
    </Routes>
  )
}

// This is an optional place holder script