import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Social from "./social"
import styled from "styled-components"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const FooterWrap = styled.footer`
    margin-top: 3rem;

    p {
      font-size: .8rem;
    }
  `

  return (
    <FooterWrap>
      <Social />
      <p>Made by {data.site.siteMetadata.author}, &copy; 2019</p>
    </FooterWrap>
  )
}

export default Footer
