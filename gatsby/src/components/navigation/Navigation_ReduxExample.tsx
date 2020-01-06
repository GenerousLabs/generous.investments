import React from 'react';
import { withStyles } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';

import { compose, isMobileView } from '../../utils';
import { connectProps, open, toggleMenu } from '../../state';

import MainNavigation from './main';
import MobileNavigation from './mobile';
import options from './content';
import { useStyles } from './style';

type Props = {
  classes: Object;
  width: string;
  open: Boolean;
  toggleMenu: () => void;
};

const Navigation: React.FC<Props> = ({ width, open, toggleMenu }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {isMobileView(width) ? (
        <MobileNavigation
          options={options}
          open={open}
          onClick={() => toggleMenu()}
        />
      ) : (
        <MainNavigation options={options} />
      )}
    </div>
  );
};

export default compose(connectProps(open, toggleMenu), withWidth())(Navigation);
