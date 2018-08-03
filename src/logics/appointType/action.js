import { APPOINT_TYPE } from '../../commons/actionTypes';

export function fetchAppointTypeData(dataType, loadType) {
  return {
    type: APPOINT_TYPE.REQUEST,
    payload: {
      dataType,
      loadType,
    },
  }
}
export function refreshAppointTypeData(dataType, data) {
  return {
    type: APPOINT_TYPE.REFRESH,
    payload: {
      dataType,
      data,
    },
  }
}
export function fetchAppointTypeDataSuccess(dataType, data) {
  return {
    type: APPOINT_TYPE.SUCCESS,
    payload: {
      dataType,
      data,
    },
  }
}
export function fetchAppointTypeDataFailure(...err) {
  return {
    type: APPOINT_TYPE.FAILURE,
    payload: {
      ...err,
    },
  }
}