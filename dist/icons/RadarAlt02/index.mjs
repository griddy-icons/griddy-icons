import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const RadarAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
RadarAlt02Icon.displayName = "RadarAlt02";
var RadarAlt02_default = RadarAlt02Icon;
export {
  RadarAlt02_default as default
};
