import React from "react"
import Nav from "./nav"
import Footer from "./footer"
import "../styles/index.scss"
import styled from "@emotion/styled"

const Layout = props => {
  const MainWrapper = styled.div`
    margin: 0 auto;
    max-width: 900px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: var(--textNormal);
    flex-grow: 1;

    > div {
      flex-grow: 1;
    }
  `

 
  return (
    <MainWrapper>
      <div>
        <Nav />
        {props.children}
      </div>
      <Footer />
    </MainWrapper>
  )
}

export default Layout
