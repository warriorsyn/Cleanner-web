import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";

import history from "../routes/history";
import rootSaga from "./sagas";
import reducers from "./ducks";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(reducers(history), applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
