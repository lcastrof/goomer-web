import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 500;
  }

  button, a {
    cursor: pointer;
  }

  :root {
    --primary: #009ca3;
    --secondary: #2b0d61;

    --gray: #404040;
    --light-gray: #989898;
    --white: #fff;

    --restaurant-search: #fbfbfb;
    --plate-search: #e6e6e6;
  }
`;
