import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext, useState } from "react"
import logo from "../images/logo.svg"
import Logo from "./logo"
import Switch from "./switch"
import { ThemeContext } from "../context/themeContext"

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [menuOpen, setMenuOpen] = useState(false)
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
  return (
    <header className="px-5 container mx-auto py-5 ">
      <div className="sm:flex sm:justify-between">
        <div className="flex justify-between w-full items-center">
          <Link to="/">
            {/* <img src={logo} alt="Logo" /> */}
            <Logo color={theme ? "#dbab09" : "#fed06e"} />
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              class="block text-main-text focus:outline-none"
              onClick={() => {
                setMenuOpen(!menuOpen)
              }}
            >
              {!menuOpen ? (
                <svg class="h-8 w-8 fill-current" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              ) : (
                <span class="text-4xl">×</span>
              )}
            </button>
          </div>
        </div>

        <div
          className={`flex justify-between sm:items-center sm:flex flex-col sm:flex-row items-end transition delay-150 duration-300 ease-in-out sm:mt-0 mt-4 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {/* <Link> */}
          <div className="md:border-none w-full text-right border-b border-gray-500 border-opacity-50 py-2 sm:py-0 sm:px-4 text-main-text uppercase text-sm">
            Home
          </div>
          {/* </Link> */}
          {/* <Link> */}
          <div className="md:border-none w-full text-right border-b border-gray-500 border-opacity-50 py-2 sm:py-0 sm:px-4 text-main-text uppercase text-sm">
            About
          </div>
          {/* </Link> */}
          {/* <Link> */}
          <div className="md:border-none w-full text-right border-b border-gray-500 border-opacity-50  py-2 sm:py-0 sm:px-4 text-main-text uppercase text-sm">
            Portfolio
          </div>
          {/* </Link> */}
          {/* <Link> */}
          <div className=" md:border-none w-full text-right border-b border-gray-500 border-opacity-50 py-2 sm:py-0 sm:px-4 text-main-text uppercase text-sm">
            Contact
          </div>
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
