import styled from 'styled-components'
import reportWebVitals from '../reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'papercss/dist/paper.min.css'
// placeholder
function AppRoutes() {
  //   reportWebVitals(console.log)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TestWrapper>dsds</TestWrapper>
              <button>Default</button>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

const TestWrapper = styled.div`
  color: red;
`

export default AppRoutes
