import React, { memo } from 'react';

import BurgerKingLogo from 'assets/icons/Burger_King_Logo.svg';
import { addDigitDivider } from 'utils/number-utils';

import useStyles from './styles';

const Category = ({ title, amount }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.category__image}>
        <img src={BurgerKingLogo} alt="icon" />
      </div>
      <div className={classes.category__title}>
        <span className={classes.category__title_main}>{title}</span>
      </div>
      <div className={classes.category__amount}>
        <span className={classes.category__amount_main}>{`${addDigitDivider(amount)} р.`}</span>
      </div>
    </div>
  );
};

export default memo(Category);
