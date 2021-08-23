import "./Contact.scss"

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Say Hello</h1>
      <h2>Always open to connecting</h2>
      

        <form className="form">
		
		    <input id="name" type="text" placeholder="NAME"/>
		    <input id="email" type="text" placeholder="E-MAIL"/>
		    <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
        <input id="submit" type="submit" value="GO!"/>
  
      </form>
    </div>
  )
}
