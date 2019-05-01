import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import history from "./history";

import Private from "./private";
import WorkerRoute from "./workerRoute";

import Main from "../pages/Main";
import SignIn from "../pages/Auth/Signin";
import Client from "../pages/admin/Client";
import NewClient from "../pages/admin/NewClient";
import ChooseClient from "../pages/admin/ClientReport/ChooseClient";
import Worker from "../pages/admin/Worker";
import NewWorker from "../pages/admin/NewWorker";
import ChooseWorkerReport from "../pages/admin/WorkerReport/ChooseWorker";
import Schedule from "../pages/admin/Schedule";
import NewSchedule from "../pages/admin/NewSchedule";
import UniqueWorkerReport from "../pages/admin/WorkerReport/UniqueWorkerReport";
import UniqueClientReport from "../pages/admin/ClientReport/UniqueClientReport";
import Schedules from "../pages/worker/Schedules";
import UniqueSchedule from "../pages/worker/UniqueSchedule";
import Product from "../pages/admin/Product";
import NewProduct from "../pages/admin/NewProduct";

import WorkerProduct from "../pages/worker/Products";
import OrderProduct from "../pages/worker/OrderProduct";
import OrdersProduct from "../pages/admin/OrdersProduct";
import UpdateProduct from "../pages/admin/UpdateProduct";
import RequestedProducts from "../pages/worker/RequestedProducts";

const routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact component={SignIn} />
      {/* admin routes */}
      <Private path="/home" exact component={Main} />
      {/* Client Route */}
      <Private path="/client" exact component={Client} />
      <Private path="/client/new" exact component={NewClient} />
      <Private path="/client/report" exact component={ChooseClient} />
      <Private path="/client/report/:id" exact component={UniqueClientReport} />
      {/* Worker Management Route */}
      <Private path="/worker" exact component={Worker} />
      <Private path="/worker/new" exact component={NewWorker} />
      <Private path="/worker/report" exact component={ChooseWorkerReport} />
      <Private path="/worker/report/:id" exact component={UniqueWorkerReport} />
      {/* Schedule Route */}
      <Private path="/schedule" exact component={Schedule} />
      <Private path="/schedule/new" exact component={NewSchedule} />

      {/* Product Admin Route */}
      <Private path="/product" exact component={Product} />
      <Private path="/product/new" exact component={NewProduct} />
      <Private path="/product/update/:id" exact component={UpdateProduct} />
      <Private path="/product/request" exact component={OrdersProduct} />
      {/* Worker Route */}

      {/* Schedule Worker  */}
      <WorkerRoute path="/worker/myschedules" exact component={Schedules} />
      <WorkerRoute
        path="/worker/myschedules/:id/:clientid"
        exact
        component={UniqueSchedule}
      />

      {/* Worker Product */}
      <WorkerRoute path="/worker/products" exact component={WorkerProduct} />
      <WorkerRoute path="/worker/products/:id" exact component={OrderProduct} />
      <WorkerRoute
        path="/worker/requested"
        exact
        component={RequestedProducts}
      />
    </Switch>
  </ConnectedRouter>
);

export default routes;
