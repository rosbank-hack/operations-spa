import React, { memo } from 'react';

import BankPaymentCard from './BankPaymentCard';
import BankServiceCard from './BankServiceCard';

const BankCard = ({ status, ...other }) => {
  switch (status) {
    case 'PAYMENT':
      return <BankPaymentCard {...other} />;
    case 'SERVICE':
      return <BankServiceCard status={status} {...other} />;
    default:
      return null;
  }
};

export default memo(BankCard);
