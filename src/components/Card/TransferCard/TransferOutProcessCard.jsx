import React, { memo } from 'react';

import TransactionIcon from 'assets/icons/transaction.svg';
import ProcessIcon from 'assets/icons/passage-of-time.svg';

import useStyles from '../styles';

const TransferOutProcessCard = ({ price }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.card__image}>
        <img src={TransactionIcon} alt="icon" />
      </div>
      <div className={classes.card__title}>
        <span className={classes.card__title_main}>Иван Иванович К.</span>
        <span className={classes.card__title_category}>Исходящий перевод</span>
      </div>
      <div className={classes.card__image_processing}>
        <img src={ProcessIcon} alt="process" />
      </div>
      <div className={classes.card__payment}>
        <span className={classes.card__payment_main}>{`- ${price} р.`}</span>
      </div>
    </div>
  );
};

export default memo(TransferOutProcessCard);
