import React, { memo } from 'react';

import { MonthlyPack } from 'components/MonthlyPack';

import useStyles from './styles';

const CategoriesFeed = () => {
  const classes = useStyles();

  const packs = [
    {
      title: 'Декабрь',
      categories: [
        {
          title: 'Транспорт',
          amount: '4565',
        },
        {
          title: 'Продукты',
          amount: '15445',
        },
        {
          title: 'Лекарства',
          amount: '5445',
        },
        {
          title: 'Развлечения',
          amount: '7445',
        },
      ],
    },
    {
      title: 'Ноябрь',
      categories: [
        {
          title: 'Транспорт',
          amount: '4565',
        },
        {
          title: 'Продукты',
          amount: '15445',
        },
        {
          title: 'Лекарства',
          amount: '5445',
        },
        {
          title: 'Развлечения',
          amount: '7445',
        },
      ],
    },
    {
      title: 'Октябрь',
      categories: [
        {
          title: 'Транспорт',
          amount: '4565',
        },
        {
          title: 'Продукты',
          amount: '15445',
        },
        {
          title: 'Лекарства',
          amount: '5445',
        },
        {
          title: 'Развлечения',
          amount: '7445',
        },
      ],
    },
    {
      title: 'Сентябрь',
      categories: [
        {
          title: 'Транспорт',
          amount: '4565',
        },
        {
          title: 'Продукты',
          amount: '15445',
        },
        {
          title: 'Лекарства',
          amount: '5445',
        },
        {
          title: 'Развлечения',
          amount: '7445',
        },
      ],
    },
  ];

  return (
    <div className={classes.root}>
      {packs.map((pack, index) => (
        <MonthlyPack key={index} pack={pack} />
      ))}
    </div>
  );
};

export default memo(CategoriesFeed);
