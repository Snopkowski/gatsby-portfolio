import React from "react"
import styled from '@emotion/styled'
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  min-width: 36px;
  max-width: 40px;
  background-color: var(--bg);
  
  @media (max-width: 768px) and (orientation: landscape) {
    min-width: 24px;
  }
`
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "icon-noBG" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <LogoWrap as={Link} to="/">
      <Img imgStyle={{ objectFit: 'contain' }} fluid={data.file.childImageSharp.fluid} alt="logo" />
    </LogoWrap>
  )
}

export default Logo
