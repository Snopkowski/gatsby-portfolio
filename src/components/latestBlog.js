import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { StyledLink } from "./common"


const LatestBlog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date }
        filter: { frontmatter: { type: { eq: "blog" } } }
        limit: 1
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)

  const LatestBlogWrapper = styled.div`
    min-height: 30vh;
    display: flex;
    place-items: center;
    place-content: center;
    margin-bottom: 10vh;
    position: relative;

    &::before,
    &::after {
      position: absolute;
      top: 0;
      content: "";
      display: block;
      height: 1px;
      background: var(--textNormal);
      transition: width 0.2s ease-out 0.2s;
      width: 0;
    }

    &::before {
      top: 0;
      right: 0;
    }

    &::after {
      top: 100%;
      left: 0;
    }

    &:hover::before,
    &:hover::after,
    &:active::before,
    &:active::after {
      width: 100%;
    }
  `
  return (
    <LatestBlogWrapper>
      <StyledLink
        to={`/blog/${data.allMarkdownRemark.edges[0].node.frontmatter.slug}`}
      >
        <h3>
          Latest blog post &#10230;{" "}
          {data.allMarkdownRemark.edges[0].node.frontmatter.title}
        </h3>
      </StyledLink>
    </LatestBlogWrapper>
  )
}

export default LatestBlog
