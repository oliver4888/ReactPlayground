import React from "react";
import { Route } from "react-router";

import { Layout } from "./components/layout/Layout";
import routes from "./routes";

import "./styles/Index.scss";

export default () => (
  <Layout>
    {routes.map((route, idx) => (
      <Route
        key={idx}
        {...route.routeProps}
        path={route.path}
        component={route.component}
      />
    ))}
  </Layout>
);
