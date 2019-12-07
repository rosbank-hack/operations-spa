import React, { memo } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { CommonCard, TransferCard, BankCard, AdCard } from 'components/Card';
import CancelIcon from 'assets/icons/cancel.svg';
import SuccessIcon from 'assets/icons/tick-inside-circle.svg';
import ProcessIcon from 'assets/icons/passage-of-time-process.svg';
import LeftAngleIcon from 'assets/icons/left-arrow-angle.svg';

import useStyles from './styles';

const Details = () => {
  const classes = useStyles();
  const { id } = useParams();
  const status = 'SUCCESS';

  const item = {
    id,
    type: 'COMMON',
    status: 'SUCCESS',
    price: '196',
    cashback: '34',
  };

  const details = [];

  const history = useHistory();

  const getCard = () => {
    switch (item.type) {
      case 'COMMON':
        return <CommonCard {...item} />;
      case 'TRANSFER':
        return <TransferCard {...item} />;
      case 'SERVICE':
        return <BankCard {...item} />;
      case 'AD':
        return <AdCard {...item} />;
      default:
        return null;
    }
  };

  const getImage = () => {
    switch (status) {
      case 'SUCCESS':
        return <img className={classes.details__header_big} src={SuccessIcon} alt="icon" />;
      case 'ERROR':
        return <img className={classes.details__header_big} src={CancelIcon} alt="icon" />;
      case 'PROCESS':
        return <img className={classes.details__header_big} src={ProcessIcon} alt="icon" />;
      default:
        return null;
    }
  };

  return (
    <div className={classes.root}>
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
      <div className={classes.details__feed}>
        {details.map(() => (
          <p>Detail</p>
        ))}
      </div>
    </div>
  );
};

export default memo(Details);
