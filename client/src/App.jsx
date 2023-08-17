import React from 'react'
import Home from './components/home'
import Logon from './components/logon'
import './App.css'

function App() {

  const login = localStorage.getItem('login');

  return (
    <>
      {
        login ?
          <Home />
          :
          <Logon />
      }
    </>
  )

}

export default App
