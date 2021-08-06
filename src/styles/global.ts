import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f7f7f7;
    --red: #F55145;
    --green-dark: #003926;
    --green-light: #059B5C;
    --blue: #375F9A;
    --button: #17273F;
    --text: #444444;
    --text-table: #888888;
    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
        font-size: 93.75%;
    }
    @media(max-width: 720px) {
        font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textArea, button, p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  input, textArea, select {
    outline-color: var(--green-light);
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
    font-family: 'Play', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;