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
          amount: '15445',
          icon: 'https://drive.google.com/uc?authuser=0&id=1-D_8yvK7nswlx8nfy_oNqS2NBHnFu4q3&export=download',
        },
        {
          title: 'Продукты',
          amount: '8700',
          icon: 'https://drive.google.com/uc?authuser=0&id=1UVKlkXpsXWHyaInvz2rzutEWpOf_-veS&export=download',
        },
        {
          title: 'Коммунальные платежи',
          amount: '7445',
          icon: 'https://drive.google.com/uc?authuser=0&id=1Jytv6xVERIP_84BntyAg67FDrqxqCNby&export=download',
        },
        {
          title: 'Развлечения',
          amount: '1634',
          icon: 'https://drive.google.com/uc?authuser=0&id=1nHK6SGLIsgreJgxWiQnljxC5xiXffulu&export=download',
        },
      ],
    },
    {
      title: 'Ноябрь',
      categories: [
        {
          title: 'Транспорт',
          amount: '15445',
          icon: 'https://drive.google.com/uc?authuser=0&id=1-D_8yvK7nswlx8nfy_oNqS2NBHnFu4q3&export=download',
        },
        {
          title: 'Продукты',
          amount: '8700',
          icon: 'https://drive.google.com/uc?authuser=0&id=1UVKlkXpsXWHyaInvz2rzutEWpOf_-veS&export=download',
        },
        {
          title: 'Коммунальные платежи',
          amount: '7445',
          icon: 'https://drive.google.com/uc?authuser=0&id=1Jytv6xVERIP_84BntyAg67FDrqxqCNby&export=download',
        },
        {
          title: 'Развлечения',
          amount: '1634',
          icon: 'https://drive.google.com/uc?authuser=0&id=1nHK6SGLIsgreJgxWiQnljxC5xiXffulu&export=download',
        },
      ],
    },
    {
      title: 'Октябрь',
      categories: [
        {
          title: 'Транспорт',
          amount: '15445',
          icon: 'https://drive.google.com/uc?authuser=0&id=1-D_8yvK7nswlx8nfy_oNqS2NBHnFu4q3&export=download',
        },
        {
          title: 'Продукты',
          amount: '8700',
          icon: 'https://drive.google.com/uc?authuser=0&id=1UVKlkXpsXWHyaInvz2rzutEWpOf_-veS&export=download',
        },
        {
          title: 'Коммунальные платежи',
          amount: '7445',
          icon: 'https://drive.google.com/uc?authuser=0&id=1Jytv6xVERIP_84BntyAg67FDrqxqCNby&export=download',
        },
        {
          title: 'Развлечения',
          amount: '1634',
          icon: 'https://drive.google.com/uc?authuser=0&id=1nHK6SGLIsgreJgxWiQnljxC5xiXffulu&export=download',
        },
      ],
    },
    {
      title: 'Сентябрь',
      categories: [
        {
          title: 'Транспорт',
          amount: '15445',
          icon: 'https://drive.google.com/uc?authuser=0&id=1-D_8yvK7nswlx8nfy_oNqS2NBHnFu4q3&export=download',
        },
        {
          title: 'Продукты',
          amount: '8700',
          icon: 'https://drive.google.com/uc?authuser=0&id=1UVKlkXpsXWHyaInvz2rzutEWpOf_-veS&export=download',
        },
        {
          title: 'Коммунальные платежи',
          amount: '7445',
          icon: 'https://drive.google.com/uc?authuser=0&id=1Jytv6xVERIP_84BntyAg67FDrqxqCNby&export=download',
        },
        {
          title: 'Развлечения',
          amount: '1634',
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
