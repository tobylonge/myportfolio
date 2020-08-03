import React from "react"

const Switch = props => {
  return (
    <label className="switch" htmlFor="checkbox">
      <input
        type="checkbox"
        name="switch"
        id="checkbox"
        onChange={e => props.handleChange(e)}
        checked={props.theme || false}
      />
      <span className="switch-svg"></span>
    </label>
  )
}

export default Switch
