import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  #root {
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    overflow: auto;
    min-height: 100vh;
    width: 100vw;
    flex: 1;   

  }

* {
  box-sizing: border-box; 
}

body {  
    margin: 0;
    padding: 0;
    display: flex;
}

  
`

export default GlobalStyle
