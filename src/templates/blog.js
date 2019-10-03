import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Head from '../components/head'
import postStyles from './blogItem.module.scss'

export const query = graphql`
query($slug: String!) {
  markdownRemark(frontmatter: { slug: { eq: $slug } }) {
    frontmatter {
      title
      slug
      date
    }
    html
    timeToRead
  }
}
`
const Blog = ({data})=> {
  const post = data.markdownRemark
  return (
    <Layout>
      <Head title={post.frontmatter.title}/>
      <h1>{post.frontmatter.title}</h1>
      <p className={postStyles.dateAndTime} >{post.frontmatter.date} | {post.timeToRead} min read</p>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default Blog