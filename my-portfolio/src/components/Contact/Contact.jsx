import "./Contact.scss"

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="" alt="" />
      </div>
      

        <form className="form">
		
		    <input id="name" type="text" placeholder="NAME"/>
		    <input id="email" type="text" placeholder="E-MAIL"/>
		    <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
        <input id="submit" type="submit" value="GO!"/>
  
      </form>
    </div>
  )
}
