import React, { memo } from 'react';

import { PieChart } from './PieChart';

import useStyles from './styles';

const FinanceHealth = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PieChart />
      <div className={classes.finance__description}>
        <span className={classes.finance__title}>Поздравляем! Ваш уровень финансового здоровья вырос</span>
      </div>
    </div>
  );
};

export default memo(FinanceHealth);
