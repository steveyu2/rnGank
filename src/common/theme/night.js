import { parseColorToRgba, Console } from "../util";

const black = "#393939";

const lightBlack = parseColorToRgba(black, 1, { R: -40, G: -40, B: -40 });
const color1 = "#888";
const color2 = "#eee";
const color3 = "#222";
const color4 = "#333";

export default {
  mainColor: black,
  background: { backgroundColor: black },
  container: { backgroundColor: black },
  text: { color: color1 },
  lightText: { color: color2 },
  blackText: { color: color3 },
  headerStyle: { backgroundColor: black },
  drawerContainerStyle: { backgroundColor: black },
  drawerFooterContainerStyle: { borderColor: lightBlack },
  drawerNavTextStyle: { color: color1 },
  drawerNavActiveTextStyle: { color: color2 },
  tabContainerStyle: { backgroundColor: color3 },
  gankContainerStyle: { backgroundColor: color3 },
  gankBottomContainerStyle: { backgroundColor: color4 },
  gankIconStyle: { color: black },
  gankTextStyle: { color: color2 },
  gankBadgeStyle: { color: color3 }
};
