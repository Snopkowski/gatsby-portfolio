import React from "react"
import { TwoColumnGrid, Button } from "../common"
import AboutImage from "../../images/about.svg"
import { Link } from "gatsby"

const About = () => {
  return (
    <>
      <h3>A little bit about me</h3>
      <TwoColumnGrid>
        <img src={AboutImage} alt="about" />
        <div>
          <p>
            Over the last two years, I've been developing Web Applications using
            modern Front End technologies.
          </p>
          <p>Let's bring your ideas to life!</p>
          <Link to="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>
      </TwoColumnGrid>
    </>
  )
}

export default About
