import { RANDOM } from '../../commons/actionTypes';

export function fetchRandomData(dataType, loadType) {
  return {
    type: RANDOM.REQUEST,
    payload: {
      dataType,
      loadType,
    },
  }
}
export function refreshRandomData(data) {
  return {
    type: RANDOM.REFRESH,
    payload: {
      data,
    },
  }
}
export function fetchRandomDataSuccess(data) {
  return {
    type: RANDOM.SUCCESS,
    payload: {
      data,
    },
  }
}
export function fetchRandomDataFailure(err) {
  return {
    type: RANDOM.FAILURE,
    payload: {
      err,
    },
  }
}