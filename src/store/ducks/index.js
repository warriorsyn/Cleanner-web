import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as auth } from "./auth";
import { reducer as client } from "./client";
import { reducer as worker } from "./worker";
import { reducer as schedule } from "./schedule";
import { reducer as product } from "./product";
import { reducer as hours } from "./hours";

import { reducer as toastr } from "react-redux-toastr";
export default history =>
  combineReducers({
    auth,
    client,
    worker,
    schedule,
    product,
    hours,
    toastr,
    router: connectRouter(history)
  });
