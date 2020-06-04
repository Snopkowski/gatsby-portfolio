import React from "react"
import { TwoColumnGrid } from "../common"
import HeroImage from "../../images/coding.svg"

const Hero = () => {
  return (
    <>
      <TwoColumnGrid>
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
