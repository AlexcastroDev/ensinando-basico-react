import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import './styles/styles.scss';
import { ThemeProvider } from 'styled-components'
import { AppProvider } from './contexts/AppProvider';
import { Provider } from "react-redux"
import store from "./store"

const theme = {
  colors: {
    primary: "blue",
    secondary: "#13C4A3"
  },
  sizes: {
    large: "8px 40px"
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppProvider>
          <App />
        </AppProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
