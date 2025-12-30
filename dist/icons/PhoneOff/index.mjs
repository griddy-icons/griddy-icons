import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PhoneOffIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PhoneOffIcon.displayName = "PhoneOff";
var PhoneOff_default = PhoneOffIcon;
export {
  PhoneOff_default as default
};
