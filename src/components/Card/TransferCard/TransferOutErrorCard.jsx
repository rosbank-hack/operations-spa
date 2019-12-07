import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import TransactionIcon from 'assets/icons/transaction.svg';

import useStyles from '../styles';

const TransferOutErrorCard = ({ typeError, reason }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div
      className={classes.root}
      role="button"
      tabIndex="0"
      onKeyPress={() => history.push('/details/1')}
      onClick={() => history.push('/details/1')}
    >
      <div className={classes.card__image}>
        <img src={TransactionIcon} alt="icon" />
      </div>
      <div className={classes.card__error}>
        <div className={classes.card__title}>
          <span className={classes.card__title_main}>Иван Иванович К.</span>
          <span className={classes.card__title_category}>Исходящий перевод</span>
        </div>
        <div className={classes.card__error_description}>
          <span className={classes.card__error_type}>{typeError}</span>
          <div className={classes.card__error_reason}>
            <span>Причина</span>
            <span>{reason}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(TransferOutErrorCard);
