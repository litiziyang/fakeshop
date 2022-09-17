"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_tm_avatar2 = common_vendor.resolveComponent("tm-avatar");
  const _easycom_tm_text2 = common_vendor.resolveComponent("tm-text");
  const _easycom_tm_image2 = common_vendor.resolveComponent("tm-image");
  const _easycom_tm_col2 = common_vendor.resolveComponent("tm-col");
  const _easycom_tm_row2 = common_vendor.resolveComponent("tm-row");
  const _easycom_tm_sheet2 = common_vendor.resolveComponent("tm-sheet");
  const _easycom_tm_icon2 = common_vendor.resolveComponent("tm-icon");
  const _easycom_tm_carousel2 = common_vendor.resolveComponent("tm-carousel");
  const _easycom_tm_grid_item2 = common_vendor.resolveComponent("tm-grid-item");
  const _easycom_tm_grid2 = common_vendor.resolveComponent("tm-grid");
  const _easycom_tm_app2 = common_vendor.resolveComponent("tm-app");
  (_easycom_tm_avatar2 + _easycom_tm_text2 + _easycom_tm_image2 + _easycom_tm_col2 + _easycom_tm_row2 + _easycom_tm_sheet2 + _easycom_tm_icon2 + _easycom_tm_carousel2 + _easycom_tm_grid_item2 + _easycom_tm_grid2 + _easycom_tm_app2)();
}
const _easycom_tm_avatar = () => "../../tmui/components/tm-avatar/tm-avatar.js";
const _easycom_tm_text = () => "../../tmui/components/tm-text/tm-text.js";
const _easycom_tm_image = () => "../../tmui/components/tm-image/tm-image.js";
const _easycom_tm_col = () => "../../tmui/components/tm-col/tm-col.js";
const _easycom_tm_row = () => "../../tmui/components/tm-row/tm-row.js";
const _easycom_tm_sheet = () => "../../tmui/components/tm-sheet/tm-sheet.js";
const _easycom_tm_icon = () => "../../tmui/components/tm-icon/tm-icon.js";
const _easycom_tm_carousel = () => "../../tmui/components/tm-carousel/tm-carousel.js";
const _easycom_tm_grid_item = () => "../../tmui/components/tm-grid-item/tm-grid-item.js";
const _easycom_tm_grid = () => "../../tmui/components/tm-grid/tm-grid.js";
const _easycom_tm_app = () => "../../tmui/components/tm-app/tm-app.js";
if (!Math) {
  (_easycom_tm_avatar + _easycom_tm_text + _easycom_tm_image + _easycom_tm_col + _easycom_tm_row + _easycom_tm_sheet + _easycom_tm_icon + _easycom_tm_carousel + _easycom_tm_grid_item + _easycom_tm_grid + _easycom_tm_app)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const listimg = [
      "https://picsum.photos/200/300?id=43335",
      "https://picsum.photos/200/300?id=433",
      "https://picsum.photos/200/300?id=439",
      "https://picsum.photos/200/300?id=459"
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["font-size"]: 42,
          round: 12,
          color: "pink",
          linear: "top",
          icon: "tmicon-QQ"
        }),
        b: common_vendor.p({
          label: "\u5E05\u54E5",
          color: "blue",
          ["font-size"]: 35
        }),
        c: common_vendor.p({
          label: "15288881111",
          color: "grey",
          ["font-size"]: 24
        }),
        d: common_vendor.p({
          width: 686,
          height: 180,
          src: "https://picsum.photos/200/300",
          round: 4
        }),
        e: common_vendor.p({
          label: "3"
        }),
        f: common_vendor.p({
          label: "\u4F18\u60E0\u5238",
          ["font-size"]: 30
        }),
        g: common_vendor.p({
          height: 120
        }),
        h: common_vendor.p({
          label: "3"
        }),
        i: common_vendor.p({
          label: "\u79EF\u5206",
          ["font-size"]: 30
        }),
        j: common_vendor.p({
          height: 120
        }),
        k: common_vendor.p({
          label: "3"
        }),
        l: common_vendor.p({
          label: "\u56DE\u9988\u91D1",
          ["font-size"]: 30
        }),
        m: common_vendor.p({
          height: 120
        }),
        n: common_vendor.p({
          width: 686,
          column: 3,
          round: 3,
          color: "blue-grey"
        }),
        o: common_vendor.p({
          margin: [30, 10],
          padding: [0, 0],
          transprent: true,
          shadow: 5
        }),
        p: common_vendor.p({
          label: "\u6211\u7684\u8BA2\u5355",
          ["font-size"]: 35
        }),
        q: common_vendor.p({
          height: 50
        }),
        r: common_vendor.p({
          label: "\u5168\u90E8\u8BA2\u5355  >",
          ["font-size"]: 30
        }),
        s: common_vendor.p({
          height: 50
        }),
        t: common_vendor.p({
          width: 686,
          column: 3,
          round: 2,
          color: "blue-grey"
        }),
        v: common_vendor.p({
          color: "primary",
          ["font-size"]: 50,
          name: "tmicon-user-fill"
        }),
        w: common_vendor.p({
          label: "\u5F85\u652F\u4ED8",
          ["font-size"]: 25
        }),
        x: common_vendor.p({
          height: 150
        }),
        y: common_vendor.p({
          color: "primary",
          ["font-size"]: 50,
          name: "tmicon-user-fill"
        }),
        z: common_vendor.p({
          label: "\u5F85\u6536\u8D27",
          ["font-size"]: 25
        }),
        A: common_vendor.p({
          height: 150
        }),
        B: common_vendor.p({
          color: "primary",
          ["font-size"]: 50,
          name: "tmicon-user-fill"
        }),
        C: common_vendor.p({
          label: "\u5DF2\u7B7E\u6536",
          ["font-size"]: 25
        }),
        D: common_vendor.p({
          height: 150
        }),
        E: common_vendor.p({
          color: "primary",
          ["font-size"]: 50,
          name: "tmicon-user-fill"
        }),
        F: common_vendor.p({
          label: "\u9000\u6B3E/\u552E\u540E",
          ["font-size"]: 25
        }),
        G: common_vendor.p({
          height: 150
        }),
        H: common_vendor.p({
          width: 686,
          column: 4,
          round: 3,
          color: "blue-grey"
        }),
        I: common_vendor.p({
          margin: [30, 10],
          padding: [0, 0],
          shadow: 5,
          round: 3
        }),
        J: common_vendor.p({
          autoplay: true,
          width: 686,
          round: 3,
          height: 200,
          list: listimg,
          model: "dot"
        }),
        K: common_vendor.p({
          label: "\u66F4\u591A\u670D\u52A1",
          ["font-size"]: 35
        }),
        L: common_vendor.p({
          name: "tmicon-position-fill",
          ["font-size"]: 42
        }),
        M: common_vendor.p({
          _class: "pt-10",
          ["font-size"]: 22,
          label: "\u6536\u8D27\u5730\u5740"
        }),
        N: common_vendor.p({
          height: 120,
          url: "/pages/cart/cartContent"
        }),
        O: common_vendor.p({
          name: "tmicon-headset-fill",
          ["font-size"]: 42
        }),
        P: common_vendor.p({
          _class: "pt-10",
          ["font-size"]: 22,
          label: "\u8054\u7CFB\u5BA2\u670D"
        }),
        Q: common_vendor.p({
          height: 120
        }),
        R: common_vendor.p({
          name: "tmicon-collection-fill",
          ["font-size"]: 42
        }),
        S: common_vendor.p({
          _class: "pt-10",
          ["font-size"]: 22,
          label: "\u6211\u7684\u6536\u85CF"
        }),
        T: common_vendor.p({
          height: 120
        }),
        U: common_vendor.p({
          name: "tmicon-wind-smile",
          ["font-size"]: 42
        }),
        V: common_vendor.p({
          _class: "pt-10",
          ["font-size"]: 22,
          label: "\u6211\u7684\u8BD5\u7528"
        }),
        W: common_vendor.p({
          height: 120
        }),
        X: common_vendor.p({
          name: "tmicon-md-mail-open",
          ["font-size"]: 42
        }),
        Y: common_vendor.p({
          _class: "pt-10",
          ["font-size"]: 22,
          label: "\u6211\u7684\u9884\u7EA6"
        }),
        Z: common_vendor.p({
          height: 120
        }),
        aa: common_vendor.p({
          name: "tmicon-qrcode",
          ["font-size"]: 42
        }),
        ab: common_vendor.p({
          _class: "pt-10",
          ["font-size"]: 22,
          label: "\u6211\u7684\u76F4\u901A\u7801"
        }),
        ac: common_vendor.p({
          height: 120
        }),
        ad: common_vendor.p({
          name: "tmicon-mobile-alt",
          ["font-size"]: 42
        }),
        ae: common_vendor.p({
          _class: "pt-10",
          ["font-size"]: 22,
          label: "\u6211\u7684\u62A5\u544A"
        }),
        af: common_vendor.p({
          height: 120
        }),
        ag: common_vendor.p({
          name: "tmicon-ios-volume-high",
          ["font-size"]: 42
        }),
        ah: common_vendor.p({
          _class: "pt-10",
          ["font-size"]: 22,
          label: "\u6211\u7684\u8BDD\u9898"
        }),
        ai: common_vendor.p({
          height: 120
        }),
        aj: common_vendor.p({
          col: 4,
          width: 690,
          transprent: true
        }),
        ak: common_vendor.p({
          margin: [30, 10],
          padding: [0, 0],
          shadow: 5,
          round: 3
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/liziyang/data/vue/uni-preset-vue-vite-ts/src/pages/index/user.nvue"]]);
wx.createPage(MiniProgramPage);
