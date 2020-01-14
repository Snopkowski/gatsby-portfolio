import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Head from "../components/head"
import styled from "@emotion/styled"
import {StyledLink} from '../components/common'


const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog"}}}, sort: {fields: frontmatter___date}) {
        edges {
          node {
            frontmatter {
              title
              slug
              date
            }
            timeToRead
          }
        }
      }
    }
  `)

  const BlogList = styled.ul`
    list-style-type: none;
    margin: 0;
  `

    const BlogItem = styled.li`
      margin: 1rem 0;
      a{
        display: block;
        padding: 1rem 0;
        text-decoration: none;
        color: var(--textNormal);
      }
      h2 {
        margin-bottom: 0;
      }
      p {
        font-size: 0.7rem;
    }

    `

    

  return (
    <div>
      <Layout>
        <Head title="Blog" description='I write about web developement, Front End JavaScript and anything else that intrests me.'/>
        <h1>Posts</h1>
        <BlogList>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <BlogItem>
                <StyledLink to={`/blog/${edge.node.frontmatter.slug}`}>
                  <h2>{edge.node.frontmatter.title} &#8594;</h2>
                  <p>
                    {edge.node.frontmatter.date} | {edge.node.timeToRead} min
                    read
                  </p>
                </StyledLink>
              </BlogItem>
            )
          })}
        </BlogList>
      </Layout>
    </div>
  )
}

export default BlogPage