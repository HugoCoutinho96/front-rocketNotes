import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from "./routes"
import { ThemeProvider } from 'styled-components'
import GlobalStyle from "./styles/global.js"
import theme from "./styles/theme.js"
import { AuthProvider } from './hooks/Auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
