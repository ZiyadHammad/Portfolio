import Navbar from "./components/Navbar/Navbar"
import "./app.scss"


import Home from "./components/Home/Home"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import { useState } from "react"
import Menu from "./components/Menu/Menu"
import About from "./components/About/About"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Home />
        <About />
        <Projects />
        <Contact />

     </div>
    </div>
  );
}

export default App;
