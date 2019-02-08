import React from "react"
import { Provider } from "react-redux"
import store from "../store"
import DevTools from "./DevTools"
import StyledContainer from "../styled/StyledContainer"
import {GlobalStyle} from '../injectGlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from '../constants/theme'
import App from '../components/App'
import { BrowserRouter as Router } from 'react-router-dom'


const Root = () => {
  return (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <StyledContainer>
            <GlobalStyle />
                <Router>
                  <App />
                </Router>
            <DevTools />
            </StyledContainer>
      </ThemeProvider>
    </Provider>
  )
}
export default Root