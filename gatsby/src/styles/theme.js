import muiTheme from './muiTheme';
import config from '../../config';

const theme = {
  ...muiTheme,
  app: {
    maxWidth: muiTheme.typography.pxToRem(config.maxWidth),
  },
};

export default theme;
