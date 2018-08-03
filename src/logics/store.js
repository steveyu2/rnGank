import reducers from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { DEV } from '../commons/constants';
import rootSaga from '../logics/rootSaga';

const sagaMiddleware = createSagaMiddleware();

let middleware = [
  sagaMiddleware,
];
let composeFunc = compose;

if(DEV) {
  // composeFunc = composeWithDevTools;
  middleware = [
    ...middleware,
    logger,
  ];
}
const enhancer = composeFunc(applyMiddleware(...middleware));

const store = createStore(reducers, {}, enhancer);

sagaMiddleware.run(rootSaga);

export default store;