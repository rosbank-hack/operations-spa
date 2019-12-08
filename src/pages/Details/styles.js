import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles({
  root: {
    display: 'flex',
    minHeight: '92vh',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  details__header_big: {
    width: '150px',
    height: '150px',
    marginRight: 'auto',
    paddingRight: '40px',
  },
  details__header: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '30px',
  },
  details__header_angle: {
    alignSelf: 'flex-start',
    marginRight: 'auto',
    marginLeft: '30px',
  },
  details__card: {
    padding: '0px 30px',
    marginTop: '50px',
  },
  details__list: {
    padding: '0px 35px',
    paddingLeft: '75px',
    marginTop: '40px',
  },
  details__field: {
    '& > h4': {
      marginBottom: '5px',
    },
  },
  details__controls: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '65px',
    paddingRight: '30px',
    '& > button': {
      marginBottom: '15px',
    },
  },
});
