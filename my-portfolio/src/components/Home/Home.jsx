import "./Home.scss"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { init } from 'ityped'
import {useEffect, useRef} from "react"

export default function Home() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Designer', 'Content Creator']
    })
  },[])

  return (
    <div className="home" id="home">

      <div className="left">
         <div className="img-container">
          <img src="assets/mylogo.png" alt="" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ziyad Hammad</h1>
          
          <h3>Freelance <span ref={textRef}>Developer</span></h3>
        </div>
        <a href="#about">
          <ArrowDownwardIcon className="down" alt=""/>
        </a>
      </div>
    </div>
  )
}
