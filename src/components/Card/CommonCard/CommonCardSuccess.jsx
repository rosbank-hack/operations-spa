import React, { memo } from 'react';

import BurgerKingLogo from 'assets/icons/Burger_King_Logo.svg';

import useStyles from '../styles';

const CommonCardSuccess = ({ price, cashback }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.card__image}>
        <img src={BurgerKingLogo} alt="icon" />
      </div>
      <div className={classes.card__title}>
        <span className={classes.card__title_main}>Burger King</span>
        <span className={classes.card__title_category}>Рестораны</span>
      </div>
      <div className={classes.card__payment}>
        <span className={classes.card__payment_main}>{`- ${price} р.`}</span>
        <span className={classes.card__payment_cashback}>{`+ ${cashback} р. кэшбек`}</span>
      </div>
    </div>
  );
};

export default memo(CommonCardSuccess);
