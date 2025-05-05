import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    font-family: ${({ theme }) => theme.typography?.fontFamily || theme.fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: ${({ theme }) => theme.typography?.baseLineHeight || 1.5};
  }
  
  main {
    min-height: 100vh;
    padding-bottom: 2rem;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    font-family: ${({ theme }) => theme.typography?.headingFontFamily || theme.fonts.heading};
    font-weight: ${({ theme }) => theme.typography?.headingFontWeight || theme.fontWeights.bold};
    line-height: ${({ theme }) => theme.typography?.headingLineHeight || 1.2};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  h1 {
    font-size: ${({ theme }) => theme.typography?.h1?.fontSize || '2.5rem'};
    margin-bottom: 1.5rem;
  }
  
  h2 {
    font-size: ${({ theme }) => theme.typography?.h2?.fontSize || '2rem'};
    margin-bottom: 1.25rem;
  }
  
  h3 {
    font-size: ${({ theme }) => theme.typography?.h3?.fontSize || '1.75rem'};
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondaryDark};
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
  }
  
  button {
    cursor: pointer;
  }
  
  ul, ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    background-color: ${({ theme }) => theme.colors.backgroundAlt || '#f1f3f5'};
    padding: 0.2em 0.4em;
    border-radius: ${({ theme }) => theme.borderRadius?.small || '4px'};
    font-size: 0.9em;
  }
`;

export default GlobalStyle;