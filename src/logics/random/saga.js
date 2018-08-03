import { RANDOM } from '../../commons/actionTypes';
import {
  call,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';
import {
  fetchRandomData,
  refreshRandomData,
  fetchRandomDataSuccess,
  fetchRandomDataFailure,
} from './action';
import { Console } from '../../commons/util';
import Api, { gankio } from '../../commons/Api';
import { getRandomLimit } from '../select';

function* randomData(action) {
  try {
    let results;
    const { dataType, loadType } = action.payload;
    const limit = yield select(getRandomLimit, dataType);
    const response = yield call(Api.fetchRandomData, dataType, 10);

    if(response.status !== 200 || response.data.error) {
      yield put(fetchRandomDataFailure(response));
    }
    results = response.data.results;
    // 刷新
    if(loadType === RANDOM.REFRESH){
      yield put(refreshRandomData(dataType, results));
    }
    yield put(fetchRandomDataSuccess(dataType, results));
  } catch(err) {
    Console.error(err);
    yield put(fetchRandomDataFailure(err, response));
  }
}

export default function* randomDataWatch() {
  yield takeLatest(RANDOM.REQUEST, randomData);
}