import React, { memo } from 'react';
import { BottomNavigation as MuiBottomNavigation } from '@material-ui/core';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import CreditCardIcon from 'assets/icons/credit-card.svg';
import NotepadIcon from 'assets/icons/notepad.svg';
import RubleIcon from 'assets/icons/ruble.svg';
import ChatIcon from 'assets/icons/chat.svg';
import EllipsisIcon from 'assets/icons/ellipsis.svg';

import useStyles from './styles';

const BottomNavigation = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <>
      <MuiBottomNavigation
        classes={{
          root: classes.root,
        }}
      >
        <MuiBottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          classes={{
            root: classes.root,
          }}
        >
          <BottomNavigationAction
            classes={{
              label: classes.actionLabel,
              root: classes.actionRoot,
            }}
            label="Главная"
            icon={<img src={CreditCardIcon} alt="credit card" />}
          />
          <BottomNavigationAction
            classes={{
              label: classes.actionLabel,
              root: classes.actionRoot,
            }}
            label="События"
            icon={<img src={NotepadIcon} alt="events" />}
          />
          <BottomNavigationAction
            classes={{
              label: classes.actionLabel,
              root: classes.actionRoot,
            }}
            label="Оплатить"
            icon={<img src={RubleIcon} alt="payment" />}
          />
          <BottomNavigationAction
            classes={{
              label: classes.actionLabel,
              root: classes.actionRoot,
            }}
            label="Чат"
            icon={<img src={ChatIcon} alt="chat" />}
          />
          <BottomNavigationAction
            classes={{
              label: classes.actionLabel,
              root: classes.actionRoot,
            }}
            label="Ещё"
            icon={<img src={EllipsisIcon} alt="else" />}
          />
        </MuiBottomNavigation>
      </MuiBottomNavigation>
    </>
  );
};

export default memo(BottomNavigation);
