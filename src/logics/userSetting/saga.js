import {
  call,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';
import {
  setMainColor,
  setMainColorSuccess,
  setMainColorFailure,
} from './action';
import { MAIN_COLOR } from '../../commons/actionTypes';
import { Console } from '../../commons/util';

function* mainColor(action) {
  try {
    const { color, callback } = action.payload;

    yield put(setMainColorSuccess(color));

  } catch(err) {
    Console.error(err);
    yield put(setMainColorFailure(err));
  }
}

export default function* userSettingWatch() {
  yield takeLatest(MAIN_COLOR.REQUEST, mainColor);
}