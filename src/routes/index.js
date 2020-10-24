import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

// Pages
import Dashboard from '~/pages/Dashboard';
import LoginBoxed from '~/pages/LoginBoxed';
import ForgotPasswordBoxed from '~/pages/ForgotPasswordBoxed';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={LoginBoxed} />
      <Route path="/forgot-password" component={ForgotPasswordBoxed} />

      {/* Private routes */}
      <Route path="/" component={Dashboard} isPrivate />
    </Switch>
  )
}