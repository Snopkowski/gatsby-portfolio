import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { useStaticQuery, graphql } from "gatsby"
import PortfolioItem from "../templates/portfolioItem"
import projectsStyles from './projects.module.scss'

const Projects = () => {
  const { allContentfulProjectItem: items } = useStaticQuery(graphql`
    query {
      allContentfulProjectItem {
        edges {
          node {
            code
            live
            stack
            title
            description
            image {
              sizes(maxWidth: 1280) {
                ...GatsbyContentfulSizes
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
        <li className={projectsStyles.item}><PortfolioItem portfolio={item.node} /></li>
        ))}
      </ol>
      <h3>See more at: <a href="https://github.com/Snopkowski/">github.com/Snopkowski/</a></h3>
    </Layout>
  )
}

export default Projects
