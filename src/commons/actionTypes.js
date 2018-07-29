import { defineAction } from 'redux-define';
import { SUCCESS, FAILURE, REQUEST, REFRESH, APPNAME } from './constants';

const namespace = APPNAME;
const GANK = defineAction('GANK', [], namespace);

// 随机数据
export const RANDOM = defineAction('RANDOM', [REQUEST, SUCCESS, FAILURE, REFRESH], GANK);
// 指定数据 
export const APPOINT_TYPE = defineAction('APPOINT_TYPE', [SUCCESS, FAILURE, REQUEST, REFRESH], GANK);
// 每日数据 
export const APPOINT_DAY = defineAction('APPOINT_DAY', [SUCCESS, FAILURE, REQUEST, REFRESH], GANK);
// 搜索数据 
export const SEARCH_TYPE = defineAction('APPOINT_DAY', [SUCCESS, FAILURE, REQUEST, REFRESH], GANK);