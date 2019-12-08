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
  notification__title: {
    '& > h3': {
      marginTop: '0px',
    },
  },
  notification__helper_text: {
    paddingLeft: '4px',
    paddingRight: '4px',
    '& > p': {
      margin: '0px',
      fontSize: '14px',
      color: '#0643D2',
    },
  },
  notification__control: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
    marginLeft: '35px',
    '& > button': {
      borderRadius: '26px',
      fontSize: '10px',
      marginLeft: '12px',
    },
  },
  notification__subtitle: {
    color: '#0008FC',
    fontWeight: '500',
    fontSize: '16px',
  },
});
