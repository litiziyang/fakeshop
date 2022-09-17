"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_tm_text2 = common_vendor.resolveComponent("tm-text");
  const _easycom_tm_sheet2 = common_vendor.resolveComponent("tm-sheet");
  const _easycom_tm_app2 = common_vendor.resolveComponent("tm-app");
  (_easycom_tm_text2 + _easycom_tm_sheet2 + _easycom_tm_app2)();
}
const _easycom_tm_text = () => "../../tmui/components/tm-text/tm-text.js";
const _easycom_tm_sheet = () => "../../tmui/components/tm-sheet/tm-sheet.js";
const _easycom_tm_app = () => "../../tmui/components/tm-app/tm-app.js";
if (!Math) {
  (_easycom_tm_text + _easycom_tm_sheet + _easycom_tm_app)();
}
function render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      ["font-size"]: 24,
      _class: "font-weight-b",
      label: "\u8FD9\u91CC\u662F\u8D2D\u7269\u8F66\u754C\u9762"
    }),
    b: common_vendor.p({
      margin: [30, 20],
      padding: [0, 0],
      transprent: true,
      shadow: 5
    })
  };
}
const _sfc_main = {};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", render], ["__file", "/Users/liziyang/data/vue/uni-preset-vue-vite-ts/src/pages/cart/list.nvue"]]);
wx.createPage(MiniProgramPage);
