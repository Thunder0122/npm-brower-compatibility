import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import MainLayout from "./containers/MainLayout/MainLayout";

import Home from "./containers/Home/Home";
import Package from "./containers/Package/Package";

/**
 * Compiles a render method to pass to a Route that will redirect to "latest" version
 * Examples:
 * - /package/react -> package/react@latest
 * - /package/@angular/core -> /package/@angular/core@latest
 * The Package container will handle it from their (there is always a "latest" dist tag to match)
 * @param {Boolean} scoped
 */
const compileRedirectToLatest = scoped => (
  { match: { params } } // eslint-disable-line
) => (
  <Redirect
    replace
    to={
      "/package" +
      (scoped ? "/@" + params.scope : "") +
      ("/" + params.name + "@latest")
    }
  />
);

const Routes = () => (
  <HashRouter>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/package/@:scope/:name@:version"
          component={Package}
        />
        <Route
          exact
          path="/package/@:scope/:name"
          render={compileRedirectToLatest(true)}
        />
        <Route exact path="/package/:name@:version" component={Package} />
        <Route
          exact
          path="/package/:name"
          render={compileRedirectToLatest(false)}
        />
      </Switch>
    </MainLayout>
  </HashRouter>
);

export default Routes;
