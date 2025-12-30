import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LockOpenIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LockOpenIcon.displayName = "LockOpen";
var LockOpen_default = LockOpenIcon;
export {
  LockOpen_default as default
};
