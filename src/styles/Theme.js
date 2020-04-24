// example base theme from @theme-ui/presets
export default {
  boxShadow: `0 2px 40px 0 rgba(30,55,145,0.15)`,
  transitions: ['.125s all ease-in-out', '.250s all ease-in-out', '.375s all ease-in-out', '.5s all ease-in-out'],
  borderLink: '1px solid black',
  // sx properties:
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 12, 16, 32, 64, 128, 256, 512],
  sizes: [10, 20, 30, 40, 50, 60],
  fonts: {
    body: 'Clan Book',
    heading: 'Clan Bold',
  },
  fontSizes: [10, 13, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
    lightgrey: "#f5f5f5",
    midgrey: "#d8d8d8",
    textgrey: "#343434",
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
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
  },
}