import React, { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './SampleReduxStore/store'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'
import AppRoutes from './routes/routes'
import GlobalStyle from './theme/GlobalStyles'
import { ThemeProvider } from 'styled-components'

const container = document.getElementById('root')!
const root = createRoot(container)
const theme = {
  //  TO DO  Stage 5
  fg: '#BF4F74',
  bg: 'white'
}
const RootApp = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </ThemeProvider>
    </Fragment>
  )
}

root.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
