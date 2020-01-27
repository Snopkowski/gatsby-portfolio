import React from "react"
import { TwoColumnGrid } from "../common"
import HeroImage from "../../images/coding.svg"

const Hero = () => {
  return (
    <>
      <TwoColumnGrid 
      data-sal="slide-right"
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="ease">
        <h1>
          Hello, my name is <span>Wojciech.</span> <br /> I'm a{" "}
          <span>Web Developer</span> based in Birmingham, UK.
        </h1>
        <img src={HeroImage} alt="coding" />
      </TwoColumnGrid>
    </>
  )
}

export default Hero
