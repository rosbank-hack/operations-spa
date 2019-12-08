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
    height: '70px',
    position: 'fixed',
    bottom: '55px',
    width: '100%',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 0 12px rgba(0,0,0,0.1)',
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
    textAlign: 'center',
    marginLeft: '10px',
    marginRight: '10%',
    backgroundColor: '#ffffff',
    borderRadius: '32px',
    borderWidth: '2px',
    borderColor: '#E70E29',
    height: '43px',
    fontSize: '10px',
    borderStyle: 'solid',
    '&:hover': {
      color: '#414141',
      backgroundColor: '#E70E29',
    },
  },
});
