import React, { memo } from 'react';

import { Feed } from 'components/Feed';

import useStyles from './styles';

const History = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Feed />
    </div>
  );
};

export default memo(History);
