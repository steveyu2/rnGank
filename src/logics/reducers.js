import { combineReducers } from 'redux';
import random from './random/reducer';


var Reducers = combineReducers({
  random,
})

export default Reducers