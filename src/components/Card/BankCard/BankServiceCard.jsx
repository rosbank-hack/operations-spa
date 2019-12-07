import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import TransactionDarkIcon from 'assets/icons/transaction-dark.svg';
import CancelIcon from 'assets/icons/cancel.svg';
import SuccessIcon from 'assets/icons/tick-inside-circle.svg';
import ProcessIcon from 'assets/icons/passage-of-time-process.svg';

import useStyles from '../styles';

const cardStatuses = {
  SUCCESS: 'Одобрено',
  ERROR: 'Отклонено',
  PROCESS: 'В расмотрении',
};

const BankServiceCard = ({ title, substatus }) => {
  const classes = useStyles();
  const history = useHistory();

  const getImage = () => {
    switch (substatus) {
      case 'SUCCESS':
        return <img src={SuccessIcon} alt="icon" />;
      case 'ERROR':
        return <img src={CancelIcon} alt="icon" />;
      case 'PROCESS':
        return <img src={ProcessIcon} alt="icon" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={classes.root__service}
      role="button"
      tabIndex="0"
      onKeyPress={() => history.push('/details/1')}
      onClick={() => history.push('/details/1')}
    >
      <div className={classes.card__main_service}>
        <div className={classes.card__image}>
          <img src={TransactionDarkIcon} alt="icon" />
        </div>
        <div className={classes.card__title}>
          <span className={classes.card__title_main}>{title}</span>
          <span className={classes.card__title_category}>Банковские операции</span>
        </div>
      </div>
      <div className={classes.card__status}>
        <div className={classes.card__image_status}>{getImage()}</div>
        <span className={classes[`card__status_${substatus.toLowerCase()}`]}>{cardStatuses[substatus]}</span>
      </div>
    </div>
  );
};

export default memo(BankServiceCard);
