import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import MainPage from 'pages/MainPage';

import NotFoundPage from 'pages/NotFoundPage';
import Header from 'components/Header';
import PageContainer from 'components/common/PageContainer';
import ExtraPage from 'pages/ExtraPage';

const RootRouter = ({ history }) => (
  <ConnectedRouter history={history}>
    <>
      <Header />
      <PageContainer>
        <Switch>
          <Route path="/main" component={MainPage} />
          <Route path="/extra" component={ExtraPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </PageContainer>
    </>
  </ConnectedRouter>
);

export default RootRouter;
