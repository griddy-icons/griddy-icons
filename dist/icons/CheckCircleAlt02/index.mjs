import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CheckCircleAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CheckCircleAlt02Icon.displayName = "CheckCircleAlt02";
var CheckCircleAlt02_default = CheckCircleAlt02Icon;
export {
  CheckCircleAlt02_default as default
};
