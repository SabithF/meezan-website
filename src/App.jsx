import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/Nav";
import "./App.css";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import About from "./components/pages/aboutus/About";
import TeaShopsPage from "./components/pages/business/TeaShop";
import ChairmanMessagePage from "./components/pages/chairman/ChairmanMessagePage";
import TeaFactoriesPage from "./components/pages/business/TeaFactory";
import FloatingLogo from "./components/FloatingLogo";
import MeezanTeasPage from "./components/pages/business/Teas";
import Launch from "./components/Launch";
import Plantations from "./components/pages/business/Plantations"
import Hardware from "./components/pages/business/Hardware";
import ContactPage from "./components/Contact";
import CSR from "./components/pages/business/CSR";

function App() {
  const location = useLocation();

  // hide layout elements only on /launch
  const hideLayout = location.pathname === "/launch";

  return (
    <>
      {/* NAV */}
      {!hideLayout && <NavBar />}

      <Routes>
        {/* Home */}
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
        <Route path="/teas" element={<MeezanTeasPage />} />
        <Route path="/launch" element={<Launch />} />
        <Route path="/plantation" element={<Plantations />} />
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/csr" element={<CSR />} />
      </Routes>

      
      {!hideLayout && <Footer />}
       <FloatingLogo />
    </>
  );
}

export default App;
