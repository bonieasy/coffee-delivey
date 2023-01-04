import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --purple-dark: #4B2995;
    --purple: #8047F8;
    --purple-light: #EBE5F9;

    --yellow-dark: #C47F17;
    --yellow: #DBAC2C;
    --yellow-light: #F1E9C9;

    --title: #272221;
    --subtitle: #403937;
    --text: #574F4D;
    --label: #8D8686;
    --hover: #d7d5d5;
    --button: #E6E5E5;
    --input: #ededed;
    --card: #F3F2F2;
    --background: #FAFAFA;
    --white: #FFF;

}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @media (max-width: 768px) {
        overflow-x: hidden;
  }
}
html {
    @media (max-width: 1080px) {
        font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
        font-size: 87.5%; //14px
    }
}
body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}
body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    border: none;
}
h1, h2, h3, h4, h5, h6, strong {
    font-weight: 800;
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
}
a {
    text-decoration: none;
    text-decoration-color : inherit;
}
h1 {
    color: var(--title);
}
button {
    cursor: pointer;
    border: none;
    outline: none;
}
[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}
`