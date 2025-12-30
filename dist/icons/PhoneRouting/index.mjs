import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PhoneRoutingIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PhoneRoutingIcon.displayName = "PhoneRouting";
var PhoneRouting_default = PhoneRoutingIcon;
export {
  PhoneRouting_default as default
};
