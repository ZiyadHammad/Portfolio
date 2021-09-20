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
          <a href="https://znoted-app.netlify.app/" target="_blank" alt="">
          <img src="assets/Noted.png" />
          </a>
          <h3>Noted</h3>
        </div>

        <div className="item">
          <a href="https://distracted-dijkstra-a1d71b.netlify.app/"  target="_blank" alt="">
          <img src="assets/Every.png" />
          </a>
          <h3>EveryPenny</h3>
        </div>
      
      </div>

      <div className="container">

        <div className="item">
          <a href="https://codedoctor.netlify.app/" alt="" target="_blank" >
          <img src="assets/code-doc.png" />
          </a>
          <h3>Code Doctor</h3>
        </div>

        <div className="item">
          <a href="https://ziyadhammad.github.io/Delicous-Recipes/index.html" target="_blank" alt="" >
          <img src="assets/Delicous.png" alt="" />
          </a>
          <h3>Delicous Recipes</h3>
        </div>
      
      </div>



     
      
      </div>
      

   
  )
}
