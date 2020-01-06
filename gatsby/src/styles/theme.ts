import muiTheme from './muiTheme';

const theme = {
  ...muiTheme,
  app: {
    maxWidth: muiTheme.typography.pxToRem(960),
  },
};

export type AppTheme = typeof theme;

export default theme;
