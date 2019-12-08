import React, { memo } from 'react';
import { BottomNavigation as MuiBottomNavigation, Button } from '@material-ui/core';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import CreditCardIcon from 'assets/icons/credit-card.svg';
import NotepadIcon from 'assets/icons/notepad.svg';
import RubleIcon from 'assets/icons/ruble.svg';
import ChatIcon from 'assets/icons/chat.svg';
import EllipsisIcon from 'assets/icons/ellipsis.svg';
import { useHistory } from 'react-router-dom';
import { BottomDrawer } from '../BottomDrawer';
import { SearchInput } from './SearchInput';

import useStyles from './styles';

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const BottomNavigation = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <>
      <MuiBottomNavigation
        classes={{
          root: classes.root,
        }}
      >
        <MuiBottomNavigation
          classes={{
            root: classes.root__search,
          }}
          onClick={toggleDrawer('bottom', true)}
        >
          <SearchInput isDisabled width={240} value="Поиск" />
          <Button
            href={window.location.pathname === '/history' ? '/categories' : '/history'}
            variant="contained"
            className={classes.root__search_button}
            onClick={e => e.stopPropagation()}
          >
            {window.location.pathname === '/history' ? 'Анализ финансов' : 'История по дням'}
          </Button>
        </MuiBottomNavigation>
        <MuiBottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            history.push(newValue);
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
            value="/transaction"
            onClick={() => history.push('/transaction')}
            icon={<img src={CreditCardIcon} alt="credit card" />}
          />
          <BottomNavigationAction
            classes={{
              label: classes.actionLabel,
              root: classes.actionRoot,
            }}
            label="История"
            value="/history"
            onClick={() => history.push('/history')}
            icon={<img src={NotepadIcon} alt="events" />}
          />
          <BottomNavigationAction
            classes={{
              label: classes.actionLabel,
              root: classes.actionRoot,
            }}
            label="Оплатить"
            value="/transaction"
            onClick={() => history.push('/transaction')}
            icon={<img src={RubleIcon} alt="payment" />}
          />
          <BottomNavigationAction
            classes={{
              label: classes.actionLabel,
              root: classes.actionRoot,
            }}
            label="Чат"
            onClick={() => history.push('/transaction')}
            value="/transaction"
            icon={<img src={ChatIcon} alt="chat" />}
          />
          <BottomNavigationAction
            classes={{
              label: classes.actionLabel,
              root: classes.actionRoot,
            }}
            label="Ещё"
            onClick={() => history.push('/transaction')}
            value="/transaction"
            icon={<img src={EllipsisIcon} alt="else" />}
          />
        </MuiBottomNavigation>
      </MuiBottomNavigation>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer('bottom', false)}
        onOpen={toggleDrawer('bottom', true)}
      >
        <BottomDrawer setOpen={() => toggleDrawer('bottom', false)} />
      </SwipeableDrawer>
    </>
  );
};

export default memo(BottomNavigation);
