import "./Navbar.scss"
import {Person, Email } from "@material-ui/icons"

export default function Navbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          
          <a href="#home" className="logo">creating with Zee</a>
          <div className="item-container">
            <Person className="icon" />
            <span>571-368-9177</span>
          </div>
          <div className="item-container">
            <Email className="icon" />
            <span>ZiyadHammad@Outlook.com</span>
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
