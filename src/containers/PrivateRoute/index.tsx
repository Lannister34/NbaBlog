import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Routes } from 'common/enums/routes';
import { RootState } from 'redux/rootReducer';

type PropsType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
  exact?: boolean;
  path: Routes | string;
  className?: string;
};

const PrivateRoute = ({ component: Component, ...rest }: PropsType): JSX.Element => {
  const isAuthorized = useSelector((state: RootState) => !!state.auth.user?.id);

  return isAuthorized ? <Component {...rest} /> : <Redirect to={Routes.LOGIN} />;
};

export default PrivateRoute;
