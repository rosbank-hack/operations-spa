import React, { memo, useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import uuid from 'uuid';
import useStyles from './styles';
import api from '../../utils/api';

const NewTransaction = () => {
  const classes = useStyles();

  const sourceMap = {
    '1c65b569-d488-426d-ac67-eada0d549f7f': 'Карта (4270 37** **** 4563)',
    '2d60e347-0a0f-4399-81a8-e470ad3b2ea7': 'Счет (4563 32** **** **** 4270)',
  };

  const [selectedProviderUid, setSelectedProviderUid] = useState('5ecc429f-09e0-4191-bf50-ea7d9cce9c97');
  const handleProviderUidChange = ({ target: { value } }) => {
    setSelectedProviderUid(value);
  };

  const [selectedName, setSelectedName] = useState('');
  const handleNameChange = ({ target: { value } }) => {
    setSelectedName(value);
  };

  const [selectedCurrency, setSelectedCurrency] = useState('₽');
  const handleCurrencyChange = ({ target: { value } }) => {
    setSelectedCurrency(value);
  };

  const [selectedStatus, setSelectedStatus] = useState('SUCCESS');
  const handleStatusChange = ({ target: { value } }) => {
    setSelectedStatus(value);
  };

  const [selectedExtendedStatus, setSelectedExtendedStatus] = useState('OUT');
  const handleExtendedStatusChange = ({ target: { value } }) => {
    setSelectedExtendedStatus(value);
  };

  const [selectedAmount, setSelectedAmount] = useState('1');
  const handleAmountChange = ({ target: { value } }) => {
    setSelectedAmount(value);
  };

  const [selectedSourceUid, setSelectedSourceUid] = useState('');
  const handleSourceUidChange = ({ target: { value } }) => {
    setSelectedSourceUid(value);
  };

  const handleOnClick = () => {
    api.addTransaction({
      userUid: uuid.v1(),
      providerUid: selectedProviderUid,
      amount: selectedAmount,
      currency: selectedCurrency,
      status: selectedStatus,
      extendedStatus: selectedExtendedStatus,
      name: selectedName,
      sourceUid: selectedSourceUid,
      sourceName: sourceMap[selectedSourceUid],
    });
  };

  return (
    <div>
      <Grid container justify="space-around">
        <FormControl className={classes.formControl}>
          <InputLabel id="providerUid">Провайдер</InputLabel>
          <Select
            labelId="provider-uid-label"
            id="provider-select"
            value={selectedProviderUid}
            onChange={handleProviderUidChange}
          >
            <MenuItem value="5ecc429f-09e0-4191-bf50-ea7d9cce9c97">Пятерочка</MenuItem>
            <MenuItem value="e774c8df-ed90-4df9-9014-4257493a4083">Илья Андреевич П.</MenuItem>
            <MenuItem value="27590e23-af43-4279-93da-a556e7903a1d">Burger King</MenuItem>
            <MenuItem value="8a7fa076-e5b7-4358-bd68-bff1b95c7a9b">Яндекс.Музыка</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="currency">Валюта</InputLabel>
          <Select
            labelId="currency-label"
            id="currency-select"
            value={selectedCurrency}
            onChange={handleCurrencyChange}
          >
            <MenuItem value="₽">₽</MenuItem>
            <MenuItem value="$">$</MenuItem>
            <MenuItem value="€">€</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="status">Статус</InputLabel>
          <Select labelId="status-label" id="status-select" value={selectedStatus} onChange={handleStatusChange}>
            <MenuItem value="SUCCESS">Успешная</MenuItem>
            <MenuItem value="DECLINE">Не успешная</MenuItem>
            <MenuItem value="PROCESSING">В обработке</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="extendedStatus">Дополнительный статус транзакции</InputLabel>
          <Select
            labelId="extendedStatus-label"
            id="extendedStatus-select"
            value={selectedExtendedStatus}
            onChange={handleExtendedStatusChange}
          >
            <MenuItem value="IN">Входящая</MenuItem>
            <MenuItem value="OUT">Исходящая</MenuItem>
          </Select>
        </FormControl>

        <TextField id="standard-basic" label="Сумма" value={selectedAmount} onChange={handleAmountChange} />

        <TextField
          id="standard-basic"
          label="Сообщение к транзакции"
          value={selectedName}
          onChange={handleNameChange}
        />

        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="sourceName">Источник</FormLabel>
          <RadioGroup
            aria-label="sourceName"
            name="sourceName"
            value={selectedSourceUid}
            onChange={handleSourceUidChange}
          >
            <FormControlLabel
              value="1c65b569-d488-426d-ac67-eada0d549f7f"
              control={<Radio />}
              label="Карта (4270 37** **** 4563)"
            />
            <FormControlLabel
              value="2d60e347-0a0f-4399-81a8-e470ad3b2ea7"
              control={<Radio />}
              label="Счет (4563 32** **** **** 4270)"
            />
          </RadioGroup>
        </FormControl>

        <Button color="secondary" onClick={handleOnClick}>
          Создать
        </Button>
      </Grid>
    </div>
  );
};

export default memo(NewTransaction);
