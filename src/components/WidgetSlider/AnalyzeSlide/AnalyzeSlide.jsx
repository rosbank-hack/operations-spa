import React, { memo } from 'react';

import { PieChartFull } from './PieChartFull';

import useStyles from './styles';

const AnalyzeSlide = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PieChartFull />
      <div className={classes.finance__description}>
        <h4>Финансовая сводка по категориям</h4>
        <div className={classes.finance__category_item}>
          <div className={classes.finance__category_color_1} />
          <span>Транспорт</span>
        </div>
        <div className={classes.finance__category_item}>
          <div className={classes.finance__category_color_2} />
          <span>Развлечения</span>
        </div>
        <div className={classes.finance__category_item}>
          <div className={classes.finance__category_color_3} />
          <span>Образование</span>
        </div>
        <div className={classes.finance__category_item}>
          <div className={classes.finance__category_color_4} />
          <span>Продукты</span>
        </div>
      </div>
    </div>
  );
};

export default memo(AnalyzeSlide);
