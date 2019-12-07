import React, { memo } from 'react';

import TransferInCard from './TransferInCard';
import TransferOutSuccessCard from './TransferOutSuccessCard';
import TransferOutProcessCard from './TransferOutProcessCard';
import TransferOutErrorCard from './TransferOutErrorCard';

const TransferCard = ({ status, ...other }) => {
  switch (status) {
    case 'IN':
      return <TransferInCard {...other} />;
    case 'OUT-SUCCESS':
      return <TransferOutSuccessCard {...other} />;
    case 'OUT-PROCESS':
      return <TransferOutProcessCard {...other} />;
    case 'OUT-ERROR':
      return <TransferOutErrorCard {...other} />;
    default:
      return null;
  }
};

export default memo(TransferCard);
