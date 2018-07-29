import { RANDOM } from '../../commons/actionTypes';
import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import {
  fetchRandomData,
  refreshRandomData,
  fetchRandomDataSuccess,
  fetchRandomDataFailure,
} from './action';
import { Console } from '../../commons/util';
import Api, { gankio } from '../../commons/Api';

function* randomData(action) {
  const { dataType, loadType } = action.payload;
  try {
    const response = yield call(Api.fetchRandomData, dataType, 10);
    debugger
  } catch(err) {
    Console.error(err);
    yield put(fetchRandomDataFailure(err));
  }
}

export default function* randomDataWatch() {
  yield takeLatest(RANDOM.REQUEST, randomData);
}