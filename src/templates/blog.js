import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Head from '../components/head'

export const query = graphql`
query($slug: String!) {
  markdownRemark(frontmatter: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      slug
      date
    }
    html
  }
}
`
const Blog = ({data})=> {
  const post = data.markdownRemark
  return (
    <Layout>
      <Head title={post.frontmatter.title}/>
      <h1>{post.frontmatter.title}</h1>
      <p>Published: {post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default Blog