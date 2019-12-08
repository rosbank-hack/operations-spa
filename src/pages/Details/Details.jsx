import React, { memo, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { CommonCard, TransferCard, BankCard, AdCard } from 'components/Card';
import CancelIcon from 'assets/icons/cancel.svg';
import SuccessIcon from 'assets/icons/tick-inside-circle.svg';
import ProcessIcon from 'assets/icons/passage-of-time.svg';
import LeftAngleIcon from 'assets/icons/left-arrow-angle.svg';

import api from 'utils/api';

import { Button } from '@material-ui/core';
import useStyles from './styles';

const Details = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [card, setCard] = useState({});

  useEffect(() => {
    api.getItem(null, id).then(res => setCard(res));
  }, [id]);

  const history = useHistory();

  const getCard = () => {
    switch (card.service) {
      case 'COMMON':
        return <CommonCard {...card} />;
      case 'PAYMENTS':
        return <TransferCard {...card} />;
      case 'SERVICE':
        return <BankCard {...card} />;
      case 'AD':
        return <AdCard {...card} />;
      default:
        return null;
    }
  };

  const getImage = () => {
    switch (card.extendedStatus) {
      case 'IN':
        return <img className={classes.details__header_big} src={SuccessIcon} alt="icon" />;
      case 'OUT_DECLINE':
        return <img className={classes.details__header_big} src={CancelIcon} alt="icon" />;
      case 'OUT_PROCESSING':
        return <img className={classes.details__header_big} src={ProcessIcon} alt="icon" />;
      default:
        return null;
    }
  };

  const getField = (name, value) => {
    return (
      <div className={classes.details__field}>
        <h4>{name}</h4>
        <span>{value}</span>
      </div>
    );
  };

  const extraObj = card.extra && JSON.parse(card.extra);
  const cashback = extraObj && extraObj.BONUSES && extraObj.BONUSES.cashback;

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.details__header}>
          <img
            className={classes.details__header_angle}
            src={LeftAngleIcon}
            onClick={() => history.goBack()}
            alt="angle"
            role="button"
            tabIndex="0"
            onKeyPress={() => history.goBack()}
          />
          {getImage()}
        </div>
        <div className={classes.details__card}>{getCard()}</div>
        <div className={classes.details__list}>
          <div className={classes.details__feed}>{getField('Наименование', card.name)}</div>
          {card.mcc ? <div className={classes.details__feed}>{getField('Категория', card.mcc)}</div> : null}
          <div className={classes.details__feed}>{getField('Дата транзакции', card.date)}</div>
          {cashback ? <div className={classes.details__feed}>{getField('Бонус', `кэшбек +${cashback} р.`)}</div> : null}
        </div>
      </div>
      <div className={classes.details__controls}>
        {card.extendedStatus === 'OUT_PROCESSING' || card.extendedStatus === 'OUT_DECLINE' ? (
          <Button variant="outlined" size="large" style={{ borderRadius: '26px' }}>
            Повторить транзакцию
          </Button>
        ) : null}
        <Button variant="outlined" size="large" style={{ borderRadius: '26px' }}>
          Сохранить в шаблон
        </Button>
        <Button variant="outlined" size="large" style={{ borderRadius: '26px' }}>
          Распечатать чек
        </Button>
      </div>
    </div>
  );
};

export default memo(Details);
