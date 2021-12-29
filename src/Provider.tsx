import React, { useState } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { GlobalStyle } from './theme/GlobalStyle'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import Store from './redux/Store'
import { lightTheme, darkTheme } from './theme/theme'
import { BrowserRouter } from 'react-router-dom'



const Providers: React.FC = ({ children }) => {
  const [theme, setTheme] = useState({
    background: 'string',
    primary: 'string',
    secondary: 'string',
    font: 'string',
    mode: 'light',
})



  return (
    <Provider store={Store}>
      <BrowserRouter>
        <HelmetProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </HelmetProvider>
      </BrowserRouter>

    </Provider>
  )
}

export default Providers
