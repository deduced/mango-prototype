import React from 'react';
import { navigate } from 'gatsby';
import { useIdentityContext } from 'react-netlify-identity-widget';

const GatewayRoute = ({ component: Component, location, ...rest }) => {
  const identity = useIdentityContext();
  const isLoggedIn = identity?.isLoggedIn;

  if (!isLoggedIn && location.pathname !== '/dashboard/login') {
    navigate('/dashboard/login', { replace: true });
    return null;
  }
  return <Component {...rest} />;
};

export default GatewayRoute;
