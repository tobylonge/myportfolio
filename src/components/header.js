import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext, useState, useEffect } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import logo from "../images/logo.svg"
import Logo from "./logo"
import Switch from "./switch"
import { ThemeContext } from "../context/themeContext"

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeClass, setActiveClass] = useState("")
  const handleThemeToggle = e => {
    console.log("theme ", theme, e.target.checked)
    let status = e.target.checked
    setTheme(status)
    // if (theme === "light") {
    //   setTheme("dark")
    // } else {
    //   setTheme("light")
    // }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let activeClass = "shadow-md"
      if (window.scrollY === 0) {
        activeClass = ""
      }
      setActiveClass(activeClass)
    })
  }, [])
  return (
    <header
      className={`px-5 py-5 fixed top-0 inset-x-0 bg-primary z-10 ${activeClass}`}
    >
      <div className="sm:flex sm:justify-between container mx-auto">
        <div className="flex justify-between w-full items-center">
          <Link to="/">
            {/* <img src={logo} alt="Logo" /> */}
            <Logo color={theme ? "#dbab09" : "#fed06e"} />
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="block text-main-text focus:outline-none"
              onClick={() => {
                setMenuOpen(!menuOpen)
              }}
            >
              {!menuOpen ? (
                <svg
                  className="h-8 w-8 fill-current color-main-text"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              ) : (
                <span className="text-4xl">×</span>
              )}
            </button>
          </div>
        </div>

        <div
          className={`flex justify-between sm:items-center sm:flex flex-col sm:flex-row items-end transition delay-150 duration-300 ease-in-out sm:mt-0 mt-4 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <a href="/#home" title="Home" className="w-full">
            <div className="md:border-none w-full text-right border-b border-gray-500 border-opacity-50 py-2 sm:py-0 sm:px-4 text-main-text uppercase text-sm">
              Home
            </div>
          </a>
          {/* </Link> */}
          <a href="/#about" title="About" className="w-full">
            <div className="md:border-none w-full text-right border-b border-gray-500 border-opacity-50 py-2 sm:py-0 sm:px-4 text-main-text uppercase text-sm">
              About
            </div>
          </a>
          {/* </Link> */}
          {/* <Link> */}
          <a href="/#portfolio" title="Portfolio" className="w-full">
            <div className="md:border-none w-full text-right border-b border-gray-500 border-opacity-50  py-2 sm:py-0 sm:px-4 text-main-text uppercase text-sm">
              Portfolio
            </div>
          </a>
          {/* </Link> */}
          {/* <Link> */}
          <a href="/#contact" title="Contact" className="w-full">
            <div className=" md:border-none w-full text-right border-b border-gray-500 border-opacity-50 py-2 sm:py-0 sm:px-4 text-main-text uppercase text-sm">
              Contact
            </div>
          </a>
          {/* </Link> */}
          <div className="md:border-none w-full text-right border-b border-gray-500 border-opacity-50 py-2 sm:py-0">
            <Switch handleChange={e => handleThemeToggle(e)} theme={theme} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
