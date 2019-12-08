import React, { useState, memo, useEffect } from 'react';

import api from 'utils/api';
import { DailyPack } from 'components/DailyPack';
import { SearchInput } from '../BottomNavigation/SearchInput';

import useStyles from './styles';

const BottomDrawer = ({ setOpen }) => {
  const classes = useStyles();
  const [valueInput, setValueInput] = useState('');

  const changeHandler = ({ target: { value } }) => {
    setValueInput(value);
  };

  const [newCards, setNewCards] = useState([
    {
      title: 'Сегодня, 9 декабря',
      cards: [],
    },
  ]);

  useEffect(() => {
    api
      .search({ userId: 1, dateFrom: new Date(), category: valueInput })
      .then(res => {
        setNewCards(prev => [{ title: 'Сегодня, 9 декабря', cards: [...prev[0].cards, ...res] }]);
      })
      .catch(() => {});
  });

  return (
    <div className={classes.fullList} role="presentation" onTouchStart={() => setOpen()}>
      <div className={classes.drawer__header}>
        <SearchInput isDisabled={false} width={300} value={valueInput} onChange={changeHandler} />
        {newCards.map((pack, index) => (
          <DailyPack key={index} pack={pack} />
        ))}
      </div>
    </div>
  );
};

export default memo(BottomDrawer);
