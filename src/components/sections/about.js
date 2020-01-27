import React from "react"
import {TwoColumnGrid, Button} from '../common'
import AboutImage from '../../images/about.svg'
import {Link} from 'gatsby'

const About = () => {
  return (
    <>
      <h3
      data-sal="slide-left"
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="ease">A little bit about me</h3>
      <TwoColumnGrid
        data-sal="slide-right"
        data-sal-duration="1000"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
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
