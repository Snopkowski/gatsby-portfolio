import React from "react"
import Footer from "./footer"
import "../styles/index.scss"
import styled from "@emotion/styled"
import Navbar from './Navbar/Navbar'

const Layout = props => {
  const MainWrapper = styled.div`
    margin: 0 auto;
    padding: 1rem;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: var(--textNormal);
    flex-grow: 1;
    justify-content: space-around;

  `

  return (
    <>
      <Navbar />
      <MainWrapper>
        {props.children}
        <Footer />
      </MainWrapper>
    </>
  )
}

export default Layout
