import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { History } from 'pages/History';
import { NotFound } from 'pages/NotFound';
import { MainLayout } from 'layouts/MainLayout';

const RootRouter = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route
        path="/"
        component={() => (
          <MainLayout>
            <History />
          </MainLayout>
        )}
      />
      <Route
        component={() => (
          <MainLayout>
            <NotFound />
          </MainLayout>
        )}
      />
    </Switch>
  </ConnectedRouter>
);

export default RootRouter;
