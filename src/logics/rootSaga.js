import random from './random/saga';
import { all } from 'redux-saga/effects';


export default function* rootSaga() {
  yield all([
    random(),
  ])
}