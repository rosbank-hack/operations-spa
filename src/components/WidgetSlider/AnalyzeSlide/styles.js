import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles({
  root: {
    display: 'flex',
    width: '100%',
    paddingRight: '20px',
    borderRadius: '16px',
    boxShadow: '0 0 12px rgba(0,0,0,0.1)',
    height: '170px',
  },
  finance__description: {
    '& > h4': {
      marginBottom: '15px',
    },
  },
  finance__category_color_1: {
    width: '10px',
    height: '10px',
    marginRight: '5px',
    backgroundColor: '#0088FE',
  },
  finance__category_color_2: {
    width: '10px',
    height: '10px',
    marginRight: '5px',
    backgroundColor: '#00C49F',
  },
  finance__category_color_3: {
    width: '10px',
    height: '10px',
    marginRight: '5px',
    backgroundColor: '#FFBB28',
  },
  finance__category_color_4: {
    width: '10px',
    height: '10px',
    marginRight: '5px',
    backgroundColor: '#FF8042',
  },
  finance__category_item: {
    display: 'flex',
    '& > span': {
      fontSize: '10px',
    },
  },
});
