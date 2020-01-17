import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Head from "../components/head"
import styled from "@emotion/styled"
import { Tag } from "../components/common"
import { Link } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date
        description
        keywords
        tags
      }
      html
      timeToRead
    }
  }
`

const Blog = ({ data, pageContext }) => {
  const BlogItem = styled.p`
    font-size: 0.7rem;
    padding-bottom: 1rem;
  `

  const PrevNextWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30%;
    margin: 5vh 0;
    text-align: center;
  `
  const Direction = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  `

  const PrevNextItem = styled.div`
  text-decoration: none;
  grid-column: ${props => props.right ? '2/3' : '1/2'}; 
  transition: all 0.3s;
  :hover{
    transform: scale(1.05);
  }
  `

  const { next, prev } = pageContext
  const post = data.markdownRemark

  console.log(pageContext)
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
      <BlogItem>
        {post.frontmatter.tags.map(tag => {
          return <Tag>#{tag}</Tag>
        })}
      </BlogItem>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <PrevNextWrap>
        {prev && (
          <PrevNextItem as={Link} to={`blog/${prev.frontmatter.slug}`}>
            <Direction>&#8592;Previous</Direction>
            <small>{prev.frontmatter.title}</small>
          </PrevNextItem>
        )}
        {next && (
          <PrevNextItem right as={Link} to={`blog/${next.frontmatter.slug}`}>
            <Direction>Next&#8594;</Direction>
            <small>{next.frontmatter.title}</small>
          </PrevNextItem>
        )}
      </PrevNextWrap>
    </Layout>
  )
}

export default Blog
