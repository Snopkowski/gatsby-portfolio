import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import {ButtonSmall} from '../components/common'

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

  const PortfolioImage = styled(Img)`
  border-radius: 8px;
  `

  return (
    <PortfolioItemWrap>
      <h2>{title}</h2>
      <PortfolioImage fluid={image.childImageSharp.fluid} />
      <h3>{stack}</h3>
      <a href={live}><ButtonSmall>Live</ButtonSmall></a>
      <a href={source}><ButtonSmall>Code</ButtonSmall></a>
      <p>{description}</p>
    </PortfolioItemWrap>
  )
}
export default PortfolioItem
