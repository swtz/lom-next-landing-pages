export const theme = {
  colors: {
    primaryColor: '#0A1128',
    secondaryColor: '#DC143C',
    white: '#FFFFFF',
    mediumGray: '#DDDDDD',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif;",
      secondary: "'Montserrat', sans-serif;",
    },
    sizes: {
      xsmall: '.8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)', // "menor do que 768px"
    lteSmall: '(max-width: 414px)', // "menor do que 414px"
    gteLarge: '(min-width: 1024px)', // maior do que 1024px
  },
  spacings: {
    xsmall: '.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
} as const;
