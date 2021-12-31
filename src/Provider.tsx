import React from 'react';
import { ThemeProvider } from 'styled-components';

import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
// import useTheme from './Theme/useTheme'
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '@mui/material';

const Providers: React.FC = ({ children }) => {
return (
    <Provider store={Store}>
      <BrowserRouter>
        <HelmetProvider>
          {/* <ThemeProvider theme={}> */}
          {/* <GlobalStyles /> */}
          {children}
          {/* </ThemeProvider> */}
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default Providers;
