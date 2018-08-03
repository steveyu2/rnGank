import { all } from 'redux-saga/effects';
import random from './random/saga';
import appointType from './appointType/saga';
import userSetting from './userSetting/saga';

export default function* rootSaga() {
  yield all([
    random(),
    appointType(),
    userSetting(),
  ])
}