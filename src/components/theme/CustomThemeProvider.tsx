import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

interface CustomThemeProviderProps {
  children: React.ReactNode;
}

const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;