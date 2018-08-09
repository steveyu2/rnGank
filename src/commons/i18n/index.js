import zh from './zh';
import en from './en';
import jp from './jp';
import { Distribution } from '../util';

const i18n = Distribution({
  zh,
  en,
  jp,
});

export const setLanguge = (...args) => i18n.setType(...args);
export default i18n.data;