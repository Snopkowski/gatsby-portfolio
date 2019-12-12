import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import Hero from "../images/coding.svg"
import About from "../images/about.svg"
import Skills from "../images/skills.svg"
import styled from '@emotion/styled'
import { Button } from "../components/common"
import {Link} from 'gatsby'

const IndexPage = () => {

  const TwoColumnGrid = styled.section`
    display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding-bottom: 10vh;
  place-items: center;

  > p {
    text-align: justify;
  }
  @media (max-width: 768px){
    grid-template-columns: 1fr;

    & img{
      width: 80%;
    }
  }
  `

  const SkillsList = styled.ul`
     display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3rem;
  margin: 0;
  white-space: nowrap;

  > li{
    list-style: none;
  }
  `
  return (
      <Layout>
        <Head title="Home" />
        <TwoColumnGrid>
          <h1>
            Hello, my name is Wojciech. I'm a Web Developer based in Birmingham,
            UK.
          </h1>
          <img src={Hero} alt="coding" />
        </TwoColumnGrid>
        <h3>A little bit about me</h3>
        <TwoColumnGrid>
          <img src={About} alt="about" />
          <div>
          <p>
            I am looking forward to a much deeper dive into coding and programming.
            I’ve noticed as a self-taught Web Developer, learning about this
            field has a tremendous momentum to it. 
            I am determined to contribute
            to this momentum, especially since I am now pursuing my passion to
            become a professional developer. My ultimate goal is to continually
            learn something new every day while I fine-tune my abilities now
            that I have fully committed to immersing myself in this field.
          </p>
          <Link to='/contact'><Button>Hire me</Button></Link>
          </div>
        </TwoColumnGrid>
        <h3>Tools I've been using</h3>
        <TwoColumnGrid>
          <SkillsList>
            <li>&#10003; HTML</li>
            <li>&#10003; CSS</li>
            <li>&#10003; JavaScript</li>
            <li>&#10003; React</li>
            <li>&#10003; Styled Components</li>
            <li>&#10003; Gatsby</li>
            <li>&#10003; CSS Modules</li>
            <li>&#10003; Firebase</li>
            <li>&#10003; GraphQL</li>
            <li>&#10003; Npm</li>
            <li>&#10003; Git</li>
            <li>&#10003; Bash</li>
          </SkillsList>
          <img src={Skills} alt="skills" />
        </TwoColumnGrid>
      </Layout>
  )
}
export default IndexPage
