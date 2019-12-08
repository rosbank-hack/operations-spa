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
          title: 'Развлечения',
          amount: '16334',
          icon: 'https://drive.google.com/uc?authuser=0&id=1nHK6SGLIsgreJgxWiQnljxC5xiXffulu&export=download',
        },
        {
          title: 'Продукты',
          amount: '14400',
          icon: 'https://drive.google.com/uc?authuser=0&id=1UVKlkXpsXWHyaInvz2rzutEWpOf_-veS&export=download',
        },
        {
          title: 'Коммунальные платежи',
          amount: '7445',
          icon: 'https://drive.google.com/uc?authuser=0&id=1Jytv6xVERIP_84BntyAg67FDrqxqCNby&export=download',
        },
        {
          title: 'Транспорт',
          amount: '1545',
          icon: 'https://drive.google.com/uc?authuser=0&id=1-D_8yvK7nswlx8nfy_oNqS2NBHnFu4q3&export=download',
        },
      ],
    },
    {
      title: 'Ноябрь',
      categories: [
        {
          title: 'Продукты',
          amount: '87500',
          icon: 'https://drive.google.com/uc?authuser=0&id=1UVKlkXpsXWHyaInvz2rzutEWpOf_-veS&export=download',
        },
        {
          title: 'Транспорт',
          amount: '22145',
          icon: 'https://drive.google.com/uc?authuser=0&id=1-D_8yvK7nswlx8nfy_oNqS2NBHnFu4q3&export=download',
        },
        {
          title: 'Развлечения',
          amount: '13634',
          icon: 'https://drive.google.com/uc?authuser=0&id=1nHK6SGLIsgreJgxWiQnljxC5xiXffulu&export=download',
        },
        {
          title: 'Коммунальные платежи',
          amount: '7445',
          icon: 'https://drive.google.com/uc?authuser=0&id=1Jytv6xVERIP_84BntyAg67FDrqxqCNby&export=download',
        },
      ],
    },
    {
      title: 'Октябрь',
      categories: [
        {
          title: 'Коммунальные платежи',
          amount: '55500',
          icon: 'https://drive.google.com/uc?authuser=0&id=1Jytv6xVERIP_84BntyAg67FDrqxqCNby&export=download',
        },
        {
          title: 'Транспорт',
          amount: '23435',
          icon: 'https://drive.google.com/uc?authuser=0&id=1-D_8yvK7nswlx8nfy_oNqS2NBHnFu4q3&export=download',
        },
        {
          title: 'Продукты',
          amount: '8567',
          icon: 'https://drive.google.com/uc?authuser=0&id=1UVKlkXpsXWHyaInvz2rzutEWpOf_-veS&export=download',
        },
        {
          title: 'Развлечения',
          amount: '1334',
          icon: 'https://drive.google.com/uc?authuser=0&id=1nHK6SGLIsgreJgxWiQnljxC5xiXffulu&export=download',
        },
      ],
    },
    {
      title: 'Сентябрь',
      categories: [
        {
          title: 'Продукты',
          amount: '87040',
          icon: 'https://drive.google.com/uc?authuser=0&id=1UVKlkXpsXWHyaInvz2rzutEWpOf_-veS&export=download',
        },
        {
          title: 'Коммунальные платежи',
          amount: '34235',
          icon: 'https://drive.google.com/uc?authuser=0&id=1Jytv6xVERIP_84BntyAg67FDrqxqCNby&export=download',
        },
        {
          title: 'Транспорт',
          amount: '15445',
          icon: 'https://drive.google.com/uc?authuser=0&id=1-D_8yvK7nswlx8nfy_oNqS2NBHnFu4q3&export=download',
        },
        {
          title: 'Развлечения',
          amount: '2451',
          icon: 'https://drive.google.com/uc?authuser=0&id=1nHK6SGLIsgreJgxWiQnljxC5xiXffulu&export=download',
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
