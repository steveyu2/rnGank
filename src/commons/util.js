import appConfig from  './appConfig';

export const Console = {
  log: (...args) => {
    if(appConfig.DEV)
      console.log(...args);
  },
  error: (...args) => {
    if(appConfig.DEV)
      console.error(...args);
  }
}
