import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles({
  root: {
    display: 'flex',
    padding: '10px',
    borderRadius: '16px',
    boxShadow: '0 0 12px rgba(0,0,0,0.1)',
  },
  warning__description: {
    marginLeft: '25px',
  },
  warning__title: {
    display: 'flex',
    alignItems: 'center',
    color: '#EE0018',
    '& > img': {
      marginRight: '5px',
      height: '20px',
      width: '20px',
    },
  },
  warning__text: {
    fontSize: '12px',
  },
  controls: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > a': {
      color: '#0643D2',
    },
  },
});
