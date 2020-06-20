import React, { useState } from "react"
import Button from "../components/button"

import Img from "gatsby-image"

const WorkCard = props => {
  const [viewId, setViewId] = useState(-1)

  const mouseEnter = index => {
    setViewId(index)
  }

  const mouseLeave = () => {
    setViewId(-1)
  }

  return (
    <div
      className="w-full sm:w-1/2 lg:w-1/3 flex-wrap sm:mb-0 mb-5"
      onMouseEnter={() => mouseEnter(props.index)}
      onMouseLeave={() => mouseLeave()}
    >
      <div className="max-w-xs sm:max-w-sm rounded overflow-hidden shadow-lg border border-border-primary cursor-pointer mx-auto sm:m-3">
        <figure className="border-b border-border-primary relative">
          <Img key={props.id} fluid={props.childImageSharp.fluid} />
          {viewId === props.index && (
            <div
              className="absolute inset-0 w-full h-full bg-secondary p-5 flex items-center justify-center flex-col"
              style={{
                transition: "all 0.3s ease-in-out",
              }}
            >
              <div className="text-main-text mb-5">{props.descText}</div>
              {props.descLink && (
                <Button
                  type={"outline"}
                  onClick={() => {
                    window.open(props.descLink, "_blank")
                  }}
                >
                  View Site
                </Button>
              )}
            </div>
          )}
        </figure>
        <div className="p-3">
          <h3 className="font-semibold text-lg mb-2 text-main-text text-left">
            {props.descTitle}
          </h3>
          {props.descLang && (
            <div className="my-3 flex flex-wrap">
              {props.descLang.map((lang, key) => (
                <span
                  className="rounded-full py-1 px-2 text-white mr-2 mb-2 flex items-center justify-center text-xs"
                  style={{ background: lang.color }}
                  key={key}
                >
                  <span className="mr-1">{lang.icon}</span>
                  {lang.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default WorkCard
