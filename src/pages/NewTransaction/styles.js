import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: 300,
    marginTop: '15px',
  },
  container: {
    paddingBottom: '140px',
    height: 'auto',
    width: '100%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
}));
