import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/Nav'
import './App.css'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './components/pages/aboutus/About'


function App() {
 
  return (
    <>
      <NavBar/>

    <Routes>
      {/* Homae page  */}
    <Route path='/' element={
      <>
      <Hero/>
      <Portfolio/>
      </>

    } />

    <Route path='/about' element={<About/>}/>


    
    </Routes>

      
      <Footer/>
    
      
    </>
  )
}

export default App
