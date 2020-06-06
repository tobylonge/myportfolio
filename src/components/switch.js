import React from "react"

const Switch = props => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        name="switch"
        id="checkbox"
        onClick={props.handleChange}
      />
      <span className="switch-svg"></span>
    </label>
  )
}

export default Switch
