import "./Projects.scss"

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <ul>
        <li>Ruby on Rails</li>
        <li>MERN App</li>
        <li>React App</li>
        <li>HTML, CSS & JavaScript</li>
      </ul>

      <div className="container">

        <div className="item">
          <a href="https://znoted-app.netlify.app/">
          <img src="assets/Noted.png" alt="" />
          </a>
          <h3>Noted</h3>
        </div>

        <div className="item">
          <img src="assets/Every.png" alt="" />
          <h3>EveryPenny</h3>
        </div>
      
      </div>

      <div className="container">

        <div className="item">
          
          <img src="assets/code-doc.png" alt="" />
          <h3>Code Doctor</h3>
        </div>

        <div className="item">
          <img src="assets/Delicous.png" alt="" />
          <h3>Delicous Recipes</h3>
        </div>
      
      </div>



     
      
      </div>
      

   
  )
}
