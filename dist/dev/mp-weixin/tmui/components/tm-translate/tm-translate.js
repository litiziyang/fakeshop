"use strict";
var common_vendor = require("../../../common/vendor.js");
var tmui_tool_lib_minxs = require("../../tool/lib/minxs.js");
require("../../tool/theme/theme.js");
require("../../tool/theme/colortool.js");
require("../../tool/lib/interface.js");
require("../../../theme/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    ...tmui_tool_lib_minxs.custom_props,
    duration: {
      type: Number,
      default: 200
    },
    delay: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: "fade"
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 0
    },
    reverse: {
      type: [Boolean, String],
      default: false
    },
    initByWechat: {
      type: Boolean,
      default: false
    }
  },
  emits: ["start", "end", "click"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    function hanlder(e) {
      emits("click", e);
    }
    const customCSSStyle = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedStyle(props));
    const customClass = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedClass(props));
    const computedHeight = common_vendor.computed$1(() => {
      if (!props.height || !Number(props.height)) {
        return 0;
      }
      if (String(props.height).indexOf("px") > -1 || String(props.height).indexOf("rpx") > -1) {
        return String(props.height);
      }
      return String(props.height) + "rpx";
    });
    const computedWidth = common_vendor.computed$1(() => {
      if (!props.width) {
        return 0;
      }
      if (String(props.width).indexOf("px") > -1 || String(props.width).indexOf("rpx") > -1) {
        return props.width;
      }
      return props.width + "rpx";
    });
    const animationName = common_vendor.computed$1(() => props.name || "fade");
    const durationtos = common_vendor.computed$1(() => props.duration);
    const computedReverse = common_vendor.computed$1(() => props.reverse);
    const reverseAniPrefxname = common_vendor.computed$1(() => computedReverse.value ? "-reverse" : "");
    const animationStatus = common_vendor.ref(0);
    const tmid = common_vendor.ref(Number(common_vendor.index.$tm.u.getUid(3)));
    const isLoadEl = common_vendor.ref(false);
    const animationData = common_vendor.ref(null);
    common_vendor.watch(() => props.initByWechat, () => {
      reset();
    });
    function init() {
      common_vendor.nextTick(() => {
        isLoadEl.value = true;
        if (props.autoPlay == true && !props.disabled) {
          play();
        }
      });
    }
    function play() {
      if (props.disabled == true)
        return;
      animationStatus.value = 0;
      noNvueAmations();
    }
    function stop() {
      if (props.disabled == true)
        return;
      clearTimeout(tmid.value);
      animationStatus.value = 0;
    }
    function reset() {
      stop();
      animationStatus.value = 0;
    }
    expose({
      init,
      play,
      stop,
      reset
    });
    common_vendor.onMounted(() => init());
    common_vendor.onUnmounted(() => {
      clearTimeout(tmid.value);
      animationStatus.value = 0;
    });
    function noNvueAmations() {
      animationData.value = null;
      common_vendor.nextTick(function() {
        var animation = common_vendor.index.createAnimation({
          duration: durationtos.value,
          timingFunction: "ease",
          delay: 30
        });
        clearTimeout(tmid.value);
        if (animationName.value == "fade") {
          let opacity = computedReverse.value ? 1 : 0;
          animation.opacity(opacity).step({
            duration: 0
          });
        } else if (animationName.value == "up") {
          let opacity = computedReverse.value ? "-101%" : "0%";
          animation.translateY(opacity).step({
            duration: 0
          });
        } else if (animationName.value == "down") {
          let opacity = computedReverse.value ? "101%" : "0%";
          animation.translateY(opacity).step({
            duration: 0
          });
        } else if (animationName.value == "left") {
          let opacity = computedReverse.value ? "-101%" : "0%";
          animation.translateX(opacity).step({
            duration: 0
          });
        } else if (animationName.value == "right") {
          let opacity = computedReverse.value ? "101%" : "0";
          animation.translateX(opacity).step({
            duration: 0
          });
        } else if (animationName.value == "zoom") {
          let scale = computedReverse.value ? [1, 1] : [0.7, 0.7];
          let opacity = computedReverse.value ? 1 : 0;
          animation.scale(...scale).opacity(opacity).step({
            duration: 0
          });
        }
        animationData.value = animation.export();
        let detalTime = 40;
        detalTime = 80;
        tmid.value = setTimeout(function() {
          if (animationName.value == "fade") {
            let opacity = computedReverse.value ? 0 : 1;
            animation.opacity(opacity).step();
          } else if (animationName.value == "up") {
            let opacity = computedReverse.value ? "0%" : "-101%";
            animation.translateY(opacity).step();
          } else if (animationName.value == "down") {
            let opacity = computedReverse.value ? "0%" : "101%";
            animation.translateY(opacity).step();
          } else if (animationName.value == "left") {
            let opacity = computedReverse.value ? "0%" : "-101%";
            animation.translateX(opacity).step();
          } else if (animationName.value == "right") {
            let opacity = computedReverse.value ? "0" : "101%";
            animation.translateX(opacity).step();
          } else if (animationName.value == "zoom") {
            let scale = computedReverse.value ? [0.7, 0.7] : [1, 1];
            let opacity = computedReverse.value ? 0 : 1;
            animation.scale(...scale).opacity(opacity).step();
          }
          emits("start");
          animationData.value = animation.export();
          animationStatus.value = 1;
          clearTimeout(tmid.value);
          tmid.value = setTimeout(function() {
            emits("end");
            animationStatus.value = 2;
          }, durationtos.value);
        }, detalTime);
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isLoadEl.value
      }, isLoadEl.value ? {
        b: animationData.value,
        c: common_vendor.n(common_vendor.unref(animationName) + common_vendor.unref(reverseAniPrefxname)),
        d: common_vendor.n(common_vendor.unref(customClass))
      } : {}, {
        e: common_vendor.o(hanlder),
        f: common_vendor.n(common_vendor.unref(customClass)),
        g: common_vendor.s(common_vendor.unref(computedHeight) ? {
          height: common_vendor.unref(computedHeight)
        } : ""),
        h: common_vendor.s(common_vendor.unref(computedWidth) ? {
          width: common_vendor.unref(computedWidth)
        } : ""),
        i: common_vendor.s(common_vendor.unref(customCSSStyle))
      });
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-155cc8af"], ["__file", "/Users/liziyang/data/vue/uni-preset-vue-vite-ts/src/tmui/components/tm-translate/tm-translate.vue"]]);
wx.createComponent(Component);
