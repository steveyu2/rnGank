import { MAIN_COLOR } from '../../commons/actionTypes';

// const stateTemp = {
//   loading: false,
//   error: false,
// }; 
const initState = {
  mainColor: {
    value: '#2196f3',
    loading: false,
  },
  themeName: {
    value: '#normal',
    loading: false,
  },
};

function userSetting(state = initState, action = {}) {
  const { color } = action.payload || {};

  switch (action.type) {
    case MAIN_COLOR.REQUEST:
      return {
        ...state,
        mainColor: {
          ...state.mainColor,
          loading: true,
        }
      };
      break;
    case MAIN_COLOR.SUCCESS:
      return {
        ...state,
        mainColor: {
          ...state.mainColor,
          value: color,
          loading: false,
        }
      };
      break;
    default:
      return state
  }
}

export default userSetting;