import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '20px',
  },
  root__service: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '20px',
  },
  root_ad: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '20px',
  },
  card__title: {
    display: 'flex',
    flexDirection: 'column',
    justifySelf: 'flex-start',
    marginRight: 'auto',
    marginLeft: '16px',
  },
  card__payment: {
    display: 'flex',
    flexDirection: 'column',
    justifySelf: 'flex-end',
  },
  card__title_main: {
    fontSize: '18px',
    fontWeight: '500',
  },
  card__title_category: {
    fontSize: '14px',
    color: '#959595',
  },
  card__payment_main: {
    fontSize: '16px',
    width: '80px',
    fontWeight: '800',
    color: '#414141',
  },
  card__payment_in: {
    fontSize: '16px',
    width: '80px',
    fontWeight: '800',
    color: '#2ACF35',
  },
  card__payment_cashback: {
    fontSize: '12px',
    color: '#959595',
  },
  card__image_processing: {
    marginRight: '10px',
  },
  card__image_status: {
    '& > img': {
      height: '15px',
      width: '15px',
    },
  },
  card__image: {
    '& > img': {
      width: '30px',
      heigth: '30px',
    },
  },
  card__error: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 'auto',
    width: '100%',
  },
  card__error_description: {
    marginLeft: '16px',
    marginTop: '12px',
    width: '99%',
  },
  card__error_type: {
    fontSize: '14px',
    color: '#FF040D',
    fontWeight: '500',
  },
  card__error_reason: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    color: '#959595',
    paddingRight: '10px',
  },
  card__main_service: {
    display: 'flex',
  },
  card__title_process: {
    display: 'flex',
    alignItems: 'center',
    '& > img': {
      height: '13px',
      width: '13px',
      marginLeft: '5px',
      marginTop: '1px',
    },
  },
  card__status: {
    marginLeft: '51px',
    marginTop: '16px',
    fontSize: '14px',
    fontWeight: '500',
    display: 'flex',
  },
  card__status_success: {
    color: '#2ACF35',
    marginLeft: '5px',
  },
  card__status_error: {
    color: '#FF040D',
    marginLeft: '5px',
  },
  card__status_process: {
    color: '#D7DF60',
    marginLeft: '5px',
  },
  ad__main: {
    marginLeft: '51px',
    marginTop: '22px',
    fontSize: '16px',
    fontWeight: '400',
    display: 'flex',
    flexDirection: 'column',
  },
  ad__text: {
    color: '#3395CC',
  },
  ad__link: {
    color: '#4D4D4D',
    alignSelf: 'flex-end',
  },
});
