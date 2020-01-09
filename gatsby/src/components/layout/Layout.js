import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import Fade from '@material-ui/core/Fade';
import classNames from 'classnames';

import { Header } from 'components';
import Password from 'components/password/password';

import styles from './style';

require('typeface-roboto');

type Props = {
  classes: Object,
  children: HTMLElement,
  noBackground: Boolean,
};

const Layout = ({ classes, children, noBackground }: Props) => (
  <Scrollbars
    autoHide
    autoHideTimeout={1000}
    autoHideDuration={200}
    renderView={props => <div {...props} className={classes.scrollFix} />}
    className={classes.container}>
    <Password>
      <div
        className={classNames(
          classes.pageContainer,
          !noBackground && classes.background
        )}>
        <Header />
        <Fade in mountOnEnter unmountOnExit>
          <main className={classes.content}>{children}</main>
        </Fade>
      </div>
    </Password>
  </Scrollbars>
);

export default withStyles(styles)(Layout);
