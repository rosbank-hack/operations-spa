import React from 'react';
import Main from 'components/MainPage/Main';
import { Route, Switch } from 'react-router-dom';

const MainPage = () => (
  <Switch>
    <Route path="/main" exact component={Main} />
  </Switch>
);

export default MainPage;
