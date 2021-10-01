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
        <form onSubmit={handleSubmit} action="https://formsubmit.co/ziyadhammad2@gmail.com" method="POST" >
        <input type="hidden" name="_subject" value="New Email!!" />
		    <input type="text" name="email" placeholder="Email Address" required/>
		    <textarea id="email" type="text" placeholder="Write your message here!"></textarea>
		    <button type="submit">Send</button>
        {message && <span>Thanks, I'll respond ASAP!</span>}
        </form>
         
      </div>
    </div>
  )
}
