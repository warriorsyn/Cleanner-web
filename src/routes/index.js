import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import history from "./history";

import Private from "./private";

import Main from "../pages/Main";
import SignIn from "../pages/Auth/Signin";
import Client from "../pages/admin/Client";

const routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Private path="/home" component={Main} />
      <Private path="/client" component={Client} />
    </Switch>
  </ConnectedRouter>
);

export default routes;
