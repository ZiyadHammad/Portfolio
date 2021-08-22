import React from 'react'
import "./About.scss"

export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="img-container">
        <img src="assets/wavelogo.png" alt="" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h1>About Me</h1>
          <p>I'm a full-stack software engineer currently based in the Northern Virginia Area. I'm a detail-oriented developer driven by learning new ways to create products to enhance our daily lives </p>
          <br/>
          <p>My background is in Sales, Management, and Marketing, meaning that I bring a unique, customer-focused perspective to the way I approach web development. </p>

        </div>
      </div>
    </div>
  )
}
