import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const SearchInput = ({ isDisabled, width }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} style={{ width }}>
      <InputBase
        className={classes.input}
        placeholder="Поиск"
        inputProps={{ 'aria-label': 'search google maps' }}
        disabled={isDisabled}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default memo(SearchInput);
