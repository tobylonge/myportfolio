import React, { useContext, useRef } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Home from "../sections/home"
import About from "../sections/about"
import Works from "../sections/works"
import { ThemeContext } from "../context/themeContext"
import Contact from "../sections/contact"
import Footer from "../sections/footer"

const IndexPage = () => {
  const { theme } = useContext(ThemeContext)
  const themeColor = theme ? "#727698" : "#b7bacc"
  const contactRef = useRef(null)

  const scrollToRef = () => {
    window.scrollTo(0, contactRef.current.offsetTop - 200)
    window.scrollTo({
      top: contactRef.current.offsetTop - 200,
      behavior: "smooth",
    })
  }

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`oluwatobi`, `portfolio`, `alonge`, "frontend developer"]}
      />

      <div className="h-full">
        <Header />
        <Home themeColor={themeColor} scrollToRef={scrollToRef} />
        <About scrollToRef={scrollToRef} />
        <Works />
        <div ref={contactRef}>
          <Contact themeColor={themeColor} />
        </div>
        <Footer />
      </div>
    </Layout>
  )
}

export default IndexPage
