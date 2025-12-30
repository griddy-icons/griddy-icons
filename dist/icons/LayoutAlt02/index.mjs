import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LayoutAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LayoutAlt02Icon.displayName = "LayoutAlt02";
var LayoutAlt02_default = LayoutAlt02Icon;
export {
  LayoutAlt02_default as default
};
