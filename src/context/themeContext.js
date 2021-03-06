import React, { useState, useEffect } from "react"

export const ThemeContext = React.createContext({
  theme: false,
  setTheme: () => {},
})

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(null)
  useEffect(() => {
    const loadTheme = () => {
      let theme = localStorage.getItem("theme")
      if (!theme) {
        console.log("I got here init", theme)
        theme = false
      }
      console.log("I got here ", theme)
      return JSON.parse(theme)
    }
    setTheme(loadTheme())
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", JSON.parse(theme))
  }, [theme])
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeContextProvider
