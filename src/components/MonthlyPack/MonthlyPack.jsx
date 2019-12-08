import React, { memo } from 'react';
import Divider from '@material-ui/core/Divider';

import { Category } from 'components/Category';

import useStyles from './styles';

const MonthlyPack = ({ pack: { title, categories } }) => {
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.root}>
        {categories.map((item, index) => (
          <React.Fragment key={index}>
            <Category {...item} />
            <Divider style={{ marginLeft: '50px' }} variant="inset" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default memo(MonthlyPack);
