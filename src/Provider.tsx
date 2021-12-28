import React from 'react'
import { ThemeProvider } from 'styled-components'

import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import Store from './redux/Store'
// import useTheme from './Theme/useTheme'
import { BrowserRouter } from 'react-router-dom'


const Providers: React.FC = ({ children }) => {
  // const theme = useTheme()

  return (
      <Provider store={Store}>
          <BrowserRouter>
          <HelmetProvider>
          {/* <ThemeProvider theme={}> */}
            {/* <GlobalStyle /> */}
                 {children}
                 {/* </ThemeProvider> */}
          </HelmetProvider>
          </BrowserRouter>

      </Provider>
  )
}

export default Providers
