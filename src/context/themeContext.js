import React, { useState, useEffect } from "react"

export const ThemeContext = React.createContext({
  theme: true,
  setTheme: () => {},
})

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(null)
  useEffect(() => {
    const loadTheme = () => {
      const theme = localStorage.getItem("theme")
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
