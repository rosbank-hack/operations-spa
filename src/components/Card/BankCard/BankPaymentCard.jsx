import React, { memo } from 'react';

import TransactionDarkIcon from 'assets/icons/transaction-dark.svg';

import useStyles from '../styles';

const BankPaymentCard = ({ price, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.card__image}>
        <img src={TransactionDarkIcon} alt="icon" />
      </div>
      <div className={classes.card__title}>
        <span className={classes.card__title_main}>{title}</span>
        <span className={classes.card__title_category}>Банковские операции</span>
      </div>
      <div className={classes.card__payment}>
        <span className={classes.card__payment_main}>{`- ${price} р.`}</span>
      </div>
    </div>
  );
};

export default memo(BankPaymentCard);
