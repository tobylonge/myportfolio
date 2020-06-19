import React from "react"

export default function Footer() {
  return (
    <div className="bg-primary justify-center text-center p-4">
      <p className="text-main-text mb-1">
        Made with 💛 by{" "}
        <a
          href="https://github.com/tobylonge"
          target="_blank"
          className="text-main-color"
        >
          Oluwatobi Alonge{" "}
        </a>
        © 2020.
      </p>
      <p className="text-main-text">
        Built with{" "}
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          className="text-main-color"
        >
          Gatsby
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          className="text-main-color"
        >
          TailwindCSS
        </a>
        , deployed on{" "}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          className="text-main-color"
        >
          Netlify
        </a>
      </p>
    </div>
  )
}
