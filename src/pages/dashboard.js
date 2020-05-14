import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import Profile from '../components/profile';
import RouteBase from '../components/routes/base';
import RouteSecret from '../components/routes/secret';
import RouteLogin from '../components/routes/login';

const Dashboard = () => (
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

export default Dashboard;
