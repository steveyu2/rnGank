import axios from 'axios';
import { Console } from './util';
// gank.io
const gankio = {
  domain: 'http://gank.io/',
  type: {
    ALL: 'all',
    FULI: '福利',
    ANDROID: 'Android',
    IOS: 'iOS',
    LEISUREVIDEO: '休息视频', // Leisure
    EXPAND: '拓展资源',// Expand
    WEB: '前端',
    BLINDRECOMMEND: '瞎推荐', // Blind recommend
    APP: 'App',
  },
};

const contentType = {
  json: 'application/json',
  form: 'application/x-www-form-urlencoded',
};

const request = options => {
  return axios(options).catch(v => {
    Console.error(v)
  });
}

class Api {
  // 随机数据
  fetchRandomData(type, limit) {
    return request({
      method:'get',
      url: `${gankio.domain}api/random/data/${type}/${limit}`,
      headers: { 'content-type': contentType.json  },
    })
  }
  // 每日数据
  fetchAppointDayData(year, month, day) {
    return request({
      method:'get',
      url: `${gankio.domain}api/day/${year}/${month}/${day}`,
      headers: { 'content-type': contentType.json  },
    })
  }
  // 指定数据
  fetchAppointTypeData(type, limit, page) {
    return request({
      method:'get',
      url: `${gankio.domain}api/data/${type}/${limit}/${page}`,
      headers: { 'content-type': contentType.json  },
    })
  }
  // 搜索
  fetchSearchTypeData(query, type, limit, page) {
    return request({
      method:'get',
      url: `${gankio.domain}api/search/${query}/listview/category/${type}/count/${limit}/page/${page}`,
      headers: { 'content-type': contentType.json  },
    })
  }
}

export default new Api();
export {
  gankio,
};