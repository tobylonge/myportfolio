import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import WorkCard from "../components/workCard"
import { description } from "../data/data"

const Works = () => {
  const [myWorks, setMyWorks] = useState([])
  const [worksImages, setWorksImages] = useState([])
  const [initWorksImages, setInitWorksImages] = useState([])
  const [type, setType] = useState(0)

  const data = useStaticQuery(graphql`
    query Works {
      images: allFile(filter: { relativeDirectory: { eq: "works" } }) {
        nodes {
          id
          name
          childImageSharp {
            fluid(maxWidth: 350, maxHeight: 190) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const works = JSON.parse(JSON.stringify(data.images.nodes))

  useEffect(() => {
    setWorksImages(works)
  }, [])

  useEffect(() => {
    console.log("myWorks ", myWorks)
    const newWorks = worksImages.map(work => {
      if (work.id) {
        const [workId, workName] = work.name.split("-")
        const index = description.findIndex(
          desc => desc.descId === Number(workId)
        )

        if (index > -1) {
          work = { ...work, ...description[index] }
        }
      }
      return work
    })
    console.log("newWorks ", newWorks)
    setMyWorks(newWorks)
    setInitWorksImages(newWorks)
  }, [worksImages])

  const filterWorks = type => {
    setType(type)
    if (type === 1) {
      let myWorks = initWorksImages
      const filterWorks = myWorks.filter(work => work.descType === 2)
      setMyWorks(filterWorks)
    } else if (type === 2) {
      let myWorks = initWorksImages
      const filterWorks = myWorks.filter(work => work.descType === 1)
      setMyWorks(filterWorks)
    } else {
      setMyWorks(initWorksImages)
    }
  }
  return (
    <div
      className={`bg-primary justify-center flex min-h-screen`}
      id="portfolio"
    >
      <div className="w-full sm:w-10/12 md:w-9/12 px-5 sm:px-0 mx-auto sm:flex h-full relative flex-col justify-center pt-16 sm:pb-40">
        <div className="text-center">
          <h4 className="uppercase text-base text-main-color mb-5">
            Recent Works
          </h4>
          <ul className="flex text-main-text justify-center">
            <li className="px-8 sm:px-10 cursor-pointer">
              <a
                className={!type ? "text-main-color" : 0}
                onClick={() => filterWorks(0)}
              >
                All
              </a>
            </li>
            <li
              className="px-8 sm:px-10 border-l border-r border-main-text cursor-pointer"
              onClick={() => filterWorks(1)}
            >
              <a className={type === 1 ? "text-main-color" : 0}>Web</a>
            </li>
            <li
              className="px-8 sm:px-10 cursor-pointer"
              onClick={() => filterWorks(2)}
            >
              <a className={type === 2 ? "text-main-color" : 0}>Design</a>
            </li>
          </ul>
          <div className="flex flex-wrap my-5 -mx-3">
            {myWorks.map((work, index) => (
              <WorkCard key={work.id} {...work} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
