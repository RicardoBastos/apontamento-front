import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route,
  Redirect,
} from 'react-router-dom';
import { isAuthenticated } from '../services/auth';

import LayoutApontamento from '../components/Layout';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}
const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      exact
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          <LayoutApontamento>
            <Component />
          </LayoutApontamento>
        ) : (
          <Redirect to={{ pathname: '/', state: { from: location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
