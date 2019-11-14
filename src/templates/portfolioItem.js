import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import {ExtLink} from '../components/common'

const PortfolioItem = ({ portfolio }) => {
  const {
    title,
    live,
    source,
    stack,
    image,
    description,
  } = portfolio.frontmatter

  const PortfolioItemWrap = styled.div`
    > a {
      margin: 1rem 1rem 1rem 0;
      border: 2px solid var(--textNormal);
      border-radius: 8px;
      padding: 0.3rem 0.8rem;
    }
    > h3 {
        margin-top: 1rem;
    }
    > p {
        margin: 1rem 0;
    }
  `

  return (
    <PortfolioItemWrap>
      <h2>{title}</h2>
      <Img fluid={image.childImageSharp.fluid} />
      <h3>{stack}</h3>
      <ExtLink href={live}>Live</ExtLink>
      <ExtLink href={source}>Code</ExtLink>
      <p>{description}</p>
    </PortfolioItemWrap>
  )
}
export default PortfolioItem
