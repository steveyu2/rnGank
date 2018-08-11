import { RANDOM } from '../../commons/actionTypes';

export function fetchRandomData(dataType, loadType) {
  return {
    type: `${RANDOM.REQUEST}_${dataType}`,
    payload: {
      dataType,
      loadType,
    },
  }
}
export function refreshRandomData(dataType, loadType) {
  return {
    type: `${RANDOM.REQUEST}_${dataType}`,
    payload: {
      dataType,
      loadType,
    },
  }
}
export function fetchRandomDataSuccess(loadType, dataType, data) {
  return {
    type: RANDOM.SUCCESS,
    payload: {
      dataType,
      loadType,
      data,
    },
  }
}
export function fetchRandomDataFailure(dataType, res, err) {
  return {
    type: RANDOM.FAILURE,
    payload: {
      dataType,
      res,
      err,
    },
  }
}