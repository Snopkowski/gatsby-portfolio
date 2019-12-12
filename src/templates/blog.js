import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Head from "../components/head"
import styled from '@emotion/styled'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date
        description
        keywords
      }
      html
      timeToRead
    }
  }
`

const Blog = ({ data }) => {
  const BlogItem = styled.p`
    font-size: 0.7rem;
    padding-bottom: 2rem;
  `

  const post = data.markdownRemark
  return (
    <Layout>
      <Head
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        keywords={post.frontmatter.keywords}
      />
      <h1>{post.frontmatter.title}</h1>
      <BlogItem>
        {post.frontmatter.date} | {post.timeToRead} min read
      </BlogItem>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default Blog
