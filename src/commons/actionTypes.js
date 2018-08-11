import { defineAction } from 'redux-define';
import { SUCCESS, FAILURE, REQUEST, REFRESH, APPNAME, LOADING } from './constants';

const namespace = APPNAME;
const GANK = defineAction('GANK', [], namespace);

// 随机数据
export const RANDOM = defineAction('RANDOM', [REQUEST, SUCCESS, FAILURE, REFRESH, LOADING], GANK);
// 指定数据 
export const APPOINT_TYPE = defineAction('APPOINT_TYPE', [SUCCESS, FAILURE, REQUEST, REFRESH, LOADING], GANK);
// 每日数据 
export const APPOINT_DAY = defineAction('APPOINT_DAY', [SUCCESS, FAILURE, REQUEST, REFRESH], GANK);
// 搜索数据 
export const SEARCH_TYPE = defineAction('APPOINT_DAY', [SUCCESS, FAILURE, REQUEST, REFRESH], GANK);
// 设置 
export const USER_SETTING = defineAction('USER_SETTING', [SUCCESS, FAILURE, REQUEST], GANK);
