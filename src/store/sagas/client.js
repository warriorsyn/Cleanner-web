import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { actions as toastrActions } from "react-redux-toastr";
import { push } from "connected-react-router";
import ClientActions from "../ducks/client";

export function* createClient({ name, email, address }) {
  try {
    const role = "client";

    yield call(api.post, "register", { name, email, address, role });

    yield put(ClientActions.createClientSuccess());

    yield put(push("/client"));

    yield put(
      toastrActions.add({
        type: "success",
        title: "Created Success",
        message: "Client created with success!"
      })
    );
  } catch (e) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Created Error",
        message: "Check the inputs!"
      })
    );
  }
}

export function* getClients() {
  try {
    const { data } = yield call(api.get, "clients");

    yield put(ClientActions.getClientSuccess(data));
  } catch (e) {
    alert(e);
  }
}

export function* getClientReport({ id, first_date, second_date }) {
  try {
    const { data } = yield call(api.post, `timeworkedclientreport/${id}`, {
      first_date,
      second_date
    });

    let { data: timeData } = yield call(
      api.post,
      `timeworkedclientreportsum/${id}`,
      {
        first_date,
        second_date
      }
    );

    yield put(ClientActions.getClientReportSuccess(data.rows, timeData.rows));
  } catch (e) {
    console.log(e.response);
  }
}
