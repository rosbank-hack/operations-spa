import React from 'react';

import { SearchInput } from '../BottomNavigation/SearchInput';

import useStyles from './styles';

const BottomDrawer = ({ setOpen }) => {
  const classes = useStyles();

  return (
    <div className={classes.fullList} role="presentation" onTouchStart={() => setOpen()}>
      <div className={classes.drawer__header}>
        <SearchInput isDisabled={false} width={400} />
      </div>
    </div>
  );
};

export default BottomDrawer;
