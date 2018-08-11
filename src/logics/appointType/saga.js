import {
  call,
  put,
  all,
  takeLatest,
  select,
} from 'redux-saga/effects';
import {
  fetchAppointTypeDataSuccess,
  fetchAppointTypeDataFailure,
} from './action';
import { APPOINT_TYPE } from '../../commons/actionTypes';
import { Console } from '../../commons/util';
import Api, { gankio } from '../../commons/Api';
import { getAppointType } from '../select';

function* appointTypeData(action) {
  try {
    let results;
    const { dataType, loadType } = action.payload;
    const { page, limit } = yield select(getAppointType, dataType);

    const response = yield call(Api.fetchAppointTypeData, dataType, limit, page - 1);

    if(response.status !== 200 || response.data.error) {
      yield put(fetchAppointTypeDataFailure(dataType, response, ""));
    }
    
    results = response.data.results;

    yield put(fetchAppointTypeDataSuccess(loadType, dataType, results));
  } catch(err) {
    Console.error(err);
    yield put(fetchAppointTypeDataFailure(err, response));
  }
}

export default function* appointTypeDataWatch() {
  const sagas = Object.keys(gankio.type).map(v => {
    const type = gankio.type[v];
    return [
      takeLatest(`${APPOINT_TYPE.REQUEST}_${type}`, appointTypeData),
      takeLatest(`${APPOINT_TYPE.REFRESH}_${type}`, appointTypeData),
    ];
  }).reduce((a,b) => [...a, ...b], [])

  yield all(sagas)
}