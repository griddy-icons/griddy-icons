import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LockOpenAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LockOpenAlt02Icon.displayName = "LockOpenAlt02";
var LockOpenAlt02_default = LockOpenAlt02Icon;
export {
  LockOpenAlt02_default as default
};
