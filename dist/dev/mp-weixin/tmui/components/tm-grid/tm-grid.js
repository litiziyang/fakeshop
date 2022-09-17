"use strict";
var common_vendor = require("../../../common/vendor.js");
var tmui_tool_lib_minxs = require("../../tool/lib/minxs.js");
require("../../tool/theme/theme.js");
require("../../tool/theme/colortool.js");
require("../../tool/lib/interface.js");
require("../../../theme/index.js");
if (!Math) {
  tmSheet();
}
const tmSheet = () => "../tm-sheet/tm-sheet.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    ...tmui_tool_lib_minxs.custom_props,
    round: {
      type: Number,
      default: 2
    },
    width: {
      type: Number,
      default: 750
    },
    col: {
      type: Number,
      default: 5
    },
    showBorder: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "white"
    },
    transprent: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    let _cachList = common_vendor.ref([]);
    const _colWidth = common_vendor.computed$1(() => Math.ceil(props.width / props.col - 1));
    common_vendor.provide("tmGridItemWidth", _colWidth.value + (props.showBorder ? 1 : 0));
    common_vendor.provide("tmGridshowBorder", common_vendor.computed$1(() => props.showBorder));
    common_vendor.provide("tmGridshowCachList", common_vendor.computed$1(() => _cachList.value));
    function pushKey(e) {
      let index = _cachList.value.findIndex((el) => el.id == e.id);
      if (index == -1) {
        _cachList.value.push(e);
      } else {
        _cachList.value.splice(index, 1, e);
      }
      setIndexType();
    }
    function delKey(e) {
      _cachList.value.findIndex((el) => el.id == e.id);
      setIndexType();
    }
    function setIndexType() {
      let totallen = _cachList.value.length;
      _cachList.value = _cachList.value.map((el, index) => {
        let aIndex = index + 1;
        if (aIndex <= props.col) {
          el.type = 4;
          if (aIndex == totallen && totallen == 1 || aIndex == 1) {
            el.type = 1;
          }
        } else {
          if (aIndex % props.col == 1) {
            el.type = 3;
          } else {
            el.type = 2;
          }
        }
        return el;
      });
    }
    expose({
      pushKey,
      delKey,
      keyName: "tmGrid"
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          round: props.round,
          width: props.width,
          transprent: props.transprent,
          color: props.color,
          margin: [0, 0],
          padding: [0, 0],
          _class: "flex flex-row flex-row-top-start",
          contStyle: "flex-wrap:wrap;"
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/liziyang/data/vue/uni-preset-vue-vite-ts/src/tmui/components/tm-grid/tm-grid.vue"]]);
wx.createComponent(Component);
