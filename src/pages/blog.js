import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Head from "../components/head"
import styled from "@emotion/styled"
import {StyledLink} from '../components/common'
import {Tag} from '../components/common'

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
              tags
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
      margin: 1rem 0 0;
      transition: transform 0.3s;

      :hover {
        transform: scale(1.05);
      }
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
        <h1>Latest blog posts</h1>
        <BlogList>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <BlogItem>
                <StyledLink to={`/blog/${edge.node.frontmatter.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>
                    {edge.node.frontmatter.date} | {edge.node.timeToRead} min
                    read
                  </p>
                  {edge.node.frontmatter.tags.map(tag => {
                    return(
                    <Tag>#{tag}</Tag>
                    )
                  })}
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