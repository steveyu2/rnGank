import { APPOINT_TYPE } from "~/common/actionTypes";

export function fetchAppointTypeData(dataType, loadType) {
  return {
    type: `${APPOINT_TYPE.REQUEST}_${dataType}`,
    payload: {
      dataType,
      loadType
    }
  };
}
export function refreshAppointTypeData(dataType, loadType) {
  return {
    type: `${APPOINT_TYPE.REFRESH}_${dataType}`,
    payload: {
      dataType,
      loadType
    }
  };
}
export function fetchAppointTypeDataSuccess(loadType, dataType, data) {
  return {
    type: APPOINT_TYPE.SUCCESS,
    payload: {
      dataType,
      loadType,
      data
    }
  };
}
export function fetchAppointTypeDataFailure(dataType, res, err) {
  return {
    type: APPOINT_TYPE.FAILURE,
    payload: {
      dataType,
      res,
      err
    }
  };
}
