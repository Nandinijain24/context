import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/usercontextprovider'
import Login from './components/login'
import Profile from './components/profile'

function App() {

  return (
    <UserContextProvider>
    <h1>hello context</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
