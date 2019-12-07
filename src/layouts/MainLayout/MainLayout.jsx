import React, { memo } from 'react';

import { BottomNavigation } from 'components/BottomNavigation';

import useStyles from './styles';

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
      <BottomNavigation />
    </div>
  );
};

export default memo(MainLayout);
