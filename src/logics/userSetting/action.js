import { USER_SETTING } from '../../commons/actionTypes';

// 主色调
export function setUserSetting(setting) {
  return { type: USER_SETTING.REQUEST, payload: {setting} }
}
export function setUserSettingSuccess(setting) {
  return { type: USER_SETTING.SUCCESS, payload: {setting} }
}
export function setUserSettingFailure(...err) {
  return { type: USER_SETTING.FAILURE, payload: {...err} }
}