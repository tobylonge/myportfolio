import React from "react"

const Button = props => {
  return (
    <button
      className={`py-2 px-6 mb-4 text-sm font-bold mr-4 uppercase ${
        props.type === "primary"
          ? "bg-main-color"
          : props.type === "outline"
          ? "bg-transparent text-main-color border-main-color border"
          : ""
      }
        `}
      onClick={props.onClick}
    >
      {props.children || props.text}
    </button>
  )
}

export default Button
