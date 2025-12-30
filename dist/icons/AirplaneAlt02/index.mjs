import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AirplaneAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AirplaneAlt02Icon.displayName = "AirplaneAlt02";
var AirplaneAlt02_default = AirplaneAlt02Icon;
export {
  AirplaneAlt02_default as default
};
