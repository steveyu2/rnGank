import { combineReducers } from 'redux';
import random from './random/reducer';
import appointType from './appointType/reducer';
import userSetting from './userSetting/reducer';

var Reducers = combineReducers({
  random,
  appointType,
  userSetting,
})

export default Reducers