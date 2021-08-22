import React from 'react'
import "./Footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <div className="footer">
      <p>Created @Ziyad Hammad</p>

      <a href="https://github.com/ZiyadHammad" target="_blank" rel="noreferrer" >
        <FontAwesomeIcon icon={faGithub} id="git" />
        </a>
      
      

      <a href="https://www.linkedin.com/in/ziyad-hammad/" target="_blank" rel="noreferrer" >
        <FontAwesomeIcon icon={faLinkedin} id="link" />
      </a>
      
    </div>
  )
}
