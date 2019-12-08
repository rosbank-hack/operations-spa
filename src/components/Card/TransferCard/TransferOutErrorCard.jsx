import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import { addDigitDivider } from 'utils/number-utils';
import TransactionIcon from 'assets/icons/transaction.svg';

import useStyles from '../styles';

const TransferOutErrorCard = ({ amount, name, mcc, extra, itemId }) => {
  const classes = useStyles();
  const history = useHistory();
  const extraObj = extra && JSON.parse(extra);
  const iconLink = extraObj && extraObj.PROVIDERS && extraObj.PROVIDERS.providerIcon;
  const cashback = extraObj && extraObj.BONUSES && extraObj.BONUSES.cashback;

  return (
    <div
      className={classes.root}
      role="button"
      tabIndex="0"
      onKeyPress={() => history.push(`/details/${itemId || 1}`)}
      onClick={() => history.push(`/details/${itemId || 1}`)}
    >
      <div className={classes.card__image}>
        <img src={iconLink || TransactionIcon} alt="icon" />
      </div>
      <div className={classes.card__error}>
        <div className={classes.card__title}>
          <span className={classes.card__title_main}>{name}</span>
          <span className={classes.card__title_category}>{mcc || 'Исходящий платеж'}</span>
        </div>
        <div className={classes.card__error_description}>
          <span className={classes.card__error_type}>Отклонено</span>
        </div>
      </div>
      <div className={classes.card__payment}>
        <span className={classes.card__payment_main}>{`- ${addDigitDivider(amount)} р.`}</span>
        {cashback && (
          <span className={classes.card__payment_cashback}>{`+${addDigitDivider(cashback)} р. кэшбек`}</span>
        )}
      </div>
    </div>
  );
};

export default memo(TransferOutErrorCard);
