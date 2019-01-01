import { put, takeLatest, select } from "redux-saga/effects";
import { delay } from "redux-saga";
import {
  setUserSetting,
  setUserSettingSuccess,
  setUserSettingFailure
} from "./action";
import { USER_SETTING } from "~/common/actionTypes";
import { Console } from "~/common/util";
import { setLanguge } from "~/common/i18n";
import { setTheme } from "~/common/theme";
import Storage, { KEYS } from "~/common/storage";
import { getUserSetting } from "../select";

function* userSetting(action) {
  try {
    const { setting } = action.payload;
    const pervSetting = yield select(getUserSetting);
    const { mainColor, languge, themeName } = setting;

    languge && setLanguge(languge);
    themeName && setTheme(themeName);
    // yield delay(300);

    //  保存到本地
    yield Storage.save({
      key: KEYS.userSetting,
      data: { ...pervSetting, ...setting }
    });

    yield put(setUserSettingSuccess(setting));
  } catch (err) {
    Console.log(err);
    yield put(setUserSettingFailure(err));
  }
}

function* localLoad() {
  try {
    const setting = yield Storage.load({ key: KEYS.userSetting });
    Console.log(setting);
    yield put(setUserSetting(setting));
  } catch (err) {
    Console.log(err);
    yield put(setUserSettingFailure(err));
  }
}
export default function* userSettingWatch() {
  yield takeLatest(USER_SETTING.REQUEST, userSetting);
  yield takeLatest(USER_SETTING.LOCAL_LOAD, localLoad);
}
