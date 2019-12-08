import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import { addDigitDivider } from 'utils/number-utils';
import BurgerKingLogo from 'assets/icons/Burger_King_Logo.svg';

import useStyles from '../styles';

const CommonCardSuccess = ({ price, cashback, itemId }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div
      className={classes.root}
      role="button"
      tabIndex="0"
      onKeyPress={() => history.push(`/details/${itemId || 1}`)}
      onClick={() => history.push(`/details/${itemId || 1}`)}
    >
      <div className={classes.card__image}>
        <img src={BurgerKingLogo} alt="icon" />
      </div>
      <div className={classes.card__title}>
        <span className={classes.card__title_main}>Burger King</span>
        <span className={classes.card__title_category}>Рестораны</span>
      </div>
      <div className={classes.card__payment}>
        <span className={classes.card__payment_main}>{`-${addDigitDivider(price)} р.`}</span>
        <span className={classes.card__payment_cashback}>{`+${addDigitDivider(cashback)} р. кэшбек`}</span>
      </div>
    </div>
  );
};

export default memo(CommonCardSuccess);
