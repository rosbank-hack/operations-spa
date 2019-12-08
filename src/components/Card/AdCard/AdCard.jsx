import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import RjdLogo from 'assets/icons/rjd.svg';
import OkeyLogo from 'assets/icons/okey.svg';
import { addDigitDivider } from 'utils/number-utils';

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
          {company === 'РЖД' ? <img src={RjdLogo} alt="icon" /> : <img src={OkeyLogo} alt="icon" />}
        </div>
        <div className={classes.card__title}>
          <span className={classes.card__title_main}>{company}</span>
          <span className={classes.card__title_category}>{category}</span>
        </div>
        <div className={classes.card__payment}>
          <span className={classes.card__payment_main}>{`- ${addDigitDivider(price)} р.`}</span>
          <span className={classes.card__payment_cashback}>{`+ ${addDigitDivider(cashback)} р. кэшбек`}</span>
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
