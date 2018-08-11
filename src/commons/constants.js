import { Platform, StatusBar, Dimensions, PixelRatio } from "react-native";
import { Header } from 'react-navigation';
// import { isIphoneX } from "react-native-iphone-x-helper";


const baseScreenHeight = 1280;
const baseScreenWidth = 720;
const fontScale = PixelRatio.getFontScale();
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const HEADER_HEIGHT = Header.HEIGHT;

export const DEFAULT_SETTING = {
  mainColor: "#2196f3", // 33 150 243  -33 -15 0 2196f3 #73a037 
  languge: "zh",
  themeName: 'normal',
  bgColor: 'rgba(255,255,255, 0.8)',
};
        
// 适配单位
export const adaptUnits = (num, type) => {

  if(type === "W") {
    num *= SCREEN_WIDTH / 720;
  } else if(type === "H") {
    num *= SCREEN_HEIGHT / 1280;
  } else if(type === "F") {
    num *= 1 / fontScale;
  } else {
    throw new Error('func adaptUnits type error')
  }

  return num;
}

export const DRAWER_WIDTH = adaptUnits(500 ,'W'); 
export const TAB_HEIGHT = adaptUnits(70 ,'W'); 
export const SPACING = adaptUnits(25 ,'W'); 

export const FONT_SIZE = {
  HG: adaptUnits(20, 'F'),
  LG: adaptUnits(18, 'F'),
  MD: adaptUnits(16, 'F'),
  NM: adaptUnits(14, 'F'),
  SM: adaptUnits(12, 'F'),
  XS: adaptUnits(11, 'F'),
  XXS: adaptUnits(10, 'F'),
  XXXS: adaptUnits(9, 'F'),
  XXXXS: adaptUnits(8, 'F'),
  XXXXXS: adaptUnits(7, 'F'),
  XXXXXXS: adaptUnits(6, 'F'),
};

export const DEV = true;

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS'; 
export const FAILURE = 'FAILURE'; 
export const REFRESH = 'REFRESH';
export const LOADING = 'LOADING'; 

export const APPNAME = 'rnGank';
// stack screens
export const SCREENS = {};
SCREENS.S = [
  'ROOT',
  'WEBVIEW',
].reduce((a, b) => ({...a, [b]: b + '_stack'}), {});
// drawer screens
SCREENS.D = [
  'RANDOM',
].reduce((a, b) => ({...a, [b]: b + '_drawer'}), {});

