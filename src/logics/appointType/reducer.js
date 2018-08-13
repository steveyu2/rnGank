import { APPOINT_TYPE } from '../../commons/actionTypes';
import { gankio } from '../../commons/Api';
import { PULLUPLOAD } from '../../components/pullUploading';
import { arrayUnique } from '../selector';

const dataState = {
  loaded: false, // 初次加载
  refreshLoading: false, // 下拉
  loading: false, //上拉
  error: false,
  data: [],
  limit: 30,
  page: 1,
};

const initState = {
  [gankio.type.ALL]: {...dataState},
  [gankio.type.FULI]: {...dataState, limit: 15,},
  [gankio.type.ANDROID]: {...dataState},
  [gankio.type.IOS]: {...dataState},
  [gankio.type.WEB]: {...dataState},
  [gankio.type.LEISUREVIDEO]: {...dataState}, // 休息视频
  [gankio.type.EXPAND]: {...dataState}, // 拓展资源
  [gankio.type.BLINDRECOMMEND]: {...dataState}, // 瞎推荐
  [gankio.type.APP]: {...dataState},
};

function appointType(state = initState, action = {}) {
  const { dataType, data, loadType } = action.payload || {};
  const isRefreshRequest = loadType === APPOINT_TYPE.REFRESH;

  switch (action.type) {
    case APPOINT_TYPE.REQUEST:
      return {
        ...state,
        [dataType]: {
          ...state[dataType],
          loading: PULLUPLOAD.ING,
        },
      };
      break;
    case APPOINT_TYPE.REFRESH:
      return {
        ...state,
        [dataType]: {
          ...state[dataType],
          refreshLoading: true,
          loading: false,
          page: 1,
        },
      };
      break;
    case APPOINT_TYPE.SUCCESS:
      return {
        ...state,
        [dataType]: {
          ...state[dataType],
          data: arrayUnique(isRefreshRequest? data: [...state[dataType].data, ...data]),
          refreshLoading: isRefreshRequest? false: state[dataType].refreshLoading,
          // loading: isRefreshRequest? state[dataType].loading: PULLUPLOAD.ING,
          loading: isRefreshRequest? PULLUPLOAD.ING: PULLUPLOAD.ING,
          loaded: true,
          page: state[dataType].page + 1,
        },
      };
      break;
    case APPOINT_TYPE.FAILURE:
      return {
        ...state,
        [dataType]: {
          ...state[dataType],
          refreshLoading: isRefreshRequest? false: state[dataType].refreshLoading,
          loading: isRefreshRequest? state[dataType].loading: PULLUPLOAD.FAILURE,
          error: true,
        },
      };
      break;
    default:
      return state
  }
}

export default appointType;