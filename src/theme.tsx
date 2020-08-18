const baseHeading = {
  color: 'text',
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
  mb: 2,
};

const baseBody = {
  color: 'text',
  fontFamily: 'body',
  lineHeight: 'body',
  fontWeight: 'body',
  mb: 1,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
};

export const baseContainer = {
  py: 0,
  px: [3, 4],
  mx: 'auto',
  maxWidth: 1800, // need to update this number with design
};

export const base = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  breakpoints: [500, 832, 1024, baseContainer.maxWidth].map((p) => p + 'px'),

  colors: {
    black: '#221f20',
    white: '#ffffff',
    athensGrey: '#f3f4f7',
    backgroundGrey: '#dfdede',
    lightGrey: '#c6c6c6',
    grey: '#a6a6a6',
    boulder: '#747474',
    darkGrey: '#454f5b',
    red: '#F94144',
    orange: '#f38230',
    yellow: '#F9C74F',
    green: '#2b9348',
    blue: '#577590',

    text: '#221f20',
    background: '#ffffff',
    muted: '#dfdede',
  },
  radii: {
    square: 0,
    radius: 4,
    rounded: 10,
    circle: '100%',
  },
  layout: {
    container: {
      ...baseContainer,
    },
    narrow: {
      ...baseContainer,
      maxWidth: 800,
      px: [0, 0],
    },
  },
  text: {
    default: {
      variant: 'styles.p',
      mb: 3,
    },
    copy: {
      variant: 'text.default',
    },
    page: {
      variant: 'styles.h1',
      mt: 3,
    },
    section: {
      variant: 'styles.h2',
      pt: 3,
      pb: 2,
    },
    copyHeading: {
      variant: 'styles.h3',
      py: 2,
    },
    boxHeader: {
      variant: 'styles.h2',
      color: 'background',
      my: 3,
      mx: 2,
    },
    boxText: {
      variant: 'styles.p',
      color: 'background',
      mx: 2,
    },
  },
  grids: {
    base: {
      bg: 'muted',
      p: 4,
      gridAutoRows: '200px',
    },
  },
  links: {
    logo: {
      mr: 2,
      py: 2,
      px: 5,
      bg: 'orange',
      fontSize: 0,
      textAlign: 'center',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&.active, &.active:hover': {svg: {transform: 'scale(1.1)'}},
      '&:hover': {svg: {transform: 'scale(1.1)'}},
      svg: {
        transition: 'transform 0.2s ease-in-out',
        height: 70,
        width: 70,
      },
    },
    nav: {
      fontSize: 3,
      p: 2,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      textDecoration: 'none',
      bg: 'grey',
      color: 'white',
      transition: 'background 0.3s ease-in-out',
      '&.active, &.active:hover': {bg: 'boulder'},
      '&:hover': {bg: 'boulder'},
    },
    recipe: {
      color: 'blue',
      fontSize: 3,
      textTransform: 'capitalize',
    },
    back: {
      display: 'inline-flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'text',
      fontSize: 3,
      my: 2,
      svg: {mr: 2},
    },
    page: {
      display: 'inline-block',
      color: 'text',
      textDecoration: 'none',
      fontSize: 2,
      px: 3,
      py: 2,
      my: 2,
      borderRadius: 'circle',
      position: 'relative',
      '&:after': {
        content: '""',
        width: '40px',
        height: '40px',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        left: '50%',
        top: '50%',
        borderRadius: 'circle',
        zIndex: -1,
      },
      '&.active, &.active:hover': {':after': {bg: 'orange'}, color: 'white'},
      '&:hover:after': {bg: 'athensGrey'},
      '&[disabled]': {':after': {opacity: 0.5}, color: 'text'},
    },
    breadcrumb: {
      display: 'inline-block',
      color: 'text',
      textDecoration: 'none',
      fontSize: 2,
      px: 3,
      whiteSpace: 'nowrap',
      py: 1,
      my: 2,
      textTransform: 'capitalize',
      borderRadius: 'radius',
      '&:hover': {bg: 'athensGrey'},
      '&[disabled]': {
        pointerEvents: 'none',
        cursor: 'default',
        ':hover': {bg: 'background'},
      },
    },
    arrow: {
      variant: 'links.page',
      px: '10px', // hack to get it to match page link hover style
      '&[disabled], &[disabled]:hover': {
        opacity: 0.3,
        color: 'text',
        bg: 'background',
      },
    },
  },
  boxes: {
    centered: {
      display: 'grid',
      placeItems: 'center',
    },
  },
  buttons: {
    toggle: {
      variant: 'links.nav',
      position: 'relative',
      flex: '1 1 auto',
      py: 3,
      border: 'none',
      borderRadius: 'square',
      bg: 'grey',
      color: 'white',
      fontSize: 1,
      letterSpacing: 2,
      textTransform: 'uppercase',
      cursor: 'pointer',
      '&:focus': {
        outlineColor: 'green',
        outlineOffset: '-3px',
        outlineWidth: '3px',
        outlineStyle: 'solid',
      },
    },
  },
  styles: {
    root: {
      ...baseBody,
    },
    h1: {
      ...baseHeading,
      fontSize: 5,
      mb: [2, 3],
    },
    h2: {
      ...baseHeading,
      fontSize: 4,
    },
    h3: {
      ...baseHeading,
      fontSize: 3,
    },
    h4: {
      ...baseHeading,
      fontSize: 2,
    },
    h5: {
      ...baseHeading,
      fontSize: 1,
    },
    h6: {
      ...baseHeading,
      fontSize: 0,
    },
    p: {
      ...baseBody,
    },
    a: {
      color: 'blue',
    },
    ul: {
      listStyle: 'none',
      pl: 0,
    },
    hr: {mt: 4, mb: 5},
    pre: {},
    code: {},
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
};

export default base;
