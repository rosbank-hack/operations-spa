import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import BurgerKingLogo from 'assets/icons/Burger_King_Logo.svg';

import useStyles from '../styles';

const AdCard = ({ price, cashback, company, category, addText, link }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div
      className={classes.root_ad}
      role="button"
      tabIndex="0"
      onKeyPress={() => history.push('/details/1')}
      onClick={() => history.push('/details/1')}
    >
      <div className={classes.card__main_service}>
        <div className={classes.card__image}>
          <img src={BurgerKingLogo} alt="icon" />
        </div>
        <div className={classes.card__title}>
          <span className={classes.card__title_main}>{company}</span>
          <span className={classes.card__title_category}>{category}</span>
        </div>
        <div className={classes.card__payment}>
          <span className={classes.card__payment_main}>{`- ${price} р.`}</span>
          <span className={classes.card__payment_cashback}>{`+ ${cashback} р. кэшбек`}</span>
        </div>
      </div>
      <div className={classes.ad__main}>
        <span className={classes.ad__text}>{addText}</span>
        <br />
        <a className={classes.ad__link} href="/history">
          {link}
        </a>
      </div>
    </div>
  );
};

export default memo(AdCard);
