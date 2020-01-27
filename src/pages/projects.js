import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { useStaticQuery, graphql } from "gatsby"
import PortfolioItem from "../templates/portfolioItem"
import styled from "@emotion/styled"
import { ExtLink } from "../components/common"

const Projects = () => {
  const { allMarkdownRemark: items } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "project" } } }
        sort: { fields: frontmatter___order }
      ) {
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
                    ...GatsbyImageSharpFluid
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
      <h1
      data-sal="slide-left"
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="ease">Recent projects</h1>
      <ProjectsList>
        {items.edges.map(item => (
          <ProjectsListItem
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            <PortfolioItem portfolio={item.node} />
          </ProjectsListItem>
        ))}
      </ProjectsList>
      <h3>
        See more at:{" "}
        <ExtLink href="https://github.com/Snopkowski/">
          github.com/Snopkowski
        </ExtLink>
      </h3>
    </Layout>
  )
}

export default Projects

const ProjectsList = styled.ol`
  list-style: none;
  margin: 0;
`
const ProjectsListItem = styled.li`
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--textNormal);
  margin-bottom: 2rem;

  :last-child {
    border-bottom: none;
  }
`
