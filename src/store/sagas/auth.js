import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import { actions as toastrActions } from "react-redux-toastr";
import api from "../../services/api";

import AuthActions from "../ducks/auth";

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, "login", { email, password });

    localStorage.setItem("@cleaner:token", response.data.token.token);

    localStorage.setItem("@cleaner:role", response.data.user.role);

    localStorage.setItem("@cleaner:user", response.data.user.name);

    yield put(AuthActions.signInSuccess(response.data.token.token));
    yield put(AuthActions.roleSuccess(response.data.user.role));

    if (response.data.user.role === "worker") {
      return yield put(push("/worker/myschedules"));
    } else {
      yield put(push("/home"));
    }
  } catch (err) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Login error!",
        message: "Verify your email or password!"
      })
    );
  }
}

export function* signOut() {
  localStorage.clear();

  yield put(push("/"));
}
