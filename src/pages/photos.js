import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Photos = () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        nodes {
          id
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      image: file(relativePath: { eq: "edward-howell.jpg" }) {
        id
        childImageSharp {
          fixed(
            width: 200
            duotone: { highlight: "#ffffff", shadow: "#191D29" }
          ) {
            ...GatsbyImageSharpFixed
          }
          fluid(
            maxWidth: 500
            duotone: { highlight: "#0ec4f1", shadow: "#192550" }
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log("data ", data)
  //img, title, desc, link,
  return (
    <div>
      <h1>Photos</h1>
      <Img fixed={data.image.childImageSharp.fixed} />
      <Img fluid={data.image.childImageSharp.fluid} />
      <div className="gallery">
        {data.images.nodes.map(image => (
          <Img key={image.id} fixed={image.childImageSharp.fixed} />
        ))}
      </div>
    </div>
  )
}

export default Photos
