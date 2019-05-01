import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { push } from "connected-react-router";
import { actions as toastrActions } from "react-redux-toastr";

import WorkerActions from "../ducks/worker";

export function* createWorker({ name, email, password }) {
  try {
    const role = "worker";

    yield call(api.post, "register", { name, email, password, role });

    yield put(WorkerActions.createWorkerSuccess());

    yield put(push("/worker"));

    yield put(
      toastrActions.add({
        type: "success",
        title: "Worker success!",
        message: "Worker created!"
      })
    );
  } catch (e) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Worker error!",
        message: "Check the inputs!"
      })
    );
  }
}

export function* getWorkers() {
  try {
    const { data } = yield call(api.get, "workers");

    yield put(WorkerActions.getWorkerSuccess(data));
  } catch (e) {
    alert(e);
  }
}
