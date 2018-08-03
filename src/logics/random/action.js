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
export function refreshRandomData(dataType, data) {
  return {
    type: RANDOM.REFRESH,
    payload: {
      dataType,
      data,
    },
  }
}
export function fetchRandomDataSuccess(dataType, data) {
  return {
    type: RANDOM.SUCCESS,
    payload: {
      dataType,
      data,
    },
  }
}
export function fetchRandomDataFailure(...err) {
  return {
    type: RANDOM.FAILURE,
    payload: {
      ...err,
    },
  }
}