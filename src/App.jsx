import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css"
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/section/Home";
import About from "./components/section/About";
import Projects from "./components/section/Projects";
import Contact from "./components/section/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
function App() {

  const [isLoaded, setLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setLoaded(true)} />}{" "}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100 `}>
        <BrowserRouter>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/jh-portfolio" element={<Home/>}/>
          <Route path="/jh-portfolio/about" element={<About/>}/>
          <Route path="/jh-portfolio/project" element={<Projects/>}/>
          <Route path="/jh-portfolio/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
        
        <Footer/>
      </div>
    </>
  )
}

export default App
