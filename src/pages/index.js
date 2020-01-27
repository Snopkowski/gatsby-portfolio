import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import Skills from "../components/sections/skills"
import LatestBlog from "../components/latestBlog"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Hero />
      <About />
      <LatestBlog />
      <Skills />
    </Layout>
  )
}
export default IndexPage
