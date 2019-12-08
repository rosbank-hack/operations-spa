import React, { memo } from 'react';

import { BottomNavigationCommon } from 'components/BottomNavigation/BottomNavigationCommon';

import useStyles from './styles';

const DetailsLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
      <BottomNavigationCommon />
    </div>
  );
};

export default memo(DetailsLayout);
