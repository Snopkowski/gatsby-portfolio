import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { useStaticQuery, graphql } from "gatsby"
import PortfolioItem from "../templates/portfolioItem"
import projectsStyles from '../styles/projects.module.scss'

const Projects = () => {
  const { allMarkdownRemark: items } = useStaticQuery(graphql`
    query {
      allMarkdownRemark (filter: {frontmatter: {type: {eq: "project"}}}, sort: {fields: frontmatter___order}) { 
        edges {
          node {
            frontmatter {
              title
              live
              stack
              source
              description
              image {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 80) {
                    ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
            }
            
          }
        }
      }
    }
    
  `)

  return (
    <Layout>
      <Head title="Projects" />
      <h1>Projects</h1>
      <ol className={projectsStyles.items}>

      {items.edges.map(item => (
        <li className={projectsStyles.item}>
          <PortfolioItem portfolio={item.node} />
        </li>
        ))}
      </ol>
      <h3>See more at: <a href="https://github.com/Snopkowski/">github.com/Snopkowski/</a></h3>
    </Layout>
  )
}

export default Projects
