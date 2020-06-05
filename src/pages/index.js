import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`oluwatobi`, `portfolio`, `alonge`, "frontend developer"]}
    />
    <div className={`bg-primary`}>
      <h1 className="text-main-text">Hi people</h1>
      <p>Welcome</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <button className="py-4 px-4 bg-blue-600">Button</button>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </div>
  </Layout>
)

export default IndexPage
