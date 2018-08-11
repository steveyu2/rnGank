import { RANDOM } from '../../commons/actionTypes';
import {
  call,
  put,
  all,
  takeLatest,
  select,
} from 'redux-saga/effects';
import {
  refreshRandomData,
  fetchRandomDataSuccess,
  fetchRandomDataFailure,
} from './action';
import { Console } from '../../commons/util';
import Api, { gankio } from '../../commons/Api';
import { PULLUPLOAD } from '../../components/pullUploading';
import { getRandomLimit, getRandomLoading  } from '../select';

function* randomData(action) {
  let results;
  let response = {};
  const { dataType, loadType } = action.payload;
  const loading = yield select(getRandomLoading, dataType);
  const limit = yield select(getRandomLimit, dataType);
  try {
    response = yield call(Api.fetchRandomData, dataType, limit);

    if(response.status !== 200 || response.data.error) {
      debugger
      yield put(fetchRandomDataFailure(dataType, response, ""));
    }
    results = response.data.results;
    // 刷新
    yield put(fetchRandomDataSuccess(loadType, dataType, results));
  } catch(err) {
    Console.log(err);
    yield put(fetchRandomDataFailure(dataType, response, err));
  }
}

export default function* randomDataWatch() {
  const sagas = Object.keys(gankio.type).map(v => {
    const type = gankio.type[v];
    return [
      takeLatest(RANDOM.REQUEST + type, randomData),
      takeLatest(RANDOM.REFRESH + type, randomData),
    ];
  }).reduce((a,b) => [...a, ...b], [])

  yield all(sagas)
}