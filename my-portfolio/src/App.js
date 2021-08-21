import Navbar from "./components/Navbar/Navbar"
import "./app.scss"


import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import { useState } from "react"
import Menu from "./components/Menu/Menu"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <About />
        <Projects />
        <Contact />

     </div>
    </div>
  );
}

export default App;
