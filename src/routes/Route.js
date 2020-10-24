import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, HashRouter } from 'react-router-dom';

import { store } from '~/store';

const isAuthenticated = () => {
  const { signed } = store.getState().auth;
  return true;
  // return signed;
};

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = isAuthenticated();

  if (!signed && isPrivate) {
    return <Redirect to="/login/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        signed ? (
          <HashRouter>
            <Component {...props} />
          </HashRouter>
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

RouteWrapper.prototype = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
