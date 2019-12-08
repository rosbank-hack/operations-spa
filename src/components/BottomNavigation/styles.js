import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#414141',
  },
  root__root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#414141',
  },
  root__search: {
    height: '60px',
    position: 'fixed',
    bottom: '55px',
    width: '100%',
    backgroundColor: '#ECECEC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav__menu: {
    height: '50px',
  },
  actionLabel: {
    marginTop: '5px',
    color: '#FFFFFF',
  },
  actionSelected: {
    color: '#FFFFFF',
  },
  actionRoot: {
    minWidth: '50px',
    maxWidth: '100px',
  },
  list: {
    width: 250,
  },
  root__search_button: {
    marginLeft: '10px',
    backgroundColor: '#A8A8A8',
    height: '43px',
    fontSize: '10px',
    '&:hover': {
      backgroundColor: '#414141',
    },
  },
});
