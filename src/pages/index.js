import React, { useContext } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Home from "../sections/home"
import About from "../sections/about"
import { ThemeContext } from "../context/themeContext"

const IndexPage = () => {
  const { theme } = useContext(ThemeContext)
  const themeColor = theme ? "#727698" : "#b7bacc"
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`oluwatobi`, `portfolio`, `alonge`, "frontend developer"]}
      />

      <div className="h-full">
        <Header />
        <Home themeColor={themeColor} />
        <About />
      </div>
    </Layout>
  )
}

export default IndexPage
