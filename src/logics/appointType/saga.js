import { APPOINT_TYPE } from '../../commons/actionTypes';
import {
  call,
  put,
  takeLatest,
  takeEvery,
  select,
} from 'redux-saga/effects';
import {
  fetchAppointTypeData,
  refreshAppointTypeData,
  fetchAppointTypeDataSuccess,
  fetchAppointTypeDataFailure,
} from './action';
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
      yield put(fetchAppointTypeDataFailure(response));
    }
    results = response.data.results;
    // 刷新
    if(loadType === APPOINT_TYPE.REFRESH){
      yield put(refreshAppointTypeData(dataType, results));
    }
    yield put(fetchAppointTypeDataSuccess(dataType, results));
  } catch(err) {
    Console.error(err);
    yield put(fetchAppointTypeDataFailure(err, response));
  }
}

export default function* appointTypeDataWatch() {
  yield takeEvery(APPOINT_TYPE.REQUEST, appointTypeData);
}