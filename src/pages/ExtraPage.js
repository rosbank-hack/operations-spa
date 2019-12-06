import React from 'react';
import Extra from 'components/ExtraPage/Extra';
import { Route, Switch } from 'react-router-dom';

const ExtraPage = () => (
  <Switch>
    <Route path="/extra" exact component={Extra} />
  </Switch>
);

export default ExtraPage;
