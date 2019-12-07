import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { History } from 'pages/History';
import { NotFound } from 'pages/NotFound';
import { MainLayout } from 'layouts/MainLayout';
import { Details } from 'pages/Details';

const RootRouter = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route
        path="/history"
        component={() => (
          <MainLayout>
            <History />
          </MainLayout>
        )}
      />
      <Route
        path="/details/:id"
        component={() => (
          <MainLayout>
            <Details />
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
