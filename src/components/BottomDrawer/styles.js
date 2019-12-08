import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles({
  fullList: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: '90vh',
    paddingTop: '30px',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  drawer__image_close: {
    height: '20px',
    width: '20px',
    position: 'absolute',
    top: '15px',
    right: '15px',
  },
  drawer__header: {
    display: 'flex',
    alignItems: 'center',
    height: '50px',
    width: '100%',
    justifyContent: 'center',
    marginTop: '30px',
  },
});
