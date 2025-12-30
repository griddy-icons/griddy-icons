import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PhoneForwardIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PhoneForwardIcon.displayName = "PhoneForward";
var PhoneForward_default = PhoneForwardIcon;
export {
  PhoneForward_default as default
};
