import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const UmbrellaAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
UmbrellaAlt02Icon.displayName = "UmbrellaAlt02";
var UmbrellaAlt02_default = UmbrellaAlt02Icon;
export {
  UmbrellaAlt02_default as default
};
