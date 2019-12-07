import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles({
  root: {
    display: 'flex',
    minHeight: '60px',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '15px',
  },
  root__service: {
    display: 'flex',
    minHeight: '60px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '15px',
  },
  root_ad: {
    display: 'flex',
    minHeight: '60px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '15px',
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
    fontWeight: '800',
    color: '#FF040D',
    textAlign: 'right',
  },
  card__payment_in: {
    fontSize: '16px',
    fontWeight: '800',
    color: '#313131',
  },
  card__payment_cashback: {
    fontSize: '12px',
    color: '#959595',
    marginTop: '6px',
  },
  card__image_processing: {
    marginRight: '10px',
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
    width: '100%',
    paddingBottom: '15px',
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
    paddingRight: '12px',
  },
  card__main_service: {
    display: 'flex',
  },
  card__status: {
    marginLeft: '51px',
    marginTop: '22px',
    fontSize: '14px',
    fontWeight: '500',
  },
  card__status_success: {
    color: '#2ACF35',
  },
  card__status_error: {
    color: '#FF040D',
  },
  card__status_process: {
    color: '#D7DF60',
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
    color: '#FF040D',
  },
  ad__link: {
    color: '#4D4D4D',
    alignSelf: 'flex-end',
  },
});
