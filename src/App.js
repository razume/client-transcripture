import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styled-components/theme'
import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const clientID = 'wvaVD6itTme4P9YBmPMZkg'

function App () {
  useEffect(() => {
    if (window.location.href.indexOf('code') > -1) {
      console.log(window.location.href)
      let currenturl = window.location.href
      let StartPositionCode = window.location.href.indexOf('code') + 5
      let lastindexofurl = window.location.href.length
      let code = currenturl.slice(StartPositionCode, lastindexofurl)
      console.log('Code:', code)
      if (localStorage.getItem('code') !== code) {
        localStorage.removeItem('code')
      }
      localStorage.setItem('code', code)
    }
  }, [])

  console.log('deez nuts: ', localStorage.getItem('code'))

  return (
    <ThemeProvider theme={theme}>
      {localStorage.getItem('code') ? <Dashboard /> : <Login />}
    </ThemeProvider>
  )
}

export default App
