import { Typography } from '@material-ui/core/styles/createTypography';

export const fontFamily = 'Roboto';

const typography = (typography: Typography) => ({
  fontFamily,
  fontSize: 16,
  h1: {
    fontSize: typography.pxToRem(70),
    lineHeight: 1.1,
    fontWeight: 800,
  },
  h2: {
    fontSize: typography.pxToRem(56),
    lineHeight: 1.1,
    fontWeight: 500,
  },
  h3: {
    fontSize: typography.pxToRem(28),
    lineHeight: 1.1,
    fontWeight: 300,
  },
  body1: {
    fontSize: typography.pxToRem(16),
    lineHeight: 1.1,
    fontWeight: 300,
  },
  body2: {
    fontSize: typography.pxToRem(16),
    lineHeight: 1.1,
    fontWeight: 300,
  },
});

export default typography;
