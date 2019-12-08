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
      title: '',
      cards: [],
    },
  ]);

  useEffect(() => {
    const validValue = valueInput.charAt(0).toUpperCase() + valueInput.slice(1);

    api
      .search({ userId: 1, dateFrom: new Date(), category: validValue })
      .then(res => {
        setNewCards([{ title: '', cards: res }]);
      })
      .catch(() => {});
  }, [valueInput]);

  return (
    <div className={classes.fullList} role="presentation" onTouchStart={() => setOpen()}>
      <div className={classes.drawer__header}>
        <SearchInput isDisabled={false} width={300} value={valueInput} onChange={changeHandler} isAutofocus />
      </div>
      {newCards.map((pack, index) => (
        <DailyPack key={index} pack={pack} />
      ))}
    </div>
  );
};

export default memo(BottomDrawer);
