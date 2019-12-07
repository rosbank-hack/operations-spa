import React from 'react';

import { CommonCard, TransferCard, BankCard, AdCard } from 'components/Card';

import useStyles from './styles';

const DailyPack = ({ pack: { title, cards } }) => {
  const classes = useStyles();

  const getCards = () => {
    return cards.map((item, index) => {
      switch (item.type) {
        case 'COMMON':
          return <CommonCard key={index} {...item} />;
        case 'TRANSFER':
          return <TransferCard key={index} {...item} />;
        case 'SERVICE':
          return <BankCard key={index} {...item} />;
        case 'AD':
          return <AdCard key={index} {...item} />;
        default:
          return null;
      }
    });
  };

  return (
    <div>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.root}>{getCards()}</div>
    </div>
  );
};

export default DailyPack;
