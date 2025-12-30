import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PhoneIncomingForwardIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PhoneIncomingForwardIcon.displayName = "PhoneIncomingForward";
var PhoneIncomingForward_default = PhoneIncomingForwardIcon;
export {
  PhoneIncomingForward_default as default
};
