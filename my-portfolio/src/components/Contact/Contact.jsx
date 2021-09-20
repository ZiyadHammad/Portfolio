import "./Contact.scss"
import { useState } from "react";


export default function Contact() {
const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/bitmoji.png" alt="" />
      </div>
      
        <div className="right">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
		    <input type="text" placeholder="Email"/>
		    <textarea id="email" type="text" placeholder="Message"></textarea>
		    <button type="submit">Send</button>
        {message && <span>Thanks, I'll respond ASAP!</span>}
        </form>
         
      </div>
    </div>
  )
}
