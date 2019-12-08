import React, { memo } from 'react';

import { DailyPack } from 'components/DailyPack';

import useStyles from './styles';

const Feed = () => {
  const classes = useStyles();

  const packs = [
    {
      title: 'Сегодня, 7 декабря',
      cards: [
        {
          type: 'COMMON',
          status: 'SUCCESS',
          price: '196',
          cashback: '34',
        },
        {
          type: 'COMMON',
          status: 'PROCESS',
          price: '196',
          cashback: '34',
        },
        {
          type: 'COMMON',
          status: 'ERROR',
          typeError: 'Ошибка транзакции',
          reason: 'Недостаточно средств',
        },
        {
          type: 'TRANSFER',
          status: 'IN',
          price: '46',
        },
      ],
    },
    {
      title: 'Вчера, 8 декабря',
      cards: [
        {
          type: 'TRANSFER',
          status: 'OUT-SUCCESS',
          price: '46',
        },
        {
          type: 'TRANSFER',
          status: 'OUT-PROCESS',
          price: '46',
        },
        {
          type: 'TRANSFER',
          status: 'OUT-ERROR',
          typeError: 'Ошибка транзакции',
          reason: 'Недостаточно средств',
        },
        {
          type: 'SERVICE',
          status: 'PAYMENT',
          price: '46',
          title: 'Комиссия',
        },
      ],
    },
    {
      title: '6 декабря',
      cards: [
        {
          type: 'SERVICE',
          status: 'SERVICE',
          substatus: 'SUCCESS',
          title: 'Заявка на кредит',
        },
        {
          type: 'SERVICE',
          status: 'SERVICE',
          substatus: 'PROCESS',
          title: 'Заявка на кредит',
        },
        {
          type: 'SERVICE',
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
          type: 'AD',
          price: '45',
          cashback: '56',
          company: "O'KEY",
          category: 'Продукты',
          addText: "С картой О'КЕЙ-Росбанк вы могли получить 78 бонусов.",
          link: 'Подробнее',
        },
        {
          type: 'AD',
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

  return (
    <div className={classes.root}>
      {packs.map((pack, index) => (
        <DailyPack key={index} pack={pack} />
      ))}
    </div>
  );
};

export default memo(Feed);
