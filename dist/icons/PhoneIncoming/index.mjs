import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PhoneIncomingIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PhoneIncomingIcon.displayName = "PhoneIncoming";
var PhoneIncoming_default = PhoneIncomingIcon;
export {
  PhoneIncoming_default as default
};
