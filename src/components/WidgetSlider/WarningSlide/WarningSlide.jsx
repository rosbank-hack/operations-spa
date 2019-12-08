import React, { memo } from 'react';

import WarningIcon from 'assets/icons/danger.svg';
import { LineChart } from './LineChart';

import useStyles from './styles';

const WarningSlide = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LineChart />
      <div className={classes.warning__description}>
        <div className={classes.warning__title}>
          <img src={WarningIcon} alt="warning" />
          <span>Осторожно!</span>
        </div>
        <p className={classes.warning__text}>Ваши расходы выросли на 34% по сравнению с прошлым месяцем.</p>
        <p className={classes.warning__text}>Можно воспользоваться вкладом в банк по выгодным условиям</p>
        <div className={classes.controls}>
          <a href="/history">Подробнее</a>
        </div>
      </div>
    </div>
  );
};

export default memo(WarningSlide);
