import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import * as ControllerUser from "../controller/user";

import AuthLayout from "../_layout/auth";
import DefaultLayout from "../_layout/default";

export default function RouterWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  if (!ControllerUser.User.signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (ControllerUser.User.signed && isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = ControllerUser.User.signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouterWrapper.prototype = {
  isPrivate: PropTypes.bool,
  component:
    PropTypes.oneOfType[(PropTypes.element, PropTypes.func).isRequired],
};

RouterWrapper.defaultProps = {
  isPrivate: false,
};
