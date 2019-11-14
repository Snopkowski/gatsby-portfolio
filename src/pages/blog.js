import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import Head from "../components/head"
import styled from "styled-components"


const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
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
        <Head title="Blog" />
        <h1>Posts</h1>
        <BlogList>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <BlogItem>
                <Link to={`/blog/${edge.node.frontmatter.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>
                    {edge.node.frontmatter.date} | {edge.node.timeToRead} min
                    read
                  </p>
                </Link>
              </BlogItem>
            )
          })}
        </BlogList>
      </Layout>
    </div>
  )
}

export default BlogPage