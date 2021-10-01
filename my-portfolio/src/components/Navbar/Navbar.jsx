import "./Navbar.scss"
import {Person, Email } from "@material-ui/icons"

export default function Navbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          
          <a href="#about" className="logo">Ziyad Hammad</a>
          <div className="item-container">
            <Person className="icon" />
            <span>571-368-9177</span>
          </div>
          <div className="item-container">
            <Email className="icon" />
            <span>ZiyadHammad2@Gmail.com</span>
          </div>
          <div className="item-container">
            <a href="https://bit.ly/39ZGyOd" target="_blank" alt="" rel="noreferrer">
             <button>Resume</button>
            </a>
          </div>
        </div>
       
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
