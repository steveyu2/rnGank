import { USER_SETTING } from "~/common/actionTypes";

export function setUserSetting(setting) {
  return { type: USER_SETTING.REQUEST, payload: { setting } };
}
export function setUserSettingSuccess(setting) {
  return { type: USER_SETTING.SUCCESS, payload: { setting } };
}
export function setUserSettingFailure(...err) {
  return { type: USER_SETTING.FAILURE, payload: { ...err } };
}

export function userSettingLocalLoad() {
  return { type: USER_SETTING.LOCAL_LOAD };
}
