import NavBar from './components/Nav'
import './App.css'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './components/pages/aboutus/About'
import TeaShopsPage from './components/pages/business/TeaShop'
import ChairmanMessagePage from './components/pages/chairman/ChairmanMessagePage'
import TeaFactoriesPage from './components/pages/business/TeaFactory'
import FloatingLogo from './components/FloatingLogo'  

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <div className="pt-[60px] md:pt-[90px]">
                <Hero />
              </div>
              <Portfolio />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/tea" element={<TeaShopsPage />} />
        <Route path="/tea-factory" element={<TeaFactoriesPage />} />
        <Route path="/chairman-message" element={<ChairmanMessagePage />} />
      </Routes>

      <Footer />

      <FloatingLogo />
    </>
  )
}

export default App
