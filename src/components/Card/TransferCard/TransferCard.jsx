import React, { memo } from 'react';

import TransferInCard from './TransferInCard';
import TransferOutSuccessCard from './TransferOutSuccessCard';
import TransferOutProcessCard from './TransferOutProcessCard';
import TransferOutErrorCard from './TransferOutErrorCard';

const TransferCard = ({ extendedStatus, status, ...other }) => {
  switch (extendedStatus) {
    case 'IN':
      return <TransferInCard {...other} />;
    case 'OUT':
      return <TransferOutSuccessCard {...other} />;
    case 'OUT_PROCESSING':
      return <TransferOutProcessCard {...other} />;
    case 'OUT_DECLINE':
      return <TransferOutErrorCard {...other} />;
    default:
      return null;
  }
};

export default memo(TransferCard);
