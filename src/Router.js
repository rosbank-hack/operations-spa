import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { History } from 'pages/History';
import { Categories } from 'pages/Categories';
import { NotFound } from 'pages/NotFound';
import { MainLayout } from 'layouts/MainLayout';
import { DetailsLayout } from 'layouts/DetailsLayout';
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
        path="/categories"
        component={() => (
          <MainLayout>
            <Categories />
          </MainLayout>
        )}
      />
      <Route
        path="/details/:id"
        component={() => (
          <DetailsLayout>
            <Details />
          </DetailsLayout>
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
