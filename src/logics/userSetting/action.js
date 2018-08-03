import { MAIN_COLOR } from '../../commons/actionTypes';

// 主色调
export function setMainColor(color) {
  return { type: MAIN_COLOR.REQUEST, payload: {color} }
}
export function setMainColorSuccess(color) {
  return { type: MAIN_COLOR.SUCCESS, payload: {color} }
}
export function setMainColorFailure(...err) {
  return { type: MAIN_COLOR.FAILURE, payload: {...err} }
}