import { call, put, all, takeLatest, select } from "redux-saga/effects";
import { fetchRandomDataSuccess, fetchRandomDataFailure } from "./action";
import { RANDOM } from "~/common/actionTypes";
import { Console } from "~/common/util";
import Api, { gankio } from "~/common/Api";
// import { PULLUPLOAD } from "~/components/pullUploading";
import { getRandomLimit } from "../select";

function* randomData(action) {
  const { dataType, loadType } = action.payload;
  let response;
  let results;
  try {
    const limit = yield select(getRandomLimit, dataType);

    response = yield call(Api.fetchRandomData, dataType, limit);

    if (response.status !== 200 || response.data.error) {
      yield put(fetchRandomDataFailure(dataType, response, ""));
    }

    results = response.data.results;

    yield put(fetchRandomDataSuccess(loadType, dataType, results));
  } catch (err) {
    Console.log(err);
    yield put(fetchRandomDataFailure(dataType, response, err));
  }
}

export default function* randomDataWatch() {
  const sagas = Object.keys(gankio.type)
    .map(v => {
      const type = gankio.type[v];
      return [
        takeLatest(`${RANDOM.REQUEST}_${type}`, randomData),
        takeLatest(`${RANDOM.REFRESH}_${type}`, randomData)
      ];
    })
    .reduce((a, b) => [...a, ...b], []);

  yield all(sagas);
}
