import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PhoneOutgoingIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PhoneOutgoingIcon.displayName = "PhoneOutgoing";
var PhoneOutgoing_default = PhoneOutgoingIcon;
export {
  PhoneOutgoing_default as default
};
