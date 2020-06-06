import React from "react"

const Button = props => {
  return (
    <button
      className={`py-2 px-4 text-sm font-bold uppercase ${
        props.style === "primary"
          ? "bg-main-color"
          : props.style === "secondary"
          ? "bg-transparent text-main-color border-main-color"
          : ""
      }
        `}
      style={{ color: "#2F2335" }}
    >
      {props.children || props.text}
    </button>
  )
}

export default Button
