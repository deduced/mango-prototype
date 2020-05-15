import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { Router } from '@reach/router';
import GatewayRoute from '../components/routes/gateway';
import IdentityModal from 'react-netlify-identity-widget';
import Layout from '../components/layout';
import Profile from '../components/profile';
import RouteBase from '../components/routes/base';
import RouteLogin from '../components/routes/login';
import RouteSecret from '../components/routes/secret';

import 'react-netlify-identity-widget/styles.css';

const Dashboard = ({ location }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      // Routes any match to login component and replace history to avoid redirect loops when using back/foward buttons
      navigate('/dashboard/login', { replace: true });
    }
  }, [location.pathname]);

  const showModal = () => setIsVisible(true);

  return (
    <>
      <Layout>
        <Profile showModal={showModal} />
        {/* <h1>Dashboard</h1> */}
        <Router>
          <GatewayRoute path="/dashboard/base" component={RouteBase} />
          <GatewayRoute path="/dashboard/secret" component={RouteSecret} />
          <RouteLogin path="/dashboard/login" showModal={showModal} />
        </Router>
        <IdentityModal
          showDialog={isVisible}
          onCloseDialog={() => setIsVisible(false)}
        />
      </Layout>
    </>
  );
};

export default Dashboard;
