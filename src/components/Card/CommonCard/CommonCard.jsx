import React, { memo } from 'react';

import CommonCardError from './CommonCardError';
import CommonCardProcess from './CommonCardProcess';
import CommonCardSuccess from './CommonCardSuccess';

const CommonCard = ({ status, ...other }) => {
  switch (status) {
    case 'SUCCESS':
      return <CommonCardSuccess {...other} />;
    case 'PROCESS':
      return <CommonCardProcess {...other} />;
    case 'ERROR':
      return <CommonCardError {...other} />;
    default:
      return null;
  }
};

export default memo(CommonCard);
