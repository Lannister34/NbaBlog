import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from 'common/enums';
import Auth from './Auth';
import PublicRoute from './PublicRoute';

export default class App extends Component {
  render(): JSX.Element {
    return (
      <Switch>
        <Route exact path={Routes.DEFAULT} component={() => <div />} />
        <PublicRoute exact path={Routes.LOGIN} component={Auth} authorizedAccess={false} />
      </Switch>
    );
  }
}
