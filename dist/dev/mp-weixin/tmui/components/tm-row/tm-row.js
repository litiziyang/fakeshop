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
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    ...tmui_tool_lib_minxs.custom_props,
    height: {
      type: [Number, String],
      default: 0
    },
    margin: {
      type: Array,
      default: () => [0, 0]
    },
    width: {
      type: [Number, String],
      default: 0
    },
    round: {
      type: [Number, String],
      default: 0
    },
    gutter: {
      type: Number,
      default: 0
    },
    column: {
      type: Number,
      default: 10
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "center"
    },
    color: {
      type: String,
      default: "white"
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
    const width_px_rect = common_vendor.computed$1(() => props.width);
    const width_px_rect_rp = common_vendor.computed$1(() => width_px_rect.value);
    const justifyAlign = {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      around: "space-around",
      between: "space-between"
    };
    const justify_rp = common_vendor.computed$1(() => justifyAlign[props.justify] || "start");
    const AlignAlign = {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      stretch: "stretch"
    };
    const align_rp = common_vendor.computed$1(() => AlignAlign[props.align] || "start");
    common_vendor.provide("TmRowWidth", width_px_rect_rp);
    common_vendor.provide("TmRowColumn", common_vendor.computed$1(() => props.column));
    common_vendor.provide("TmRowGutter", common_vendor.computed$1(() => props.gutter));
    let textColor = common_vendor.computed$1(() => tmcomputed.value.textColor);
    common_vendor.provide("appTextColor", textColor);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => emits("click", $event)),
        b: common_vendor.n(`round-${props.round}`),
        c: common_vendor.n(common_vendor.unref(customClass)),
        d: common_vendor.n(`mx-${props.margin[0]} my-${__props.margin[1]}`),
        e: common_vendor.s({
          flexDirection: "row",
          flexWrap: "wrap"
        }),
        f: common_vendor.s(props.height ? {
          height: props.height + "rpx"
        } : ""),
        g: common_vendor.s(common_vendor.unref(width_px_rect) ? {
          width: common_vendor.unref(width_px_rect) + "rpx"
        } : ""),
        h: common_vendor.s({
          justifyContent: common_vendor.unref(justify_rp),
          alignItems: common_vendor.unref(align_rp)
        }),
        i: common_vendor.s(!props.transprent ? common_vendor.unref(tmcomputed).backgroundColorCss : ""),
        j: common_vendor.s(!props.transprent ? common_vendor.unref(tmcomputed).shadowColor : ""),
        k: common_vendor.s(common_vendor.unref(customCSSStyle))
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/liziyang/data/vue/uni-preset-vue-vite-ts/src/tmui/components/tm-row/tm-row.vue"]]);
wx.createComponent(Component);
