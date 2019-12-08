import React, { memo } from 'react';

import { CategoriesFeed } from 'components/CategoriesFeed';
import { WidgetSlider } from 'components/WidgetSlider';

import useStyles from './styles';

const Categories = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WidgetSlider />
      <CategoriesFeed />
    </div>
  );
};

export default memo(Categories);
