import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    padding: '0px 15px',
    paddingBottom: '130px',
  },
  input: {
    width: '20%',
  },
}));
