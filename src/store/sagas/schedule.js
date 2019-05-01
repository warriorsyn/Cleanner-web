import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { push } from "connected-react-router";
import { actions as toastrActions } from "react-redux-toastr";

import ScheduleActions from "../ducks/schedule";

export function* getSchedules() {
  const { data } = yield call(api.get, "schedule");

  yield put(ScheduleActions.getScheduleSuccess(data));
}

export function* createSchedule({
  work,
  observe,
  date_time,
  worker_id,
  client_id,
  checklist,
  address
}) {
  try {
    yield call(api.post, "schedule", {
      work,
      observe,
      date_time,
      worker_id,
      client_id,
      checklist,
      address
    });

    yield put(push("/schedule"));
    yield put(
      toastrActions.add({
        type: "success",
        title: "Schedule success!",
        message: "Schedule created!"
      })
    );
  } catch (e) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Schedule Error!",
        message: "Check the inputs!"
      })
    );
  }
}

export function* getWorkersSchedule() {
  const { data } = yield call(api.get, "userschedule");

  yield put(ScheduleActions.getWorkersScheduleSuccess(data));
}

export function* getScheduleById({ id }) {
  const { data } = yield call(api.get, `schedule/${id}`);

  yield put(ScheduleActions.getScheduleByIdSuccess(data));
}

export function* finishSchedule({ time_worked, id, finished_job, client_id }) {
  try {
    const status = 1;
    yield call(api.put, `finish/${id}`, { status });
    yield call(api.post, `timeworked/schedule/${id}`, {
      time_worked,
      finished_job,
      client_id
    });

    yield put(push("/worker/myschedules"));

    yield put(
      toastrActions.add({
        type: "success",
        title: "Finished work Success!",
        message: "Work Done!"
      })
    );
  } catch (e) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Finished work Error!",
        message: "Check the input!"
      })
    );
  }
}
