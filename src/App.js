import React, { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import theme from "./styled-components/theme"
import "./App.css"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"

const clientID = "wvaVD6itTme4P9YBmPMZkg"

// Set Dev variables and Prod Variables

if (process.env.NODE_ENV === "development") {
  var redirectURL = "http://localhost:3000/"
  var posturl = "http://localhost:5000"
} else {
  var redirectURL = "https://client-transcipture.herokuapp.com/"
  var posturl = "https://tranbackend.herokuapp.com"
}

function App() {
  const [authCode, setAuthCode] = useState("")

  useEffect(() => {
    if (window.location.href.indexOf("code") > -1) {
      console.log(window.location.href)
      let currenturl = window.location.href
      let StartPositionCode = window.location.href.indexOf("code") + 5
      let lastindexofurl = window.location.href.length
      let code = currenturl.slice(StartPositionCode, lastindexofurl)
      console.log("Code:", code)
      if (localStorage.getItem("code") !== code) {
        localStorage.removeItem("code")
      }
      localStorage.setItem("code", code)
      setAuthCode(code)
    }
  }, [])

  console.log("code: ", localStorage.getItem("code"))

  return (
    <ThemeProvider theme={theme}>
      {authCode ? (
        <Dashboard
          setAuthCode={setAuthCode}
          posturl={posturl}
          authCode={authCode}
        />
      ) : (
        <Login posturl={posturl} redirectURL={redirectURL} />
      )}
    </ThemeProvider>
  )
}

export default App
