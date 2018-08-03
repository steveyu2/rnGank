import { RANDOM } from '../../commons/actionTypes';
import Api, { gankio } from '../../commons/Api';

const dataState = {
  loading: false,
  error: false,
  data: [],
  limit: 12,
};

const initState = {
  [gankio.type.ALL]: {...dataState},
  [gankio.type.FULI]: {...dataState},
  [gankio.type.ANDROID]: {...dataState},
  [gankio.type.IOS]: {...dataState},
  [gankio.type.LEISUREVIDEO]: {...dataState}, // 休息视频
  [gankio.type.EXPAND]: {...dataState}, // 拓展资源
  [gankio.type.BLINDRECOMMEND]: {...dataState}, // 瞎推荐
  [gankio.type.APP]: {...dataState},
};

function random(state = initState, action = {}) {
  const { dataType, data } = action.payload || {};

  switch (action.type) {
    case RANDOM.REQUEST:
      return {
        ...state,
        [dataType]: {
          ...state[dataType],
          loading: true,
        },
      };
      break;
    case RANDOM.REFRESH:
      return {
        ...state,
        [dataType]: {
          ...state[dataType],
          loading: false,
          data: data,
        },
      };
      break;
    case RANDOM.SUCCESS:
      return {
        ...state,
        [dataType]: {
          ...state[dataType],
          loading: false,
          data: [...state[dataType].data, ...data],
        },
      };
      break;
    case RANDOM.FAILURE:
      return {
        ...state[dataType],
        loading: false,
        error: true,
      };
      break;
    default:
      return state
  }
}

export default random;