import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import reducers from "./reducers";
import { DEV } from "~/common/constants";
import rootSaga from "../logics/rootSaga";

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];

if (DEV) {
  middleware = [...middleware, logger];
}

const enhancer = compose(applyMiddleware(...middleware));

const store = createStore(reducers, undefined, enhancer);
export default store;
sagaMiddleware.run(rootSaga);
