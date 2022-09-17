"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_tm_text2 = common_vendor.resolveComponent("tm-text");
  const _easycom_tm_sheet2 = common_vendor.resolveComponent("tm-sheet");
  const _component_list = common_vendor.resolveComponent("list");
  const _easycom_tm_carousel2 = common_vendor.resolveComponent("tm-carousel");
  const _easycom_tm_image2 = common_vendor.resolveComponent("tm-image");
  const _easycom_tm_tag2 = common_vendor.resolveComponent("tm-tag");
  const _easycom_tm_app2 = common_vendor.resolveComponent("tm-app");
  (_easycom_tm_text2 + _easycom_tm_sheet2 + _component_list + _easycom_tm_carousel2 + _easycom_tm_image2 + _easycom_tm_tag2 + _easycom_tm_app2)();
}
const _easycom_tm_text = () => "../../tmui/components/tm-text/tm-text.js";
const _easycom_tm_sheet = () => "../../tmui/components/tm-sheet/tm-sheet.js";
const _easycom_tm_carousel = () => "../../tmui/components/tm-carousel/tm-carousel.js";
const _easycom_tm_image = () => "../../tmui/components/tm-image/tm-image.js";
const _easycom_tm_tag = () => "../../tmui/components/tm-tag/tm-tag.js";
const _easycom_tm_app = () => "../../tmui/components/tm-app/tm-app.js";
if (!Math) {
  (_easycom_tm_text + _easycom_tm_sheet + _easycom_tm_carousel + _easycom_tm_image + _easycom_tm_tag + _easycom_tm_app)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const classId = common_vendor.ref("0");
    const classes = [
      { "name": "\u4E2A\u4EBA\u62A4\u7406", "id": "0" },
      { "name": "\u808C\u80A4\u62A4\u7406", "id": "1" },
      { "name": "\u4E2A\u4EBA\u62A4\u7406", "id": "2" },
      { "name": "\u7537\u58EB\u4E13\u533A", "id": "3" },
      { "name": "\u9999\u6C34\u9999\u6C1B", "id": "4" }
    ];
    function changeClassId(id) {
      classId.value = id;
    }
    const listimg = [
      "https://picsum.photos/200/300?id=43335",
      "https://picsum.photos/200/300?id=433",
      "https://picsum.photos/200/300?id=439",
      "https://picsum.photos/200/300?id=459"
    ];
    const commodities = [
      { "main_image": "https://picsum.photos/200/300?id=43335", "name": "\u5546\u54C11" },
      { "main_image": "https://picsum.photos/200/300?id=43335", "name": "\u5546\u54C12" },
      { "main_image": "https://picsum.photos/200/300?id=43335", "name": "\u5546\u54C13" },
      { "main_image": "https://picsum.photos/200/300?id=43335", "name": "\u5546\u54C14" },
      { "main_image": "https://picsum.photos/200/300?id=43335", "name": "\u5546\u54C15" },
      { "main_image": "https://picsum.photos/200/300?id=43335", "name": "\u5546\u54C16" },
      { "main_image": "https://picsum.photos/200/300?id=43335", "name": "\u5546\u54C17" }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          label: "-",
          color: "grey-5"
        }),
        b: common_vendor.p({
          width: 150,
          transprent: true,
          margin: [0, 0]
        }),
        c: common_vendor.f(classes, (item, index, i0) => {
          return {
            a: "1105a208-5-" + i0 + "," + ("1105a208-4-" + i0),
            b: common_vendor.p({
              label: item.name
            }),
            c: common_vendor.o(($event) => changeClassId(item.id)),
            d: index,
            e: "1105a208-4-" + i0 + ",1105a208-3",
            f: common_vendor.p({
              margin: [0, 0],
              width: 160,
              transprent: item.id != classId.value
            })
          };
        }),
        d: common_vendor.p({
          autoplay: true,
          round: 3,
          width: 536,
          height: 130,
          list: listimg,
          model: "dot"
        }),
        e: common_vendor.f(commodities, (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => _ctx.toCommodity(item)),
            b: "1105a208-8-" + i0 + "," + ("1105a208-7-" + i0),
            c: common_vendor.p({
              src: item.main_image,
              width: 180,
              height: 180
            }),
            d: common_vendor.o(($event) => _ctx.toCommodity(item)),
            e: "1105a208-10-" + i0 + "," + ("1105a208-9-" + i0),
            f: common_vendor.p({
              label: item.name
            }),
            g: "1105a208-11-" + i0 + "," + ("1105a208-9-" + i0),
            h: "1105a208-9-" + i0 + "," + ("1105a208-7-" + i0),
            i: "1105a208-7-" + i0 + ",1105a208-0",
            j: index
          };
        }),
        f: common_vendor.p({
          color: "green",
          size: "xs",
          label: "\u9009\u89C4\u683C"
        }),
        g: common_vendor.p({
          padding: [0, 0],
          margin: [0, 0],
          width: 300
        }),
        h: common_vendor.p({
          margin: [0, 0]
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/liziyang/data/vue/uni-preset-vue-vite-ts/src/pages/classification/list.nvue"]]);
wx.createPage(MiniProgramPage);
