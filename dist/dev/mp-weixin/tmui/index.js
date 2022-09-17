"use strict";
var _a;
var common_vendor = require("../common/vendor.js");
var tmui_tool_lib_fetch = require("./tool/lib/fetch.js");
var tmui_tool_theme_theme = require("./tool/theme/theme.js");
var tmui_tool_function_util = require("./tool/function/util.js");
var tmui_tool_lib_language = require("./tool/lib/language.js");
var tmui_tool_lib_share = require("./tool/lib/share.js");
var tmui_tool_function_preview = require("./tool/function/preview.js");
const easycom = {
  autoscan: true,
  custom: {
    "^tm-(.*)": "@/tmui/components/tm-$1/tm-$1.vue"
  }
};
const pages$1 = [
  {
    path: "pages/index/index",
    style: {
      navigationBarTitleText: "fake\u5546\u57CE"
    }
  },
  {
    path: "pages/index/user",
    style: {
      navigationBarTitleText: "\u7528\u6237"
    }
  },
  {
    path: "pages/cart/list",
    style: {
      navigationBarTitleText: "\u8D2D\u7269\u8F66"
    }
  },
  {
    path: "pages/cart/cartContent",
    style: {
      navigationBarTitleText: "\u8D2D\u7269"
    }
  },
  {
    path: "pages/classification/list",
    style: {
      navigationBarTitleText: "\u5206\u7C7B"
    }
  }
];
const globalStyle = {
  navigationBarTextStyle: "black",
  navigationBarTitleText: "uni-app",
  navigationBarBackgroundColor: "#F8F8F8",
  backgroundColor: "#F8F8F8"
};
const tabBar = {
  selectedColor: "#fa436a",
  list: [
    {
      pagePath: "pages/index/index",
      iconPath: "static/tab-home.png",
      selectedIconPath: "static/tab-home-current.png",
      text: "\u9996\u9875"
    },
    {
      pagePath: "pages/classification/list",
      iconPath: "static/tab-cart.png",
      selectedIconPath: "static/tab-cart-current.png",
      text: "\u5206\u7C7B"
    },
    {
      pagePath: "pages/index/user",
      iconPath: "static/tab-my.png",
      selectedIconPath: "static/tab-my-current.png",
      text: "\u6211\u7684"
    }
  ]
};
var PageJsonInit = {
  easycom,
  pages: pages$1,
  globalStyle,
  tabBar
};
let pages = [];
PageJsonInit.pages.forEach((el) => {
  var _a2, _b;
  pages.push({
    path: el.path,
    custom: (_b = (_a2 = el == null ? void 0 : el.style) == null ? void 0 : _a2.navigationStyle) != null ? _b : "default"
  });
});
if (Array.isArray(PageJsonInit == null ? void 0 : PageJsonInit.subPackages)) {
  PageJsonInit.subPackages.forEach((el) => {
    let rootPath = el.root;
    el.pages.forEach((el2) => {
      var _a2, _b;
      pages.push({
        path: rootPath + "/" + el2.path,
        custom: (_b = (_a2 = el2 == null ? void 0 : el2.style) == null ? void 0 : _a2.navigationStyle) != null ? _b : "default"
      });
    });
  });
}
const $tm = {
  tabBar: (_a = PageJsonInit == null ? void 0 : PageJsonInit.tabBar) != null ? _a : {
    color: "",
    selectedColor: "",
    borderStyle: "",
    backgroundColor: ""
  },
  pages,
  isColor: tmui_tool_theme_theme.theme.isCssColor,
  u: { ...tmui_tool_function_util.util, preview: tmui_tool_function_preview.preview },
  language: tmui_tool_lib_language.language,
  fetch: tmui_tool_lib_fetch.fetchNet
};
common_vendor.index.$tm = $tm;
var tmui = {
  install: (app, options) => {
    app.use(tmui_tool_lib_language.languageByGlobal());
    let appconfig = {};
    const { onShareAppMessage, onShareTimeline } = tmui_tool_lib_share.share();
    appconfig = { ...appconfig, onShareAppMessage, onShareTimeline };
    app.mixin({
      ...appconfig
    });
    app.config.globalProperties.tm = $tm;
  }
};
exports.tmui = tmui;
