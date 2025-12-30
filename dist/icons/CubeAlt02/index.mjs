import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CubeAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CubeAlt02Icon.displayName = "CubeAlt02";
var CubeAlt02_default = CubeAlt02Icon;
export {
  CubeAlt02_default as default
};
