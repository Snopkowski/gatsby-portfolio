import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import DarkModeToggle from "./dark-mode/DarkModeToggle"
import styled from "styled-components"
import {StyledLink} from './common'

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const Header = styled.header`
    padding-top: 1rem 0 3rem;

    > nav {
      display: flex;
      justify-content: space-around;
      margin-bottom: 10vh;

      > ul {
        display: flex;
        list-style-type: none;
        justify-content: flex-start;
        margin-left: 0;
        width: 100%;
        flex-direction: row;
        margin-bottom: 0;
      }
      > li {
          color
      }
    }
  `


  return (
    <Header>
      <h2>
        <StyledLink big to="/">{data.site.siteMetadata.title}</StyledLink>
      </h2>
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/projects">Projects</StyledLink>
          </li>
          <li>
            <StyledLink to="/blog">Blog</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">Contact</StyledLink>
          </li>
        </ul>
        <DarkModeToggle />
      </nav>
    </Header>
  )
}

export default Nav
