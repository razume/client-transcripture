import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../styled-components/theme'
import '../App.css'

function Dashboard () {
  const handleClick = e => {
    localStorage.removeItem('code')
  }
  return (
    <div>
      <h1>deeznuts</h1>
      <p>{localStorage.getItem('code')}</p>
      <button onClick={handleClick}>Log Out</button>
    </div>
  )
}

export default Dashboard
