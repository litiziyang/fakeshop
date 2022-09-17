"use strict";
var tmui_tool_theme_theme = require("../theme/theme.js");
var tmui_tool_lib_interface = require("./interface.js");
const custom_props = {
  _style: {
    type: [Array, String, Object],
    default: () => []
  },
  _class: {
    type: [Array, String],
    default: ""
  },
  color: {
    type: String,
    default: "primary"
  },
  followTheme: {
    type: [Boolean, String],
    default: false
  },
  dark: {
    type: [Boolean, String],
    default: false
  },
  followDark: {
    type: [Boolean, String],
    default: true
  },
  round: {
    type: [Number],
    default: 0
  },
  shadow: {
    type: [Number],
    default: 0
  },
  outlined: {
    type: [Boolean],
    default: false
  },
  border: {
    type: [Number],
    default: 0
  },
  borderStyle: {
    type: [String],
    default: tmui_tool_lib_interface.borderStyle.solid,
    validator: (value) => {
      let mp = ["dashed", "dotted", "solid"];
      if (!mp.includes(value)) {
        console.error("\u8FB9\u7EBF\u7C7B\u578B\u53EA\u80FD\u4E3AborderStyle\u4E2D\u7684\u4E00\u79CD\u3002");
      }
      return mp.includes(value);
    }
  },
  borderDirection: {
    type: String,
    default: tmui_tool_lib_interface.cssDirection.all,
    validator: (value) => {
      let mp = ["all", "bottom", "bottomleft", "bottomright", "left", "leftright", "right", "right", "top", "topbottom", "topleft", "topright", "x", "y"];
      if (!mp.includes(value)) {
        console.error("\u8FB9\u7EBF\u65B9\u5411\u683C\u5F0F\u53EA\u80FD\u4E3AcssDirection\u4E2D\u7684\u4E00\u79CD\u3002");
      }
      return mp.includes(value);
    }
  },
  text: {
    type: [Boolean, String],
    default: false
  },
  transprent: {
    type: [Boolean, String],
    default: true
  },
  linear: {
    type: [String],
    default: tmui_tool_lib_interface.linearDirection.none,
    validator: (value) => {
      let mp = ["left", "right", "bottom", "top", ""];
      if (!mp.includes(value)) {
        console.error("\u6E10\u53D8\u65B9\u5411\u53EA\u80FD\u4E3A,left:\u53F3->\u5DE6\uFF0Cright:\u5DE6->\u53F3\u3002top:\u4E0B->\u4E0A\uFF0Cbottom:\u4E0A->\u4E0B,\u4E2D\u7684\u4E00\u79CD\u3002");
      }
      return mp.includes(value);
    }
  },
  linearDeep: {
    type: [String],
    default: tmui_tool_lib_interface.linearDeep.light,
    validator: (value) => {
      let mp = ["accent", "dark", "light"];
      if (!mp.includes(value)) {
        console.error("\u6E10\u53D8\u65B9\u5411\u53EA\u80FD\u4E3Alight,dark,accent\u4E2D\u7684\u4E00\u79CD\u3002");
      }
      return mp.includes(value);
    }
  },
  isDisabledRoundAndriod: {
    type: [Boolean, String],
    default: false
  },
  blur: {
    type: Boolean,
    default: false
  }
};
const computedDark = (props, tmcfg) => {
  const followDark = props.followDark;
  const dark = props.dark;
  const glboalDark = tmcfg.dark;
  if (followDark) {
    return glboalDark;
  }
  return dark;
};
const computedClass = (props) => {
  const _class = props._class;
  if (typeof _class == "string") {
    return _class;
  }
  if (Array.isArray(_class)) {
    return _class.join(" ");
  }
  return "";
};
const computedStyle = (props) => {
  const _style = props._style;
  if (typeof _style == "string") {
    let p = _style.split(";");
    let k = p.map((el) => {
      el = el.replace(";", "");
      let node = {};
      let idx = el.split(":");
      node[idx[0]] = idx[1];
      return node;
    });
    let kl = {};
    k.forEach((el) => {
      kl = { ...kl, ...el };
    });
    return kl;
  }
  if (typeof _style == "object" && !Array.isArray(_style)) {
    return _style;
  }
  if (typeof _style == "object" && Array.isArray(_style)) {
    let kl = {};
    _style.forEach((el) => {
      kl = { ...kl, ...el };
    });
    return kl;
  }
  return {};
};
const computedTheme = (props, dark, store) => {
  const color = props.color;
  const border = props.border;
  const shadow = props.shadow;
  const round = props.round;
  const outlined = props.outlined;
  const text = props.text;
  const borderStyle2 = props.borderStyle;
  const borderDirection = props.borderDirection;
  const linear = props.linear;
  const linearDeep2 = props.linearDeep;
  const blur = props.blur;
  if (tmui_tool_theme_theme.theme.isCssColor(color)) {
    console.error("\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E0A\u7684\u989C\u8272\u503C\uFF0C\u8BF7\u5728theme/theme.js\u4E2D\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7684\u989C\u8272\u503C\u4E3A\u4E3B\u9898\u3002\u5F53\u524D\u5DF2\u5207\u6362\u4E3Aprimary\u4E3B\u9898\u3002");
  }
  let defaultColorName = color || "primary";
  if ((props == null ? void 0 : props.followTheme) == true && store.color) {
    defaultColorName = store.color;
  }
  var theme = new tmui_tool_theme_theme.theme.themeColors(store.colorList);
  let c = theme.getTheme({
    colorname: defaultColorName,
    dark,
    borderWidth: border,
    shadow: parseInt(String(shadow)),
    round: parseInt(String(round)),
    outlined: outlined ? true : false,
    text: text ? true : false,
    borderStyle: borderStyle2,
    borderDirection,
    linearDirection: linear,
    linearDeep: linearDeep2,
    blur
  });
  return c;
};
exports.computedClass = computedClass;
exports.computedDark = computedDark;
exports.computedStyle = computedStyle;
exports.computedTheme = computedTheme;
exports.custom_props = custom_props;
