import { useState } from "react";
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import LightRays from './components/LightRays/LightRays';
import { Home } from "./components/sections/Home";
import { Overview } from "./components/sections/Overview";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";


function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} text-gray-100`}>
          <div className="fixed inset-0 z-10 pointer-events-none">
            <LightRays />
          </div>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Navbar>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></MobileMenu>
          <Home />
          <Overview />
          <Projects />
          <Contact />
        </div>
    </>
  )
}

export default App
