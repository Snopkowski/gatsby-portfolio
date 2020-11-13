import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Head from "../components/head"
import styled from "@emotion/styled"
import { Tag } from "../components/common"
import HyvorTalk from "hyvor-talk-react"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date
        description
        keywords
        tags
      }
      body
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
    grid-template-columns: repeat(5, 1fr);
    margin: 5vh 0;
    text-align: center;

    @media (max-wdith: 968px) {
      font-size: 80%;
    }
  `
  const Direction = styled.div`
    text-transform: uppercase;
    letter-spacing: 1px;
    white-space: nowrap;
  `

  const PrevNextItem = styled.div`
    text-decoration: none;
    grid-column: ${props => (props.right ? "4/6" : "1/3")};
    text-align: ${props => (props.right ? "right" : "left")};
    transition: all 0.3s;
    background: var(--textNormal);
    color: var(--bg);
    padding: 1rem;
    border-radius: 4px;
    width: 100%;
    :hover {
      transform: scale(1.05);
    }
  `

  const MarkdownWrap = styled.div`
    background-color: var(--bg);
    padding: 1rem;
    border-radius: 8px;
    @media (max-width: 768px) {
      padding: 0;
    }
  `

  const { next, prev } = pageContext
  const post = data.mdx

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
      +<MDXRenderer>{post.body}</MDXRenderer>
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
      <HyvorTalk.Embed websiteId={178} loadMode="scroll" />
    </Layout>
  )
}

export default Blog
