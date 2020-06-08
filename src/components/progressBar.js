import React from "react"

export default function progressBar(props) {
  return (
    <div className="w-1/3 mb-8">
      <div className="ml-4">
        <div className="flex justify-between">
          <p className="text-xs text-main-text">{props.title}</p>
          <p className="text-xs text-main-text">{props.percentage}</p>
        </div>
        <div class="shadow bg-black mt-2 rounded-full">
          <div
            class="bg-main-color text-xs leading-none py-1 text-center text-white rounded-full"
            style={{ width: `${props.percentage}` }}
          >
            {/* 45% */}
          </div>
        </div>
      </div>
    </div>
  )
}
