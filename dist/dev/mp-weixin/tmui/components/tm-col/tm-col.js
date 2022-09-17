"use strict";
var common_vendor = require("../../../common/vendor.js");
var tmui_tool_lib_minxs = require("../../tool/lib/minxs.js");
var tmui_tool_lib_tmpinia = require("../../tool/lib/tmpinia.js");
require("../../tool/theme/theme.js");
require("../../tool/theme/colortool.js");
require("../../tool/lib/interface.js");
require("../../../theme/index.js");
require("../../tool/function/util.js");
require("../../tool/function/preview.js");
var justifyAlign = /* @__PURE__ */ ((justifyAlign2) => {
  justifyAlign2["start"] = "flex-start";
  justifyAlign2["end"] = "flex-end";
  justifyAlign2["center"] = "center";
  return justifyAlign2;
})(justifyAlign || {});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    ...tmui_tool_lib_minxs.custom_props,
    height: {
      type: [Number, String],
      default: 50
    },
    color: {
      type: String,
      default: "white"
    },
    transprent: {
      type: [Boolean, String],
      default: false
    },
    align: {
      type: String,
      default: "center"
    }
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const store = tmui_tool_lib_tmpinia.useTmpiniaStore();
    const tmcfg = common_vendor.computed$1(() => store.tmStore);
    const customCSSStyle = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedStyle(props));
    const customClass = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedClass(props));
    const isDark = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedDark(props, tmcfg.value));
    const tmcomputed = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedTheme(props, isDark.value, tmcfg.value));
    const TmRowWidth = common_vendor.inject("TmRowWidth", common_vendor.computed$1(() => 0));
    const TmRowColumn = common_vendor.inject("TmRowColumn", common_vendor.computed$1(() => 0));
    const TmRowGutter = common_vendor.inject("TmRowGutter", common_vendor.computed$1(() => 0));
    const colWidth = common_vendor.computed$1(() => {
      if (TmRowWidth.value == 0)
        return 0;
      return TmRowWidth.value / TmRowColumn.value;
    });
    const alignComputed = common_vendor.computed$1(() => justifyAlign[props.align]);
    let textColor = common_vendor.computed$1(() => tmcomputed.value.textColor);
    common_vendor.provide("appTextColor", textColor);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.s(common_vendor.unref(TmRowGutter) ? {
          marginLeft: `${common_vendor.unref(TmRowGutter)}rpx`,
          marginRight: `${common_vendor.unref(TmRowGutter)}rpx`
        } : ""),
        b: common_vendor.s(props.height ? {
          height: props.height + "rpx"
        } : ""),
        c: common_vendor.s(!__props.transprent ? common_vendor.unref(tmcomputed).backgroundColorCss : ""),
        d: common_vendor.s({
          alignItems: common_vendor.unref(alignComputed),
          justifyContent: "center"
        }),
        e: common_vendor.s(common_vendor.unref(customCSSStyle)),
        f: common_vendor.n(common_vendor.unref(customClass)),
        g: common_vendor.o(($event) => emits("click", $event)),
        h: common_vendor.n(common_vendor.unref(colWidth) ? "" : "flex-1"),
        i: common_vendor.s(common_vendor.unref(colWidth) ? {
          width: common_vendor.unref(colWidth) + "rpx"
        } : "")
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/liziyang/data/vue/uni-preset-vue-vite-ts/src/tmui/components/tm-col/tm-col.vue"]]);
wx.createComponent(Component);
