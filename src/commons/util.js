import { DEV } from  './constants';

export const Console = {
  log: (...args) => {
    if(DEV)
      console.log(...args);
  },
  error: (...args) => {
    if(DEV)
      console.error(...args);
  }
}

// 16进制颜色转rgba 
export const parseColorToRgba = (color, opacity = 1, {R=0, G=0, B=0}) => {
  try{
    color = color.split("#")[1];
    color.length === 3 && (color = color + color);
    color = color
      .split('')
      .reduce((a,b, i)=>{
        !(i % 2) ? a.push(b) : (a[a.length-1] += b) ;
        return a;
      },[])
      .map(v => parseInt('0x'+v))

      color[0] += R,
      color[1] += G,
      color[2] += B,

      color = color.join(',');
    return `rgba(${color},${opacity})`;
  } catch(err) {
    Console.log("func parseColorToRgba error: ",err)
  }
}

// 分配器
export const Distribution = (function() {
  const init = data => {
    let TYPES = [];
    let currentType = '';
    let rootData = {};
    let rootObj = {};
    let tempObj = {};
    
    try{
      paramValidate(data);
      rootData = Object.assign(data, rootData);
      TYPES = Object.keys(rootData);
      currentType = TYPES[0];

      TYPES.forEach(v => {
        Object.keys(rootData[v]).forEach(_v => {
          if(!tempObj[_v])
            tempObj[_v] = {
              get: function(){return rootData[currentType][_v];},
              set: function(val){ throw new Error("Distribution Obj set error: cannot set Distribution obj attr :)") }
            }
        });
      });
      
      Object.defineProperties(rootObj, tempObj);

      return {
        data: rootObj,
        setType: type => {
          if(TYPES.indexOf(type) === -1){
            throw new Error("Distribution Obj setType error: type no exist");
          } else {
            currentType = type;
          }
        },
      }
    }catch(err) {
      throw err;
    }
  }
  // 构造函数参数验证
  const paramValidate = data => {
    const errorMsg=[
      "Distribution constructor param error:",
    ];

    if(!data) { 
      throw new Error(`${errorMsg[0]} data is required`);
    }
    const keys = Object.keys(data);
    if(keys.length === 0) {
      throw new Error(`${errorMsg[0]} data is empty object`);
    }
    
    for(let i = 0, item; i < keys.length; i++) {
      if(Object.prototype.toString.call(data[keys[0]]) !== "[object Object]") {
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
    if(!isNumber(ms)){
      reject('ms is not a number');
    } else {
      setTimeout(() => resolve(true), parseInt(ms))
    }
  });
}