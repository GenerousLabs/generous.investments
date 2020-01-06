import React from 'react';
import Link from 'gatsby-link';

import { useStyles } from './style';

type Props = {
  options: any[];
};

const MainNavigation: React.FC<Props> = props => {
  const { options } = props;
  const classes = useStyles(props);

  return (
    <ul>
      {options.map((link, i) => (
        <li className={classes.menuContainer} key={i}>
          <Link
            to={link.to}
            className={classes.navLink}
            activeClassName={classes.navLinkActive}>
            <span>{link.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainNavigation;
