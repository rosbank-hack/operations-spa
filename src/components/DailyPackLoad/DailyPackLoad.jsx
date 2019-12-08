import React from 'react';
import Divider from '@material-ui/core/Divider';
import InfiniteScroll from 'react-infinite-scroller';

import { CommonCard, TransferCard, BankCard, AdCard } from 'components/Card';

import useStyles from './styles';

const DailyPack = ({ pack: { title, cards }, hasNextPage, loadNextPage }) => {
  const classes = useStyles();

  const getCards = () => {
    return cards.map((item, index) => {
      switch (item.service) {
        case 'COMMON':
          return (
            <React.Fragment key={index}>
              <CommonCard {...item} />
              <Divider style={{ marginLeft: '50px', marginTop: '10px' }} variant="inset" />
            </React.Fragment>
          );
        case 'PAYMENTS':
          return (
            <React.Fragment key={index}>
              <TransferCard {...item} />
              <Divider style={{ marginLeft: '50px', marginTop: '10px' }} variant="inset" />
            </React.Fragment>
          );
        case 'SERVICE':
          return (
            <React.Fragment key={index}>
              <BankCard {...item} />
              <Divider style={{ marginLeft: '50px', marginTop: '10px' }} variant="inset" />
            </React.Fragment>
          );
        case 'AD':
          return (
            <React.Fragment key={index}>
              <AdCard {...item} />
              <Divider style={{ marginLeft: '50px', marginTop: '10px' }} variant="inset" />
            </React.Fragment>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div>
      <h2 className={classes.title}>{title}</h2>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadNextPage}
        hasMore={hasNextPage}
        useWindow
        threshold={100}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {getCards()}
      </InfiniteScroll>
    </div>
  );
};

export default DailyPack;
