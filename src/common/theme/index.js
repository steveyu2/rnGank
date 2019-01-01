import normal from "./normal";
import night from "./night";
import { Distribution } from "../util";

const theme = Distribution(
  {
    normal,
    night
  },
  {}
);

export const setTheme = (...args) => theme.setType(...args);
export default theme.data;
