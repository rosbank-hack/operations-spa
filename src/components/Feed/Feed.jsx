import React, { memo, useState } from 'react';

import { DailyPack } from 'components/DailyPack';
import { DailyPackLoad } from 'components/DailyPackLoad';

import api from 'utils/api';
import useStyles from './styles';

const Feed = () => {
  const classes = useStyles();

  const packs = [
    {
      title: 'Вчера, 8 декабря',
      cards: [
        {
          service: 'PAYMENTS',
          extendedStatus: 'OUT',
          status: 'SUCCESS',
          amount: '46',
          name: 'Иван Иванович К.',
        },
        {
          service: 'PAYMENTS',
          extendedStatus: 'OUT',
          status: 'PROCESS',
          amount: '46',
          name: 'Иван Иванович К.',
        },
        {
          service: 'PAYMENTS',
          extendedStatus: 'OUT_DECLINE',
          status: 'ERROR',
          amount: '500',
          name: 'Иван Иванович К.',
        },
        {
          service: 'PAYMENTS',
          extendedStatus: 'OUT',
          status: 'SUCCESS',
          amount: '46',
          name: 'Комиссия',
        },
      ],
    },
    {
      title: '6 декабря',
      cards: [
        {
          service: 'SERVICE',
          status: 'SERVICE',
          substatus: 'SUCCESS',
          title: 'Заявка на кредит',
        },
        {
          service: 'SERVICE',
          status: 'SERVICE',
          substatus: 'PROCESS',
          title: 'Заявка на кредит',
        },
        {
          service: 'SERVICE',
          status: 'SERVICE',
          substatus: 'ERROR',
          title: 'Заявка на кредит',
        },
      ],
    },
    {
      title: '5 декабря',
      cards: [
        {
          service: 'AD',
          price: '45',
          cashback: '56',
          company: "O'KEY",
          category: 'Продукты',
          addText: "С картой О'КЕЙ-Росбанк вы могли получить 78 бонусов.",
          link: 'Подробнее',
        },
        {
          service: 'AD',
          price: '2545',
          cashback: '126',
          company: 'РЖД',
          category: 'Транспорт',
          addText: 'С картой РЖД-Росбанк вы могли получить 234 бонусов.',
          link: 'Подробнее',
        },
      ],
    },
  ];

  const [newCards, setNewCards] = useState([
    {
      title: 'Сегодня, 9 декабря',
      cards: [],
    },
  ]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);

  const getCards = () => {
    if (!isNextPageLoading && hasNextPage) {
      const lastItemId =
        newCards[0] &&
        newCards[0].cards &&
        newCards[0].cards[newCards[0].cards.length - 1] &&
        newCards[0].cards[newCards[0].cards.length - 1].itemId;

      setIsNextPageLoading(true);
      api
        .search({ userId: 1, dateFrom: new Date(), lastItemId, itemsCount: 10 })
        .then(res => {
          setHasNextPage(res.length > 0);
          setNewCards(prev => [{ title: 'Сегодня, 9 декабря', cards: [...prev[0].cards, ...res] }]);
          setIsNextPageLoading(false);
        })
        .catch(() => {
          setIsNextPageLoading(false);
        });
    }
  };

  return (
    <div className={classes.root}>
      {newCards.map((pack, index) => (
        <DailyPackLoad
          key={index}
          pack={pack}
          hasNextPage={hasNextPage}
          loadNextPage={getCards}
          isNextPageLoading={isNextPageLoading}
        />
      ))}
      {!hasNextPage && packs.map((pack, index) => <DailyPack key={index} pack={pack} />)}
    </div>
  );
};

export default memo(Feed);
