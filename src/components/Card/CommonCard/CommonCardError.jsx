import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import BurgerKingLogo from 'assets/icons/Burger_King_Logo.svg';

import useStyles from '../styles';

const CommonCard = ({ typeError, reason, itemId }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div
      className={classes.root}
      alt="angle"
      role="button"
      tabIndex="0"
      onKeyPress={() => history.push(`/details/${itemId || 1}`)}
      onClick={() => history.push(`/details/${itemId || 1}`)}
    >
      <div className={classes.card__image}>
        <img src={BurgerKingLogo} alt="icon" />
      </div>
      <div className={classes.card__error}>
        <div className={classes.card__title}>
          <span className={classes.card__title_main}>Burger King</span>
          <span className={classes.card__title_category}>Рестораны</span>
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

export default memo(CommonCard);
