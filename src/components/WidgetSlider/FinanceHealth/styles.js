import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles({
  root: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    padding: '10px',
    borderRadius: '16px',
    boxShadow: '0 0 12px rgba(0,0,0,0.1)',
    height: '170px',
  },
  finance__description: {
    display: 'flex',
    justifyContent: 'center',
  },
  finance__title: {
    color: '#0643D2',
    textAlign: 'center',
  },
});
