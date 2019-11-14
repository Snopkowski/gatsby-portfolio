import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import indexStyles from "../styles/index.scss"
import homepageStyles from "../styles/homepage.module.scss"
import Hero from "../images/coding.svg"
import About from "../images/about.svg"
import Skills from "../images/skills.svg"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <div className={homepageStyles.container}>
          <h1 className={indexStyles.mainHeading}>
            Hello, my name is Wojciech. I'm a Web Developer based in Birmingham,
            UK.
          </h1>
          <img src={Hero} alt="coding" />
        </div>
        <h3>A little bit about me</h3>
        <div className={homepageStyles.container}>
          <img src={About} alt="about" />
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
        </div>
        <h3>Tools I've been using</h3>
        <div className={homepageStyles.container}>
          <ul className={homepageStyles.list}>
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
          </ul>
          <img src={Skills} alt="skills" />
        </div>
      </Layout>
    </div>
  )
}
export default IndexPage
