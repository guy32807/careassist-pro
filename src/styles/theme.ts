const theme = {
  colors: {
    primary: '#0062cc',
    primaryLight: '#4d94ff',
    primaryDark: '#004999',
    primaryLightest: '#e6f0ff',
    primaryHover: '#0056b3',
    secondary: '#4dabf7',
    secondaryLight: '#7fc1ff',
    secondaryDark: '#1a82e2',
    accent: '#FF6B6B',
    accentHover: '#ff5252',
    text: '#333333',
    textLight: '#6c757d',
    background: '#f8f9fa',
    backgroundAlt: '#e9ecef',
    border: '#dee2e6',
    borderLight: '#eaecef',
    success: '#28a745',
    error: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    muted: '#999999',
    highlight: '#ffff00',
    overlay: 'rgba(0, 0, 0, 0.5)'
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  },
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    xxlarge: '2rem'
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '50%'
  },
  shadows: {
    small: '0 2px 5px rgba(0, 0, 0, 0.1)',
    medium: '0 5px 15px rgba(0, 0, 0, 0.1)',
    large: '0 10px 25px rgba(0, 0, 0, 0.1)'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem'
  },
  breakpoints: {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  transitions: {
    fast: 'all 0.2s ease',
    medium: 'all 0.3s ease',
    slow: 'all 0.5s ease'
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    baseLineHeight: 1.5,
    headingFontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    headingFontWeight: 600,
    headingLineHeight: 1.2,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.75,
      textTransform: 'uppercase'
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66
    }
  }
};

export default theme;