import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: ${({ theme }) => theme.typography.baseLineHeight};
  }
  
  main {
    min-height: calc(100vh - 250px);
    padding-bottom: 3rem;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    font-family: ${({ theme }) => theme.typography.headingFontFamily};
    font-weight: ${({ theme }) => theme.typography.headingFontWeight};
    line-height: ${({ theme }) => theme.typography.headingLineHeight};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  button {
    cursor: pointer;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .section {
    padding: 4rem 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    .section {
      padding: 3rem 0;
    }
  }
`;

export default GlobalStyle;