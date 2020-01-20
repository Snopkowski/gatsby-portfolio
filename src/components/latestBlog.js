import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { StyledLink, Tag } from "./common"



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
              tags
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
    transition: transform 0.3s;


    p:first-child {
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
    }


    :hover {
      transform: scale(1.05);

      @media (max-width: 768px) {
        transform: none;
      }
    }

    ::before,
    ::after {
      position: absolute;
      top: 0;
      content: "";
      display: block;
      height: 1px;
      background: var(--textNormal);
      transition: width 0.2s ease-out 0.2s;
      width: 0;
    }

    ::before {
      top: 0;
      right: 0;
    }

    ::after {
      top: 100%;
      left: 0;
    }

    :hover::before,
    :hover::after,
    :active::before,
    :active::after {
      width: 100%;
    }
  `
  const latestBlog = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <LatestBlogWrapper>
      <StyledLink
        to={`/blog/${latestBlog.slug}`}
      >
        <p>Latest Blog Post</p>
        <h3>{latestBlog.title}</h3>
        {latestBlog.tags.map(tag => {
          return (
          <Tag>#{tag}</Tag>
          )
        })}
        
      </StyledLink>
    </LatestBlogWrapper>
  )
}

export default LatestBlog
