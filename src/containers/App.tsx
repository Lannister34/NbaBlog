import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Routes } from 'common/enums';
import Auth from './Auth';
import PublicRoute from './PublicRoute';
import Home from './Home';
import PrivateRoute from './PrivateRoute';
import TeamPage from './TeamPage';

export default class App extends Component {
  render(): JSX.Element {
    return (
      <Switch>
        <PublicRoute exact path={Routes.DEFAULT} component={Home} />
        <PublicRoute exact path={Routes.LOGIN} component={Auth} authorizedAccess={false} />
        <PrivateRoute path={Routes.TEAM} component={TeamPage} />
      </Switch>
    );
  }
}
