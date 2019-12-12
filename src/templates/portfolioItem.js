import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import {Button} from '../components/common'

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
      <a href={live}><Button small>Live</Button></a>
      <a href={source}><Button small>Code</Button></a>
      <p>{description}</p>
    </PortfolioItemWrap>
  )
}
export default PortfolioItem
