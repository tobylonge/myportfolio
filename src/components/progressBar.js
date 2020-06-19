import React, { useContext } from "react"
import { ThemeContext } from "../context/themeContext"

export default function ProgressBar(props) {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 mb-8">
      <div className="ml-4">
        <div className="flex justify-between">
          <p className="text-xs text-main-text">{props.title}</p>
          <p className="text-xs text-main-text">{props.percentage}</p>
        </div>
        <div
          className="shadow mt-2 rounded-full"
          style={{ background: theme ? "#DAE0ED" : "#000000" }}
        >
          <div
            className="bg-main-color text-xs leading-none py-1 text-center text-white rounded-full"
            style={{ width: `${props.percentage}` }}
          >
            {/* 45% */}
          </div>
        </div>
      </div>
    </div>
  )
}
