import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import Hero from "../images/coding.svg"
import About from "../images/about.svg"
import Skills from "../images/skills.svg"
import styled from '@emotion/styled'
import { Button } from "../components/common"
import {Link} from 'gatsby'
import LatestBlog from "../components/latestBlog"


const IndexPage = () => {

  const TwoColumnGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  place-items: center;
  margin: 15vh 0;


  span {
    color: var(--textLink);
  }

   p {
    text-align: justify;
    font-size: 110%;
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
  white-space: nowrap;

  > li{
    list-style: none;
    position: relative;
    ::before {
      content: '';
      width: 10px;
      height: 10px;
      background-color: var(--textNormal);
      position: absolute;
      left: -10px;
      border-radius: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  `
  return (
      <Layout>
        <Head title="Home" />
        <TwoColumnGrid>
          <h1>
            Hello, my name is <span>Wojciech.</span> <br/> I'm a <span>Web Developer</span>  based in Birmingham,
            UK.
          </h1>
          <img src={Hero} alt="coding" />
        </TwoColumnGrid>
        <h3>A little bit about me</h3>
        <TwoColumnGrid>
          <img src={About} alt="about" />
          <div>
          {/* <p>
            I am looking forward to a much deeper dive into coding and programming.
            I’ve noticed as a self-taught Web Developer, learning about this
            field has a tremendous momentum to it. 
            I am determined to contribute
            to this momentum, especially since I am now pursuing my passion to
            become a professional developer. My ultimate goal is to continually
            learn something new every day while I fine-tune my abilities now
            that I have fully committed to immersing myself in this field.
          </p> */}
          <p>
            Over the last two years, I've been developing Web Applications using modern Front End technologies.
          </p>
          <Link to='/contact'><Button>Contact me</Button></Link>
          </div>
        </TwoColumnGrid>
        <LatestBlog />
        <h3>Tools I've been using</h3>
        <TwoColumnGrid>
          <SkillsList>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>Gatsby</li>
            <li>CSS Modules</li>
            <li>Firebase</li>
            <li>GraphQL</li>
            <li>Npm</li>
            <li>Git</li>
            <li>Bash</li>
          </SkillsList>
          <img src={Skills} alt="skills" />
        </TwoColumnGrid>
      </Layout>
  )
}
export default IndexPage
