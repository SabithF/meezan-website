import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/Nav'
import './App.css'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
 
  return (
    <>
      <NavBar/>
      <Hero/>
      <Portfolio/>
      <Footer/>
    
      
    </>
  )
}

export default App
