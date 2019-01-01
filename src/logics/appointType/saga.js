import { call, put, all, takeLatest, select } from "redux-saga/effects";
import {
  fetchAppointTypeDataSuccess,
  fetchAppointTypeDataFailure
} from "./action";
import { APPOINT_TYPE } from "~/common/actionTypes";
import { Console } from "~/common/util";
import Api, { gankio } from "~/common/Api";
import { getAppointType } from "../select";

function* appointTypeData(action) {
  const { dataType, loadType } = action.payload;
  let results;
  let response;
  try {
    const { page, limit } = yield select(getAppointType, dataType);

    response = yield call(Api.fetchAppointTypeData, dataType, limit, page);

    if (response.status !== 200 || response.data.error) {
      yield put(fetchAppointTypeDataFailure(dataType, response, ""));
    }

    results = response.data.results;

    yield put(fetchAppointTypeDataSuccess(loadType, dataType, results));
  } catch (err) {
    Console.error(err);
    yield put(fetchAppointTypeDataFailure(dataType, response, err));
  }
}

export default function* appointTypeDataWatch() {
  const sagas = Object.keys(gankio.type)
    .map(v => {
      const type = gankio.type[v];
      return [
        takeLatest(`${APPOINT_TYPE.REQUEST}_${type}`, appointTypeData),
        takeLatest(`${APPOINT_TYPE.REFRESH}_${type}`, appointTypeData)
      ];
    })
    .reduce((a, b) => [...a, ...b], []);

  yield all(sagas);
}
