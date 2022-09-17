"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_tm_carousel2 = common_vendor.resolveComponent("tm-carousel");
  const _easycom_tm_roll_notice2 = common_vendor.resolveComponent("tm-roll-notice");
  const _easycom_tm_sheet2 = common_vendor.resolveComponent("tm-sheet");
  const _easycom_tm_icon2 = common_vendor.resolveComponent("tm-icon");
  const _easycom_tm_text2 = common_vendor.resolveComponent("tm-text");
  const _easycom_tm_col2 = common_vendor.resolveComponent("tm-col");
  const _easycom_tm_row2 = common_vendor.resolveComponent("tm-row");
  const _easycom_tm_grid_item2 = common_vendor.resolveComponent("tm-grid-item");
  const _easycom_tm_grid2 = common_vendor.resolveComponent("tm-grid");
  const _easycom_tm_image2 = common_vendor.resolveComponent("tm-image");
  const _easycom_tm_tabs2 = common_vendor.resolveComponent("tm-tabs");
  const _easycom_tm_waterfall_item2 = common_vendor.resolveComponent("tm-waterfall-item");
  const _easycom_tm_waterfall2 = common_vendor.resolveComponent("tm-waterfall");
  const _easycom_tm_sticky2 = common_vendor.resolveComponent("tm-sticky");
  const _easycom_tm_app2 = common_vendor.resolveComponent("tm-app");
  (_easycom_tm_carousel2 + _easycom_tm_roll_notice2 + _easycom_tm_sheet2 + _easycom_tm_icon2 + _easycom_tm_text2 + _easycom_tm_col2 + _easycom_tm_row2 + _easycom_tm_grid_item2 + _easycom_tm_grid2 + _easycom_tm_image2 + _easycom_tm_tabs2 + _easycom_tm_waterfall_item2 + _easycom_tm_waterfall2 + _easycom_tm_sticky2 + _easycom_tm_app2)();
}
const _easycom_tm_carousel = () => "../../tmui/components/tm-carousel/tm-carousel.js";
const _easycom_tm_roll_notice = () => "../../tmui/components/tm-roll-notice/tm-roll-notice.js";
const _easycom_tm_sheet = () => "../../tmui/components/tm-sheet/tm-sheet.js";
const _easycom_tm_icon = () => "../../tmui/components/tm-icon/tm-icon.js";
const _easycom_tm_text = () => "../../tmui/components/tm-text/tm-text.js";
const _easycom_tm_col = () => "../../tmui/components/tm-col/tm-col.js";
const _easycom_tm_row = () => "../../tmui/components/tm-row/tm-row.js";
const _easycom_tm_grid_item = () => "../../tmui/components/tm-grid-item/tm-grid-item.js";
const _easycom_tm_grid = () => "../../tmui/components/tm-grid/tm-grid.js";
const _easycom_tm_image = () => "../../tmui/components/tm-image/tm-image.js";
const _easycom_tm_tabs = () => "../../tmui/components/tm-tabs/tm-tabs.js";
const _easycom_tm_waterfall_item = () => "../../tmui/components/tm-waterfall-item/tm-waterfall-item.js";
const _easycom_tm_waterfall = () => "../../tmui/components/tm-waterfall/tm-waterfall.js";
const _easycom_tm_sticky = () => "../../tmui/components/tm-sticky/tm-sticky.js";
const _easycom_tm_app = () => "../../tmui/components/tm-app/tm-app.js";
if (!Math) {
  (_easycom_tm_carousel + _easycom_tm_roll_notice + _easycom_tm_sheet + _easycom_tm_icon + _easycom_tm_text + _easycom_tm_col + _easycom_tm_row + _easycom_tm_grid_item + _easycom_tm_grid + _easycom_tm_image + _easycom_tm_tabs + _easycom_tm_waterfall_item + _easycom_tm_waterfall + _easycom_tm_sticky + _easycom_tm_app)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    common_vendor.ref(false);
    common_vendor.onLoad((options) => {
    });
    const mess = common_vendor.ref(["\u6211\u662F\u6EDA\u52A8\u680F"]);
    const listimg = [
      "https://picsum.photos/200/300?id=43335",
      "https://picsum.photos/200/300?id=433",
      "https://picsum.photos/200/300?id=439",
      "https://picsum.photos/200/300?id=459"
    ];
    const tests = [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300?id=666",
      "https://picsum.photos/200/300?id=022"
    ];
    const tabsTitle = common_vendor.ref([
      { key: "1", title: "\u9009\u98791", icon: "tmicon-ios-leaf" },
      { key: "2", title: "\u9009\u98792", icon: "tmicon-ios-umbrella" },
      { key: "3", title: "\u9009\u98793", dot: true, dotColor: "yellow", icon: "tmicon-ios-rocket" },
      { key: "4", title: "\u9009\u98794", dot: false, count: "3", icon: "tmicon-ios-partly-sunny" },
      { key: "5", title: "\u9009\u98795", dot: false, count: "3", icon: "tmicon-ios-partly-sunny" },
      { key: "6", title: "\u9009\u98796", dot: false, count: "3", icon: "tmicon-ios-partly-sunny" }
    ]);
    function tabschange(key) {
      console.log(key);
    }
    const imglist = common_vendor.ref([]);
    for (let i = 0; i < 21; i++) {
      imglist.value.push({
        img: `https://picsum.photos/${Math.ceil(200 + Math.random() * 100)}/${Math.ceil(200 + Math.random() * 100)}?id=${i}`,
        text: "\u6587\u5B57_" + i
      });
    }
    const offset = common_vendor.ref(0);
    offset.value = 0;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          autoplay: true,
          width: 686,
          round: 3,
          height: 280,
          list: listimg,
          model: "dot"
        }),
        b: common_vendor.p({
          margin: [0, 0],
          list: mess.value,
          color: "blue",
          fontSize: 25,
          fontColor: _ctx.red
        }),
        c: common_vendor.p({
          margin: [30, 10],
          padding: [0, 0],
          transprent: true,
          shadow: 5
        }),
        d: common_vendor.p({
          name: "tmicon-heart-fill",
          ["font-size"]: 20
        }),
        e: common_vendor.p({
          _class: "pt-10",
          ["font-size"]: 20,
          label: "\u6B63\u54C1\u4FDD\u8BC1"
        }),
        f: common_vendor.p({
          transprent: true,
          align: "start"
        }),
        g: common_vendor.p({
          name: "tmicon-heart-fill",
          ["font-size"]: 20
        }),
        h: common_vendor.p({
          _class: "pt-10",
          ["font-size"]: 20,
          label: "\u5DE5\u5382\u76F4\u8FBE"
        }),
        i: common_vendor.p({
          transprent: true,
          align: "center"
        }),
        j: common_vendor.p({
          name: "tmicon-heart-fill",
          ["font-size"]: 20
        }),
        k: common_vendor.p({
          _class: "pt-10",
          ["font-size"]: 20,
          label: "\u4EA7\u54C1\u6EAF\u6E90"
        }),
        l: common_vendor.p({
          transprent: true,
          align: "end"
        }),
        m: common_vendor.p({
          margin: [20, 0],
          width: 650,
          column: 3,
          color: "blue-grey",
          gutter: 5,
          height: 50
        }),
        n: common_vendor.p({
          name: "tmicon-heart-fill",
          ["font-size"]: 42
        }),
        o: common_vendor.p({
          _class: "pt-10",
          ["font-size"]: 22,
          label: "\u6D4B\u8BD5"
        }),
        p: common_vendor.p({
          height: 120,
          url: "/pages/cart/cartContent"
        }),
        q: common_vendor.p({
          name: "tmicon-heart-fill",
          ["font-size"]: 42
        }),
        r: common_vendor.p({
          _class: "pt-10",
          ["font-size"]: 22,
          label: "\u6D4B\u8BD5"
        }),
        s: common_vendor.p({
          height: 120
        }),
        t: common_vendor.p({
          name: "tmicon-heart-fill",
          ["font-size"]: 42
        }),
        v: common_vendor.p({
          _class: "pt-10",
          ["font-size"]: 22,
          label: "\u6D4B\u8BD5"
        }),
        w: common_vendor.p({
          height: 120
        }),
        x: common_vendor.p({
          name: "tmicon-heart-fill",
          ["font-size"]: 42
        }),
        y: common_vendor.p({
          _class: "pt-10",
          ["font-size"]: 22,
          label: "\u6D4B\u8BD5"
        }),
        z: common_vendor.p({
          height: 120
        }),
        A: common_vendor.p({
          name: "tmicon-heart-fill",
          ["font-size"]: 42
        }),
        B: common_vendor.p({
          _class: "pt-10",
          ["font-size"]: 22,
          label: "\u6D4B\u8BD5"
        }),
        C: common_vendor.p({
          height: 120
        }),
        D: common_vendor.p({
          name: "tmicon-heart-fill",
          ["font-size"]: 42
        }),
        E: common_vendor.p({
          _class: "pt-10",
          ["font-size"]: 22,
          label: "\u6D4B\u8BD5"
        }),
        F: common_vendor.p({
          height: 120
        }),
        G: common_vendor.p({
          name: "tmicon-heart-fill",
          ["font-size"]: 42
        }),
        H: common_vendor.p({
          _class: "pt-10",
          ["font-size"]: 22,
          label: "\u6D4B\u8BD5"
        }),
        I: common_vendor.p({
          height: 120
        }),
        J: common_vendor.p({
          name: "tmicon-heart-fill",
          ["font-size"]: 42
        }),
        K: common_vendor.p({
          _class: "pt-10",
          ["font-size"]: 22,
          label: "\u6D4B\u8BD5"
        }),
        L: common_vendor.p({
          height: 120
        }),
        M: common_vendor.p({
          col: 4,
          width: 690,
          transprent: true
        }),
        N: common_vendor.p({
          src: "https://picsum.photos/200/300",
          width: 686,
          height: 200,
          round: 3
        }),
        O: common_vendor.p({
          autoplay: true,
          round: 4,
          width: 200,
          height: 300,
          list: tests,
          model: "dot"
        }),
        P: common_vendor.p({
          autoplay: true,
          round: 4,
          width: 200,
          height: 300,
          list: tests,
          model: "dot"
        }),
        Q: common_vendor.p({
          ["font-size"]: 22,
          label: "\u6D4B\u8BD5\u8BF7\u70B9\u51FB\u6211"
        }),
        R: common_vendor.p({
          autoplay: true,
          round: 4,
          width: 100,
          height: 120,
          list: tests
        }),
        S: common_vendor.p({
          autoplay: true,
          round: 4,
          width: 100,
          height: 120,
          list: tests
        }),
        T: common_vendor.p({
          autoplay: true,
          round: 4,
          width: 100,
          height: 120,
          list: tests
        }),
        U: common_vendor.p({
          autoplay: true,
          round: 4,
          width: 100,
          height: 120,
          list: tests
        }),
        V: common_vendor.p({
          margin: [30, 10],
          padding: [0, 0],
          transprent: true,
          shadow: 5
        }),
        W: common_vendor.p({
          src: "https://picsum.photos/200/300",
          width: 686,
          height: 200,
          round: 3
        }),
        X: common_vendor.p({
          width: 200,
          height: 300,
          round: 3,
          src: "https://picsum.photos/200/300?id=022"
        }),
        Y: common_vendor.p({
          width: 200,
          height: 300,
          round: 3,
          src: "https://picsum.photos/200/300?id=022"
        }),
        Z: common_vendor.p({
          width: 200,
          height: 300,
          round: 3,
          src: "https://picsum.photos/200/300?id=022"
        }),
        aa: common_vendor.p({
          margin: [30, 10],
          padding: [0, 0],
          shadow: 5,
          round: "3"
        }),
        ab: common_vendor.o(tabschange),
        ac: common_vendor.p({
          showTabsLineAni: true,
          list: tabsTitle.value,
          ["item-width"]: 110,
          swiper: true,
          width: 686,
          height: 200,
          ["default-name"]: "1"
        }),
        ad: common_vendor.p({
          margin: [0, 0],
          padding: [0, 0],
          shadow: 5,
          width: 686,
          round: "3"
        }),
        ae: common_vendor.f(imglist.value, (item, index, i0) => {
          return {
            a: "4b3c039a-59-" + i0 + "," + ("4b3c039a-58-" + i0),
            b: common_vendor.p({
              label: item.text
            }),
            c: "4b3c039a-58-" + i0 + ",4b3c039a-57",
            d: common_vendor.p({
              img: item.img
            })
          };
        }),
        af: common_vendor.p({
          width: 626,
          gutter: "30"
        }),
        ag: common_vendor.p({
          offset: offset.value
        }),
        ah: common_vendor.p({
          margin: [30, 10],
          padding: [0, 0],
          shadow: 5,
          round: "3"
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/liziyang/data/vue/uni-preset-vue-vite-ts/src/pages/index/index.nvue"]]);
wx.createPage(MiniProgramPage);
