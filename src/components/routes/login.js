import React from 'react';
import { useIdentityContext } from 'react-netlify-identity-widget';
import { navigate } from 'gatsby';

const RouteLogin = ({ showModal }) => {
  const identity = useIdentityContext();

  if (identity?.isLoggedIn) {
    navigate('/dashboard/secret', { replace: true });
  }

  return (
    <>
      <h1>Log In Or Sign Up</h1>
      <button onClick={showModal}>Log In</button>
    </>
  );
};

export default RouteLogin;
