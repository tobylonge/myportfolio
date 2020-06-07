import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import logo from "../images/logo.svg"
import Logo from "./logo"
import Switch from "./switch"
import { ThemeContext } from "../context/themeContext"

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext)
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
    <header>
      <div className="flex justify-between">
        <Link to="/">
          {/* <img src={logo} alt="Logo" /> */}
          <Logo color={theme ? "#dbab09" : "#fed06e"} />
        </Link>
        <div className="flex justify-between items-center">
          {/* <Link> */}
          <div className=" px-4 text-main-text uppercase text-sm">Home</div>
          {/* </Link> */}
          {/* <Link> */}
          <div className=" px-4 text-main-text uppercase text-sm">About</div>
          {/* </Link> */}
          {/* <Link> */}
          <div className=" px-4 text-main-text uppercase text-sm">
            Portfolio
          </div>
          {/* </Link> */}
          {/* <Link> */}
          <div className=" px-4 text-main-text uppercase text-sm">Contact</div>
          {/* </Link> */}
          <div>
            <Switch handleChange={e => handleThemeToggle(e)} theme={theme} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
