import React, { memo } from 'react';

import { Feed } from 'components/Feed';
import { WidgetSlider } from 'components/WidgetSlider';

import useStyles from './styles';

const History = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WidgetSlider />
      <Feed />
    </div>
  );
};

export default memo(History);
