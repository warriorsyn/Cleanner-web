import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getHoursReportRequest: ["id", "first_date", "second_date"],
  getHoursReportSuccess: ["data", "sum"]
});

export const HoursTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  report: []
});

/* Reducers */

export const hoursReportSuccess = (state, report, timesum) =>
  state.merge({ report, timesum });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_HOURS_REPORT_SUCCESS]: hoursReportSuccess
});
