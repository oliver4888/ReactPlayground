import React, { Component } from "react";
import { Route } from "react-router";

import { Layout } from "./components/Layout";
import routes from "./routes";

import "./styles/Index.scss";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
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
  }
}
