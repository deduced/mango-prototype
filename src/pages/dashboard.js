import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import Profile from '../components/profile';
import RouteBase from '../components/routes/base';
import RouteSecret from '../components/routes/secret';
import RouteLogin from '../components/routes/login';

const Dashboard = ({ location }) => {
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      // Routes any match to login component and replace history to avoid redirect loops when using back/foward buttons
      navigate('/dashboard/login', { replace: true });
    }
  }, [location.pathname]);

  return (
    <>
      <Layout>
        <Profile />
        {/* <h1>Dashboard</h1> */}
        <Router>
          <RouteBase path="/dashboard/base" />
          <RouteSecret path="/dashboard/secret" />
          <RouteLogin path="/dashboard/login" />
        </Router>
      </Layout>
    </>
  );
};

export default Dashboard;
