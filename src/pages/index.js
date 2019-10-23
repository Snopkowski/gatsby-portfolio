import React from "react"
import Head from '../components/head'
import Layout from "../components/layout"
import indexStyles from '../styles/index.scss'
import homepageStyles from '../styles/homepage.module.scss'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"




const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query {
    file(name: {eq: "hero-image"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
  `)

  return (
    <div>
      <Layout>
        <Head title="Home" />
        <div className={homepageStyles.container}>
        <h1 className={indexStyles.mainHeading}>Hello, my name is Wojciech. I'm a Web Developer based in Birmingham, UK.</h1>
        <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <h3>About</h3>
        <p>Looking forward to a much deeper dive into coding and programming. I’ve noticed as a self-taught Web Developer, learning about this field has a tremendous momentum to it. I am determined to contribute to this momentum, especially since I am now pursuing my passion to become a professional developer.</p>
        <p>For the past six years, I’ve been working as an Autoclave Technician. Over time, I’ve come to realize that my true passion is in coding and programming, especially now that the web development industry continues to grow at an exponential rate. Therefore, I’ve decided to transition careers because I trust that my creative skills are likely better suited for the ever-growing web development industry.</p>
        <p>I am confident that I will continue to absorb new skills and technologies while managing my tasks and building my experience. My ultimate goal is to continually learn something new every day while I fine-tune my abilities now that I have fully committed to immersing myself in this field.</p>
        <h3>Tools and technologies I've been using lately:</h3>
        <p>HTML5 - CSS3 - JAVASCRIPT - SASS - REACT - CSS MODULES - GATSBY - GRAPHQL - GIT - AJAX - NPM - BASH</p>
      </Layout>
    </div>
  )
}
export default IndexPage
