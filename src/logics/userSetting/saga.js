import {
  put,
  takeLatest,
} from 'redux-saga/effects';
import { delay } from 'redux-saga'
import {
  setUserSetting,
  setUserSettingSuccess,
  setUserSettingFailure,
} from './action';
import { USER_SETTING } from '../../commons/actionTypes';
import { Console } from '../../commons/util';
import { setLanguge } from '../../commons/i18n';
import { setTheme } from '../../commons/theme';

function* userSetting(action) {
  try {
    const { setting } = action.payload;
    const {
      mainColor,
      languge,
      themeName,
    } = setting;

    languge && setLanguge(languge)
    themeName && setTheme(themeName)
    // yield delay(300);
    
    yield put(setUserSettingSuccess(setting));
  } catch(err) {
    Console.error(err);
    yield put(setUserSettingFailure(err));
  }
}

export default function* userSettingWatch() {
  yield takeLatest(USER_SETTING.REQUEST, userSetting);
}