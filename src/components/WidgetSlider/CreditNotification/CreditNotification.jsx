import React, { memo } from 'react';
import Button from '@material-ui/core/Button';

import useStyles from './styles';

const CreditNotification = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.notification__title}>
        <h3>9 декабря</h3>
      </div>
      <div className={classes.notification__helper_text}>
        <p>
          Не пора ли совершить <strong className={classes.notification__subtitle}>платеж по ипотеке?</strong>
        </p>
        <p>Стоит добавить его в автоплатежи, чтобы не стать заложником пени.</p>
      </div>
      <div className={classes.notification__control}>
        <Button variant="outlined" size="small" style={{ color: '#959595', borderColor: '#959595' }}>
          Не актуально
        </Button>
        <Button variant="outlined" size="small" style={{ color: '#0643D2', borderColor: '#0643D2' }}>
          Включить автоплатеж
        </Button>
      </div>
    </div>
  );
};

export default memo(CreditNotification);
