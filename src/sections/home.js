import React from "react"
import { GithubIcon, DribbbleIcon, LinkedInIcon } from "../components/Icons"
import Button from "../components/button"
// import Image from "../components/image"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
const Home = props => {
  const data = useStaticQuery(graphql`
    query Imag {
      image: file(relativePath: { eq: "me-bg-blue.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
          fixed(height: 230) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log("data ", data)

  return (
    <div
      className={`bg-primary flex flex-col flex min-h-screen sm:h-screen pb-5 sm:pb-0 sm:justify-center`}
      id="home"
      // style={{ height: "calc(100vh - 3.875rem)" }}
    >
      {/* <Header /> */}
      <div className="w-full sm:w-10/12 md:w-9/12 mx-auto px-5 sm:px-0 flex h-full relative flex-col-reverse sm:flex-row sm:justify-start justify-end mt-24 sm:mt-0">
        <div className="sm:w-1/2 self-center">
          <h4 className="uppercase text-sm text-main-color before-line mb-3">
            Hello
          </h4>
          <h1 className="text-secondary-text text-5xl font-bold">
            I'm <span className="text-main-color">Oluwatobi</span> Alonge
          </h1>
          <p className="text-main-text font-medium">
            Front-End Developer
            <span className="text-main-color mx-2">|</span> UI/UX Designer
          </p>
          <div className="mt-5 flex mb-16">
            <div>
              <a href="https://github.com/tobylonge" target="_blank">
                <GithubIcon height={24} width={24} color={props.themeColor} />
              </a>
            </div>
            <div className="mx-4">
              <a href="https://dribbble.com/tobylonge" target="_blank">
                <DribbbleIcon height={24} width={24} color={props.themeColor} />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/alonge-oluwatobi/"
                target="_blank"
              >
                <LinkedInIcon height={24} width={24} color={props.themeColor} />
              </a>
            </div>
          </div>
          <Button type={"primary"} onClick={props.scrollToRef}>
            Contact Me
          </Button>
        </div>
        <div className="sm:w-1/2 px-10 sm:pt-10 sm:flex sm:flex-col sm:absolute p-0 bottom-0 right-0">
          <div className="hidden sm:block">
            <Img fluid={data.image.childImageSharp.fluid} />
          </div>
          <div className="block sm:hidden text-center">
            <Img
              fixed={data.image.childImageSharp.fixed}
              objectFit="cover"
              imgStyle={{
                background: "var(--text-secondary)",
                borderRadius: "50%",
                height: "154px",
                objectPosition: "top center",
              }}
              style={{ height: "154px" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
