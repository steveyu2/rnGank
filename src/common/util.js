import dayjs from "dayjs";
import { DEV } from "./constants";

export const Console = {
  log: (...args) => {
    if (DEV) console.log(...args);
  },
  error: (...args) => {
    if (DEV) console.error(...args);
  }
};

// 16进制颜色转rgba `
export const parseColorToRgba = (
  color,
  opacity = 1,
  { R = 0, G = 0, B = 0 }
) => {
  try {
    color = color.split("#")[1];
    color.length === 3 && (color = color + color);
    color = color
      .split("")
      .reduce((a, b, i) => {
        !(i % 2) ? a.push(b) : (a[a.length - 1] += b);
        return a;
      }, [])
      .map(v => parseInt("0x" + v));

    (color[0] += R),
      (color[1] += G),
      (color[2] += B),
      (color = color.join(","));
    return `rgba(${color},${opacity})`;
  } catch (err) {
    Console.log("func parseColorToRgba error: ", err);
    return "rgba(0,0,0, 1)";
  }
};

// 分配器
export const Distribution = (function() {
  const init = (data, defaultResult = "") => {
    let TYPES = [];
    let currentType = "";
    let rootData = {};
    let rootObj = {};
    let tempObj = {};

    try {
      paramValidate(data);
      rootData = Object.assign(data, rootData);
      TYPES = Object.keys(rootData);
      currentType = TYPES[0];

      TYPES.forEach(v => {
        Object.keys(rootData[v]).forEach(_v => {
          if (!tempObj[_v])
            tempObj[_v] = {
              // 若key不存在则返回defaultResult
              get: function() {
                return rootData[currentType][_v] || defaultResult;
              },
              set: function(val) {
                throw new Error(
                  "Distribution Obj set error: cannot set Distribution obj attr :)"
                );
              }
            };
        });
      });

      Object.defineProperties(rootObj, tempObj);

      return {
        data: rootObj,
        setType: type => {
          if (TYPES.indexOf(type) === -1) {
            throw new Error("Distribution Obj setType error: type no exist");
          } else {
            currentType = type;
          }
        },
        getType: () => currentType
      };
    } catch (err) {
      throw err;
    }
  };
  // 构造函数参数验证
  const paramValidate = data => {
    const errorMsg = ["Distribution constructor param error:"];

    if (!data) {
      throw new Error(`${errorMsg[0]} data is required`);
    }
    const keys = Object.keys(data);
    if (keys.length === 0) {
      throw new Error(`${errorMsg[0]} data is empty object`);
    }

    for (let i = 0, item; i < keys.length; i++) {
      if (Object.prototype.toString.call(data[keys[0]]) !== "[object Object]") {
        throw new Error(`${errorMsg[0]} data attribute Must be object`);
        break;
      }
    }
  };

  return init;
})();

export const isNumber = v => !Number.isNaN(parseInt(v));

export const delay = ms => {
  return new Promise((resolve, reject) => {
    if (!isNumber(ms)) {
      reject("ms is not a number");
    } else {
      setTimeout(() => resolve(true), parseInt(ms));
    }
  });
};

export const timeMsg = (time, { i18n, getLanguge }, defaultResult) => {
  try {
    let currDate = +new Date();
    time = new Date(time);
    let interval = currDate - +time;
    const sixS = 60 * 1000;
    const sixM = 60 * sixS;
    const day = 24 * sixM;
    const swday = 15 * day;

    if (interval <= sixS) {
      return parseInt(interval / 1000) + i18n.secondsAgo;
    } else if (interval <= sixM) {
      return parseInt(interval / sixS) + i18n.minutesAgo;
    } else if (interval <= day) {
      return parseInt(interval / sixM) + i18n.hoursAgo;
    } else if (interval <= swday) {
      return parseInt(interval / day) + i18n.daysAgo;
    } else {
      if (getLanguge() === "en") {
        return dayjs(time).format("MMM DD YYYY");
      }
      return `${time.getFullYear()}年${time.getMonth() +
        1}月${time.getDate()}日`;
    }
  } catch (err) {
    Console.log(err);
    return defaultResult;
  }
};
// 字符串截取
export function cutstr(str, len) {
  try {
    var str_length = 0;
    var str_len = 0;
    str_cut = new String();
    str_len = str.length;
    for (var i = 0; i < str_len; i++) {
      a = str.charAt(i);
      str_length++;
      if (escape(a).length > 4) {
        //中文字符的长度经编码之后大于4
        str_length++;
      }
      str_cut = str_cut.concat(a);
      if (str_length >= len) {
        str_cut = str_cut.concat("...");
        return str_cut;
      }
    }
    //如果给定字符串小于指定长度，则返回源字符串；
    if (str_length < len) {
      return str;
    }
  } catch (err) {
    return str;
  }
}

export const randomColor = () => {
  let color = "";
  while (color.length < 7) {
    color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  return color;
};

// 数组去重
export const arrayUnique = (currArr, key = v => v) => {
  let arr = []; //创建一个临时数组
  let obj = {}; //创建一个空对象
  for (let i = 0, k; i < currArr.length; i++) {
    //遍历当前要去重的数组
    k = key(currArr[i]);
    if (!obj[k]) {
      //判断obj对象中是否存有当前项，没有则执行
      arr.push(currArr[i]); //将当前项push到临时数组中
      obj[k] = 1; //将当前项存入obj对象
    } else {
      //  console.log(currArr)
      //  console.log(currArr[i])
      //  debugger
    }
  }
  return arr;
};
