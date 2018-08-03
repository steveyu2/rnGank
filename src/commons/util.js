import {DEV} from  './constants';

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

export const parseColorToRgba = (color, opacity = 1) => {
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
      .join(',');
    return `rgba(${color},${opacity})`;
  } catch(err) {
    Console.log("func parseColorToRgba error: ",err)
  }
}

export class Distribution {
  
}