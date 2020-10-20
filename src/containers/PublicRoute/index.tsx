import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Routes } from 'common/enums/routes';
import { RootState } from 'redux/rootReducer';

type IPublicRoute = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
  authorizedAccess?: boolean;
  exact?: boolean;
  path: Routes | string;
  className?: string;
};

const PublicRoute = ({ component: Component, authorizedAccess = true, ...rest }: IPublicRoute): JSX.Element => {
  const isAuthorized = useSelector((state: RootState) => !!state.auth.user?.id);

  return !authorizedAccess && isAuthorized ? (
    <Redirect to={Routes.DEFAULT} />
  ) : (
    <Route component={Component} {...rest} />
  );
};

export default PublicRoute;
