import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '20px',
    alignItems: 'center',
  },
  category__title: {
    display: 'flex',
    flexDirection: 'column',
    justifySelf: 'flex-start',
    marginRight: 'auto',
    marginLeft: '16px',
  },
  category__title_main: {
    fontSize: '18px',
    fontWeight: '500',
  },
  category__amount_main: {
    fontSize: '16px',
    fontWeight: '800',
    color: '#414141',
    textAlign: 'right',
    width: '100px',
  },
  category__amount: {
    display: 'flex',
    flexDirection: 'column',
    justifySelf: 'flex-end',
  },
  category__image: {
    '& > img': {
      width: '35px',
      height: '35px',
    },
  },
});
