// jp https://unpkg.com/dayjs@1.7.5/locale/ja
export const jp = {
  name: "ja",
  weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
  months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
  ordinal: function(e) {
      return e + "日"
  },
  relativeTime: {
      future: "%s後",
      past: "%s前",
      s: "数秒",
      m: "1分",
      mm: "%d分",
      h: "1時間",
      hh: "%d時間",
      d: "1日",
      dd: "%d日",
      M: "1ヶ月",
      MM: "%dヶ月",
      y: "1年",
      yy: "%d年"
  }
};
// jp https://unpkg.com/dayjs@1.7.5/locale/zh-cn
export const zh = {
  name: "zh-cn",
  weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
  weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
  weekdaysMin: "日_一_二_三_四_五_六".split("_"),
  months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
  monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
  ordinal: function(_) {
      return _ + "日"
  },
  relativeTime: {
      future: "%s内",
      past: "%s前",
      s: "几秒",
      m: "1 分钟",
      mm: "%d 分钟",
      h: "1 小时",
      hh: "%d 小时",
      d: "1 天",
      dd: "%d 天",
      M: "1 个月",
      MM: "%d 个月",
      y: "1 年",
      yy: "%d 年"
  }
};