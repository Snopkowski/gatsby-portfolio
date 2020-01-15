import React from "react"
import styled from '@emotion/styled'
import { Link } from "gatsby"
import Toggle from '../dark-mode/Toggle'

const NavItem = styled(Link)`
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: var(--textLink);
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: var(--textLink);
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`


const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">About</NavItem>
      <NavItem to="/projects">Projects</NavItem>
      <NavItem to="/blog">Blog</NavItem>
      <NavItem to="/contact">Contact</NavItem>
      <Toggle />
    </>
  )
}

export default NavbarLinks
