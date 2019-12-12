import React from "react"
import Img from "gatsby-image"
<<<<<<< HEAD
import styled from "@emotion/styled"
import {Button} from '../components/common'
=======
import styled from "styled-components"
import { ButtonSmall} from '../components/common'
>>>>>>> parent of bb6a909... minor styling

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
      <a href={live}><ButtonSmall>Live</ButtonSmall></a>
      <a href={source}><ButtonSmall>Code</ButtonSmall></a>
      <p>{description}</p>
    </PortfolioItemWrap>
  )
}
export default PortfolioItem
