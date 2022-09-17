"use strict";
var common_vendor = require("../../../common/vendor.js");
var tmui_tool_lib_minxs = require("../../tool/lib/minxs.js");
require("../../tool/theme/theme.js");
require("../../tool/theme/colortool.js");
require("../../tool/lib/interface.js");
require("../../../theme/index.js");
if (!Math) {
  (tmIcon + tmText + tmSheet)();
}
const tmSheet = () => "../tm-sheet/tm-sheet.js";
const tmIcon = () => "../tm-icon/tm-icon.js";
const tmText = () => "../tm-text/tm-text.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    ...tmui_tool_lib_minxs.custom_props,
    margin: {
      type: Array,
      default: () => [32, 24]
    },
    transprent: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number,
      default: 726
    },
    height: {
      type: Number,
      default: 70
    },
    fontSize: {
      type: Number,
      default: 26
    },
    color: {
      type: String,
      default: "primary"
    },
    fontColor: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "tmicon-info-circle"
    },
    showRight: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Number,
      default: 0
    },
    list: {
      type: [Array, String],
      default: () => ""
    },
    duration: {
      type: Number,
      default: 10
    },
    border: {
      type: Number,
      default: 0
    }
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const _icon = common_vendor.computed$1(() => props.icon);
    const _list = common_vendor.computed$1(() => {
      if (typeof props.list === "string") {
        return [props.list];
      }
      if (Array.isArray(props.list)) {
        return props.list;
      }
      return [];
    });
    const _duration = common_vendor.computed$1(() => props.duration);
    const _width = common_vendor.computed$1(() => props.width - props.margin[0] * 2 - 24);
    const _Left = common_vendor.computed$1(() => {
      if (_icon.value !== "") {
        return _width.value - 124;
      }
      return _width.value - 84;
    });
    const isNvue = common_vendor.ref(false);
    common_vendor.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(_icon)
      }, common_vendor.unref(_icon) ? {
        b: common_vendor.p({
          ["font-size"]: 28,
          name: common_vendor.unref(_icon)
        })
      } : {}, {
        c: common_vendor.f(common_vendor.unref(_list), (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => emits("click", index)),
            b: "55f8dc2f-2-" + i0 + ",55f8dc2f-0",
            c: common_vendor.p({
              _class: "pl-24 nowrap",
              ["font-size"]: props.fontSize,
              color: props.fontColor,
              label: item
            }),
            d: index
          };
        }),
        d: common_vendor.unref(_duration) + "s",
        e: (isNvue.value ? 0 : common_vendor.unref(_Left)) + "rpx",
        f: common_vendor.unref(_Left) * __props.list.length + "rpx",
        g: props.showRight
      }, props.showRight ? {
        h: common_vendor.p({
          ["font-size"]: 24,
          name: "tmicon-angle-right"
        })
      } : {}, {
        i: common_vendor.p({
          margin: props.margin,
          padding: [24, 0],
          width: common_vendor.unref(_width),
          height: props.height,
          color: props.color,
          _style: props._style,
          followTheme: props.followTheme,
          dark: props.dark,
          round: props.round,
          shadow: props.shadow,
          outlined: props.outlined,
          border: props.border,
          borderStyle: props.borderStyle,
          borderDirection: props.borderDirection,
          text: props.text,
          transprent: props.transprent,
          linear: props.linear,
          linearDeep: props.linearDeep,
          _class: "flex flex-row flex-between"
        })
      });
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-55f8dc2f"], ["__file", "/Users/liziyang/data/vue/uni-preset-vue-vite-ts/src/tmui/components/tm-roll-notice/tm-roll-notice.vue"]]);
wx.createComponent(Component);
