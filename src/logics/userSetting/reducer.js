import { USER_SETTING } from '../../commons/actionTypes';
import  { DEFAULT_SETTING } from '../../commons/constants';

const initState = {
  ...DEFAULT_SETTING,
  loading: false,
  localLoad: false,
};

function userSetting(state = initState, action = {}) {
  const { setting } = action.payload || {};

  switch (action.type) {
    case USER_SETTING.REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case USER_SETTING.SUCCESS:
      return {
        ...state,
        ...setting,
        loading: false,
        localLoad: true,
      };
      break;
    case USER_SETTING.FAILURE:
      return {
        ...state,
        loading: false,
        localLoad: true,
      };
      break;
    default:
      return state
  }
}

export default userSetting;