import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import Hero from "../images/coding.svg"
import About from "../images/about.svg"
import Skills from "../images/skills.svg"
import styled from "@emotion/styled"
import { Button } from "../components/common"
import { Link } from "gatsby"
import LatestBlog from "../components/latestBlog"

const IndexPage = () => {
  const TwoColumnGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 2rem;
    place-items: center;
    margin: 10vh 0 20vh 0;

    span {
      color: var(--textLink);
    }

    p {
      text-align: justify;
      font-size: 110%;
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;

      & img {
        width: 80%;
      }
    }
  `

  const SkillsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3rem;
    white-space: nowrap;
    font-size: 110%;

    > li {
      list-style: none;
      position: relative;
      ::before {
        content: "";
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
      <TwoColumnGrid 
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="ease"
      >
        <h1>
          Hello, my name is <span>Wojciech.</span> <br /> I'm a{" "}
          <span>Web Developer</span> based in Birmingham, UK.
        </h1>
        <img src={Hero} alt="coding" />
      </TwoColumnGrid>
      <h3
      data-sal="slide-left"
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="ease"
      >A little bit about me</h3>
      <TwoColumnGrid 
      data-sal="slide-right"
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="ease"
      >
        <img src={About} alt="about" />
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
      <LatestBlog />
      <h3
      data-sal="slide-left"
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="ease"
      >Tools I've been using</h3>
      <TwoColumnGrid 
      data-sal="slide-down"
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="ease">
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
