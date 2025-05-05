import 'styled-components';

// Extend DefaultTheme to match your actual theme structure
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      primaryLightest: string;
      primaryHover: string;
      secondary: string;
      secondaryLight: string;
      secondaryDark: string;
      accent: string;
      accentHover: string;
      text: string;
      textLight: string;
      background: string;
      backgroundAlt: string;
      border: string;
      borderLight: string; // Added missing property
      success: string;
      error: string;
      warning: string;
      info: string;
      muted: string;
      highlight: string;
      overlay: string;
    };
    fonts: {
      body: string;
      heading: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    fontWeights: {
      regular: number;
      medium: number;
      bold: number;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      round: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    transitions: {
      fast: string;
      medium: string;
      slow: string;
    };
    typography: {
      fontFamily: string;
      baseLineHeight: number;
      headingFontFamily: string;
      headingFontWeight: number;
      headingLineHeight: number;
      h1: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      h2: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      h3: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      h4: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      h5: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      h6: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      body1: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      body2: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      button: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        textTransform: string;
      };
      caption: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
    };
  }
}