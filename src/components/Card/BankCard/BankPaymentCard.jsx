import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import { addDigitDivider } from 'utils/number-utils';
import TransactionDarkIcon from 'assets/icons/transaction-dark.svg';

import useStyles from '../styles';

const BankPaymentCard = ({ price, title }) => {
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
        <img src={TransactionDarkIcon} alt="icon" />
      </div>
      <div className={classes.card__title}>
        <span className={classes.card__title_main}>{title}</span>
        <span className={classes.card__title_category}>Банковские операции</span>
      </div>
      <div className={classes.card__payment}>
        <span className={classes.card__payment_main}>{`-${addDigitDivider(price)} р.`}</span>
      </div>
    </div>
  );
};

export default memo(BankPaymentCard);
