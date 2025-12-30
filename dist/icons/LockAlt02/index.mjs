import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LockAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LockAlt02Icon.displayName = "LockAlt02";
var LockAlt02_default = LockAlt02Icon;
export {
  LockAlt02_default as default
};
