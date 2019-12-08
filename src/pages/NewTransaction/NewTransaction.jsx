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
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography';
import theme from '../../theme';
import api from '../../utils/api';

import useStyles from './styles';

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

  const [selectedSourceUid, setSelectedSourceUid] = useState('1c65b569-d488-426d-ac67-eada0d549f7f');
  const handleSourceUidChange = ({ target: { value } }) => {
    setSelectedSourceUid(value);
  };

  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleOnClick = () => {
    api
      .addTransaction({
        userUid: '1',
        providerUid: selectedProviderUid,
        amount: selectedAmount,
        currency: selectedCurrency,
        status: selectedStatus,
        extendedStatus: selectedExtendedStatus,
        name: selectedName,
        sourceUid: selectedSourceUid,
        sourceName: sourceMap[selectedSourceUid],
      })
      .then(status => {
        if (status === 201) {
          handleClickOpenDialog();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.container}
      spacing={theme.spacing(1)}
    >
      <Typography variant="h5" gutterBottom style={{ marginTop: '30px' }}>
        Добавление транзакции
      </Typography>

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
      <Divider />

      <FormControl className={classes.formControl}>
        <InputLabel id="currency">Валюта</InputLabel>
        <Select labelId="currency-label" id="currency-select" value={selectedCurrency} onChange={handleCurrencyChange}>
          <MenuItem value="₽">₽</MenuItem>
          <MenuItem value="$">$</MenuItem>
          <MenuItem value="€">€</MenuItem>
        </Select>
      </FormControl>
      <Divider />

      <FormControl className={classes.formControl}>
        <InputLabel id="status">Статус</InputLabel>
        <Select labelId="status-label" id="status-select" value={selectedStatus} onChange={handleStatusChange}>
          <MenuItem value="SUCCESS">Успешная</MenuItem>
          <MenuItem value="DECLINE">Не успешная</MenuItem>
          <MenuItem value="PROCESSING">В обработке</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="extendedStatus">Доп. статус</InputLabel>
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

      <TextField
        id="standard-basic"
        className={classes.formControl}
        label="Сумма"
        value={selectedAmount}
        onChange={handleAmountChange}
      />

      <TextField
        id="standard-basic"
        className={classes.formControl}
        label="Сообщение"
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

      <Button
        variant="outlined"
        style={{ color: 'red', borderColor: 'red', marginBottom: '10px' }}
        onClick={handleOnClick}
      >
        Создать
      </Button>

      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClickOpenDialog}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-slide-title">Успех!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Транзакция успешно создана. Информацию по ней можно будет посмотреть через несколько минут.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Спасибо
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default memo(NewTransaction);
